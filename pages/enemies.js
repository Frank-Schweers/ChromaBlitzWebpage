const enemyListNames = { citrina: 'Citrina', flaurachester: 'Flaura Chester' };
const enemies = Object.entries(enemyDetails).map(([id, info]) => ({
  id, name: enemyListNames[id] || info.name
}));
const animatedEnemies = new Set(['blobber', 'ted', 'flaura', 'snek', 'mossy', 'mayple']);
function enemyPortrait(enemy, detailView = false) {
  if (detailView && animatedEnemies.has(enemy.id)) {
    return `<div class="portrait"><picture>
      <source media="(prefers-reduced-motion: reduce)" srcset="assets/enemies/${enemy.id}.png">
      <img src="assets/enemies/animated/${enemy.id}.png" alt="${enemy.name}">
    </picture></div>`;
  }
  return `<div class="portrait"><img src="assets/enemies/${enemy.id}.png" alt="${enemy.name}" loading="lazy"></div>`;
}
const enemyTypes = {
  megaflaura: 'Elite', papastar: 'Elite', grandmastar: 'Elite', moley: 'Elite',
  hyperflaura: 'Boss', megachester: 'Boss', megawendy: 'Boss', ribbit: 'Boss'
};

function enemyResults() {
  const {world, type} = catalogFilters.enemies;
  const matches = enemies.filter(({id}) =>
    (!world || enemyDetails[id].level === world) && (!type || (enemyTypes[id] || 'Normal') === type));
  const tiles = matches.map(entry => `<a class="character" href="#enemies/${entry.id}">
    ${enemyPortrait(entry)}<div class="tile-body"><h3>${entry.name}</h3>
    <p>World ${enemyDetails[entry.id].level} · ${enemyTypes[entry.id] || 'Normal'}</p></div></a>`);
  return `<p role="status">${matches.length} of ${enemies.length} enemies</p>` +
    (tiles.length ? `<div class="character-grid">${tiles.join('')}</div>` : '<p>No enemies match these filters.</p>');
}

function enemyPatterns(id, patterns) {
  return patterns.map((caption, index) => {
    if (id === 'shapira') return `<p>${caption}</p>`;
    const path = `assets/enemies/patterns/${id}-${index + 1}`;
    return `<figure class="pattern-example"><picture>
      <source media="(prefers-reduced-motion: reduce)" srcset="${path}.png">
      <img src="${path}.gif" alt="" loading="lazy">
    </picture><figcaption>${caption}</figcaption></figure>`;
  }).join('');
}

function enemyPage(enemy) {
  if (enemy) {
    const info = enemyDetails[enemy.id];
    return `<div class="back"><a href="#enemies">← Back to Enemies</a></div>
      <section class="detail"><figure>${enemyPortrait(enemy, true)}</figure>
      <div>${eyebrow('ENEMY CODEX')}<h1>${info.name}</h1><dl class="facts"><div><dt>Level</dt><dd>${info.level}</dd></div>
      <div><dt>Floor</dt><dd>${info.floors}</dd></div></dl><h2>Passive</h2><p>${info.passive}</p><h2>Patterns</h2>
      ${enemyPatterns(enemy.id, info.patterns)}<h2>Codex entry</h2><p class="codex-copy">${info.story}</p></div></section>`;
  }
  return heading('ENEMY CODEX', 'Enemies', 'Choose an enemy to open its codex entry.', enemies.length, 'ENEMIES') +
    prototypeArtNotice +
    `<div class="catalog-filters" data-catalog="enemies">
      ${filterSelect('enemies', 'world', 'World', [['', 'All worlds'], ['1', 'World 1'], ['2', 'World 2']])}
      ${filterSelect('enemies', 'type', 'Type', [['', 'All types'], ['Normal', 'Normal'], ['Elite', 'Elite'], ['Boss', 'Boss']])}
    </div><section id="catalog-results">${enemyResults()}</section>`;
}
