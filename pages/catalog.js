const relics = gameRelics.map(relic => ({
  ...relic,
  owner: characters.find(character => character.relicId === relic.id)
}));
const catalogFilters = { cards: { rarity: '', owner: '', type: '' }, relics: { rarity: '', price: '', source: '' }, enemies: { world: '', type: '' } };

function filterSelect(page, key, label, choices) {
  const options = choices.map(([value, text]) =>
    `<option value="${value}" ${catalogFilters[page][key] === value ? 'selected' : ''}>${text}</option>`);
  return `<label>${label}<select data-filter="${key}">${options.join('')}</select></label>`;
}

function matchesFilters(item, filters) {
  if (filters.source && !item.sources.includes(filters.source)) return false;
  if (filters.price && (filters.price === 'unavailable' ? item.shopPrice !== null : item.shopPrice !== Number(filters.price))) return false;
  if (filters.type && item.type !== filters.type) return false;
  const exclusiveCard = filters.rarity === 'Exclusive' && typeof item.owner === 'string' && item.owner !== 'Shared';
  if (filters.rarity && item.rarity !== filters.rarity && !exclusiveCard) return false;
  if (filters.owner === 'Exclusive') return item.owner !== 'Shared';
  return !filters.owner || item.owner === filters.owner;
}

function catalogResults(page) {
  if (page === 'enemies') return enemyResults();
  const isCard = page === 'cards';
  const items = isCard ? gameCards : relics;
  const matches = items.filter(item => matchesFilters(item, catalogFilters[page]));
  const tiles = matches.map(item => {
    const art = item.art ? `<img src="${item.art}" alt="" loading="lazy">` : '<small>Artwork coming soon.</small>';
    const body = `<div class="relic-art">${art}</div><div class="tile-body">
      ${eyebrow(item.rarity.toUpperCase())}<h3>${item.name}</h3>
      ${isCard ? `<p>${item.owner} · ${item.cost} Gold</p>` : `<p>Obtained from · ${item.sources.join(', ')}</p>`}</div>`;
    return `<a class="relic" ${isCard ? cardPalette(item) : `data-relic-rarity="${item.rarity}"`} href="#${page}/${item.id}">${body}</a>`;
  });
  return `<p role="status">${matches.length} of ${items.length} ${page}</p>` +
    (tiles.length ? `<div class="relic-grid">${tiles.join('')}</div>` : '<p>No entries match these filters.</p>');
}

function catalogPage(page) {
  const isCard = page === 'cards';
  const items = isCard ? gameCards : relics;
  const title = isCard ? 'Cards' : 'Relics';
  const rarities = ['Exclusive', 'Common', 'Advanced', 'Rare', 'Legendary', 'Mythic', 'Special'];
  const rarity = filterSelect(page, 'rarity', 'Rarity', [['', 'All'], ...rarities.map(r => [r,r])]);
  const types = [['', 'All types'], ['Paint', 'Paint'], ['Option', 'Option'], ['Evil', 'Evil']];
  const owners = [['', 'All cards'], ['Shared', 'Shared cards'], ['Exclusive', 'Character-exclusive cards'],
    ...characters.map(c => [c.name, c.name])];
  return heading('THE COLLECTION', title, isCard ? 'Browse cards by rarity, character, and type.' : 'Select a relic to compare its base and upgraded effects.', items.length, title.toUpperCase()) +
    prototypeArtNotice +
    `<div class="catalog-filters" data-catalog="${page}">${rarity}${isCard ? filterSelect(page,'owner','Card pool',owners) + filterSelect(page,'type','Type',types) : relicFilters()}</div>
     <section id="catalog-results">${catalogResults(page)}</section>`;
}

function relicFilters() {
  const prices = [...new Set(relics.map(relic => relic.shopPrice).filter(price => price !== null))].sort((a, b) => a - b);
  const sources = [...new Set(relics.flatMap(relic => relic.sources))].sort();
  return filterSelect('relics', 'price', 'Base shop price', [
    ['', 'All prices'], ...prices.map(price => [String(price), `${price} Gold`]), ['unavailable', 'Not sold in shops']
  ]) + filterSelect('relics', 'source', 'Obtained from', [
    ['', 'All sources'], ...sources.map(source => [source, source])
  ]);
}

main.addEventListener('change', event => {
  const control = event.target.closest('select[data-filter]');
  if (!control) return;
  const page = control.closest('[data-catalog]').dataset.catalog;
  catalogFilters[page][control.dataset.filter] = control.value;
  document.getElementById('catalog-results').innerHTML = catalogResults(page);
});
