from pathlib import Path
import re,json,shutil,sys
base=Path(sys.argv[1])
def read(f):return (base/f).read_text(encoding='utf-8-sig')
def entries(f,kind):
    parts=re.split(r'\['+kind+r'\.(\w+)\]\s*=\s*new\(',read(f))
    return dict(zip(parts[1::2],parts[2::2]))
def strings(block):return re.findall(r'"([^"]*)"',block)
manifest_file=Path('assets/manifest.json')
manifest=json.loads(manifest_file.read_text(encoding='utf8'))
def artwork(path,group):
    src=Path('Art')/(path+'.png')
    dst=Path('assets')/group/src.name
    if not src.is_file():return None
    if not dst.exists():shutil.copyfile(src,dst)
    if not any(i['asset']==dst.as_posix() for i in manifest):manifest.append(dict(source=str(src),asset=dst.as_posix()))
    return dst.as_posix()
values=entries('Relics/RelicEffectValuesCatalog.cs','RelicCatalog')
upgrades=entries('Relics/RelicUpgradeCatalog.cs','RelicCatalog')
def resolve(text,block,baseblock):
    def nums(b):
        return {k.lower():v for k,v in re.findall(r'(\w+)\s*[:=]\s*(\d+)',b.replace('RedShoesBaseUses','3'))}
    n=nums(block);n['baseacquiredcards']=nums(baseblock).get('acquiredcards',0)
    n['basevictorygoldbonuspercent']=int(n.get('basevictorygoldpercent',100))-100
    for prefix in ['woodenshield','proliferation']:
        n[prefix+'chancepercent']=format(int(n.get(prefix+'chanceperthousand',0))/10,'g')
    return re.sub(r'\{value:(\w+)\}',lambda m:str(n[m[1].lower()]),text).split(' (Uses remaining:')[0]
relics=[]
for key,block in entries('Relics/RelicCatalogData.cs','RelicCatalog').items():
    rarity=re.search(r'RelicRarity\.(\w+)',block)[1]
    ss=strings(block.split('RelicRarity.')[0]);name,*effects,path=ss
    art=artwork(path,'relics');raw=values.get(key,'');up=upgrades.get(key)
    effect=resolve(''.join(effects),raw,raw)
    upgrade=resolve(''.join(strings(up.split('tuning:')[0].split('),')[0])),up,raw) if up else None
    source_labels = {'Shop': 'Shop', 'Elite': 'Elite battle', 'Boss': 'Boss battle',
                     'Treasure': 'Treasure', 'Event': 'Event', 'Starting': 'Character starting relic',
                     'StageStarting': 'Stage start'}
    sources = [source_labels[key] for key in re.findall(r'RelicSource\.(\w+)', block)]
    assert sources, name
    price = re.search(r'RelicSource\.\w+(?:\s*\|\s*RelicSource\.\w+)*\s*,\s*(\d+)\s*\)', block)
    shop_price = int(price[1]) if 'Shop' in sources else None
    relics.append(dict(shopPrice=shop_price,sources=sources,id=path.split('/')[-1],name=name,rarity="Mythic" if rarity=="StageStarting" else rarity,effect=effect,upgrade=upgrade,art=art))
artmap=dict(re.findall(r'\[CardType\.(\w+)\]\s*= A\("[^"]+", "([^"]+)"',read('Cards/CardPresentationCatalog.cs')))
cards=[]
for key,block in entries('Cards/CardCatalogData.cs','CardType').items():
    name,cost,rarity=re.search(r'CardType\.\w+,\s*"([^"]+)",\s*(\d+),\s*CardRarity\.(\w+)',block).groups()
    owner=re.search(r'ownerCharacterId:\s*(?:[\w.]+\.)?(\w+)\s*[,)]',block)
    cardtype=re.search(r'category:\s*CardCategory\.(\w+)',block)
    cards.append(dict(id=key,name=name,cost=int(cost),rarity=rarity,owner=owner[1].replace('Potty','Potti') if owner else 'Shared',type=cardtype[1] if cardtype else 'Paint',art=artwork('Art/Cards/Artwork/'+artmap.get(key,'missing'),'cards')))
# Resolve the English upgrade descriptions against the game's upgraded values.
upgrade_source = read('Cards/CardUpgradeCatalog.cs')
upgrade_entries = re.findall(
    r'\[CardType\.(\w+)\]\s*=\s*(?:new|CardUpgradeDefinition\.CostOnly)\('
    r'CardType\.\w+,\s*(null|\d+)(?:,\s*("(?:\\.|[^"\\])*"))?\)',
    upgrade_source)
assert len(upgrade_entries) == len(re.findall(r'\[CardType\.\w+\]\s*=', upgrade_source))
card_values = {(card, field): int(upgraded or original)
               for card, field, original, upgraded in re.findall(
                   r'\[\(CardType\.(\w+), CardEffectValue\.(\w+)\)\] = new\((-?\d+)(?:, (-?\d+))?\)',
                   read('Cards/CardEffectValuesCatalog.cs'))}
base_values = {(card, field): int(original) for card, field, original in re.findall(
    r'\[\(CardType\.(\w+), CardEffectValue\.(\w+)\)\] = new\((-?\d+)', read('Cards/CardEffectValuesCatalog.cs'))}
exhaust_modes = dict(re.findall(r'\[CardType\.(\w+)\] = CardExhaustMode\.(\w+)', read('Cards/CardExhaustCatalog.cs')))
def effect_text(card_id, template, values):
    def number(match):
        field = match[1]
        if field == 'PatternSize' and (card_id, 'PatternRadius') in values:
            return str(values[card_id, 'PatternRadius'] * 2 + 1)
        return str(values[card_id, field])
    text = re.sub(r'\{value:(\w+)\}', number, template)
    return re.sub(r'\{(\w+)\}', r'[[\1]]', text)

by_id = {card['id']: card for card in cards}
for card_id, block in entries('Cards/CardCatalogData.cs','CardType').items():
    literal = r'"(?:\\.|[^"\\])*"'
    template = re.search(r'CardRarity\.\w+,\s*(' + literal + r'(?:\s*\+\s*' + literal + r')*)', block)[1]
    by_id[card_id]['effect'] = effect_text(card_id, ''.join(json.loads(v) for v in re.findall(literal, template)), base_values)
    by_id[card_id]['exhaust'] = exhaust_modes.get(card_id, 'None')
for card_id, cost, template in upgrade_entries:
    card = by_id[card_id]
    effect = effect_text(card_id, json.loads(template), card_values) if template else ''
    # Odd-indexed segments are the game's explicit upgrade emphasis spans.
    segments = re.split(r'\{upgrade:([^{}]+)\}', effect)
    assert not any('{' in part or '}' in part for part in segments), card_id
    card['upgrade'] = dict(cost=card['cost'] if cost == 'null' else int(cost), segments=segments)
for records in [cards,relics]:
    assert len(records)==len({r['id'] for r in records})
    records.sort(key=lambda r:r['name'])
    print(len(records),'entries;',sum(not r['art'] for r in records),'missing images')
for filename, variable, records in [('cards', 'gameCards', cards), ('relics', 'gameRelics', relics)]:
    Path('data', filename + '.js').write_text(
        f'const {variable} = ' + json.dumps(records, indent=2) + ';\n', encoding='utf8')
manifest_file.write_text(json.dumps(manifest,indent=2),encoding='utf8')
