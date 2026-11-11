const relics = gameRelics.map(relic => ({
  ...relic,
  owner: characters.find(character => character.relicId === relic.id)
}));
const catalogFilters = { cards: { rarity: '', owner: '', character: '', type: '' }, relics: { rarity: '', minPrice: '', maxPrice: '', source: '' }, enemies: { world: '', type: '' } };

function filterSelect(page, key, label, choices, disabled = false) {
  const options = choices.map(([value, text]) =>
    `<option value="${value}" ${catalogFilters[page][key] === value ? 'selected' : ''}>${text}</option>`);
  return `<label>${label}<select data-filter="${key}" ${disabled ? 'disabled' : ''}>${options.join('')}</select></label>`;
}

function matchesFilters(item, filters) {
  if (filters.source && !item.sources.includes(filters.source)) return false;
  const hasMin = filters.minPrice !== undefined && filters.minPrice !== '';
  const hasMax = filters.maxPrice !== undefined && filters.maxPrice !== '';
  if ((hasMin || hasMax) && item.shopPrice === null) return false;
  if (hasMin && item.shopPrice < Number(filters.minPrice)) return false;
  if (hasMax && item.shopPrice > Number(filters.maxPrice)) return false;
  if (filters.type && item.type !== filters.type) return false;
  const exclusiveCard = filters.rarity === 'Exclusive' && typeof item.owner === 'string' && item.owner !== 'Shared';
  if (filters.rarity && item.rarity !== filters.rarity && !exclusiveCard) return false;
  if (filters.owner === 'Exclusive') return item.owner !== 'Shared' && (!filters.character || item.owner === filters.character);
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
  if (!isCard) rarities.push('Crystal');
  const rarity = filterSelect(page, 'rarity', 'Rarity', [['', 'All'], ...rarities.map(r => [r,r])]);
  const types = [['', 'All types'], ['Paint', 'Paint'], ['Option', 'Option'], ['Evil', 'Evil']];
  const owners = [['', 'All'], ['Shared', 'Shared'], ['Exclusive', 'Exclusive']];
  const characterChoices = [['', 'All'], ...characters.map(character => [character.name, character.name])];
  return heading('THE COLLECTION', title, items.length, title.toUpperCase()) +
    prototypeArtNotice +
    `${isCard ? '' : '<div class="relic-browser">'}<div class="catalog-filters ${isCard ? '' : 'relic-sidebar'}" data-catalog="${page}">${rarity}${isCard ? filterSelect(page,'owner','Card pool',owners) + filterSelect(page, 'character', 'Character', characterChoices, catalogFilters.cards.owner !== 'Exclusive') + filterSelect(page,'type','Type',types) : relicFilters()}</div>
     <section id="catalog-results">${catalogResults(page)}</section>${isCard ? '' : '</div>'}`;
}

function relicFilters() {
  const sources = [...new Set(relics.flatMap(relic => relic.sources))].sort();
  return `<fieldset class="price-range"><legend>Base shop price (Gold)</legend>
    <label>Minimum<input type="number" min="0" step="1" data-filter="minPrice" placeholder="No minimum" value="${catalogFilters.relics.minPrice}"></label>
    <label>Maximum<input type="number" min="0" step="1" data-filter="maxPrice" placeholder="No maximum" value="${catalogFilters.relics.maxPrice}"></label>
    <small>Leave both blank for all relics. A price range shows shop items only.</small>
    <p class="price-error" role="status"></p>
  </fieldset>` + filterSelect('relics', 'source', 'Obtained from', [
    ['', 'All sources'], ...sources.map(source => [source, source])
  ]);
}

main.addEventListener('change', event => {
  const control = event.target.closest('[data-filter]');
  if (!control) return;
  const page = control.closest('[data-catalog]').dataset.catalog;
  if (control.type === 'number' && !control.validity.valid) return;
  catalogFilters[page][control.dataset.filter] = control.value;
  if (page === 'relics') {
    const {minPrice, maxPrice} = catalogFilters.relics;
    const invalid = minPrice !== '' && maxPrice !== '' && Number(minPrice) > Number(maxPrice);
    main.querySelector('.price-error').textContent = invalid ? 'Minimum must not exceed maximum.' : '';
  }
  if (page === 'cards' && control.dataset.filter === 'owner') {
    const character = main.querySelector('select[data-filter="character"]');
    character.disabled = control.value !== 'Exclusive';
    if (character.disabled) {
      catalogFilters.cards.character = '';
      character.value = '';
    }
  }
  document.getElementById('catalog-results').innerHTML = catalogResults(page);
});
