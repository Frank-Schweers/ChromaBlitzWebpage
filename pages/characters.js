function characterTile(character) {
  const {id, name, species, color, line} = character;
  return `<a class="character" href="#characters/${id}">
    <div class="portrait" style="--tone:${color}">
      <img src="assets/characters/${id}.png" alt="${name}, the ${species.toLowerCase()} character" loading="lazy">
    </div>
    <div class="tile-body">
      <div class="tile-title"><h3>${name}</h3><span>${species}</span></div>
      <p>${line}</p>
    </div>
  </a>`;
}

function roster() {
  const count = String(characters.length).padStart(2, '0');
  return heading('MEET THE CHARACTERS', 'Each with their own color, one adventure.',
    'Meet your next colorful companion.', count, 'COLORFUL FRIENDS') +
    `<div class="character-grid">
      ${characters.map(characterTile).join('')}${Array.from({length: 6}, soon).join('')}
    </div>
    <p class="note">ⓘ More friends and character details are coming soon.</p>`;
}

function deckCardLink(entry) {
  const name = entry.split(' ×')[0];
  const card = gameCards.find(item => item.name === name);
  return `<li><a class="deck-link" href="#cards/${card.id}">${entry}</a></li>`;
}
function relatedCardLink(card) {
  return `<a class="related-card" href="#cards/${card.id}">
    <img src="${card.art}" alt="${card.name} illustration">
    <div>${eyebrow('FOX · CARD ARTWORK')}<h3>${card.name}</h3><p>View card details →</p></div></a>`;
}

function characterPage(character) {
  if (!character) return roster();
  const related = (character.relatedCards || []).map(id => gameCards.find(card => card.id === id));
  return `<div class="back"><a href="#characters">← Back to Characters</a><small>Characters / ${character.name}</small></div>
    <section class="detail">
      <figure><div class="portrait" style="--tone:${character.color}"><picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="assets/characters/${character.detailArt}">
  <img src="assets/characters/${character.id}-codex.png" alt="${character.name}, the ${character.species.toLowerCase()} character">
</picture></div><figcaption>${character.name} the ${character.species.toLowerCase()}<small>CHARACTER ART</small></figcaption></figure><div>${eyebrow('MEET THE CHARACTERS / '+character.species)}<h1>${character.name}</h1><p>${character.description}</p><dl class="facts">
${blueCoinUnlockRow('characters', character)}
<div><dt>Starting gold</dt><dd>${character.gold.toLocaleString('en-US')}</dd></div>
<div><dt>Difficulty</dt><dd>${character.difficulty}</dd></div>
<div><dt>Starting deck</dt><dd><ul class="deck-list">${character.deck.map(deckCardLink).join('')}</ul></dd></div>
<div><dt>Starting relic</dt><dd><a class="starting-relic" href="#relics/${character.relicId}"><img src="assets/relics/${character.relicId}.png" width="36" height="36" alt="">${character.relic} →</a></dd></div></dl>
<h2>Story</h2><p>${character.story}</p></div></section>
    <section class="related"><div class="section-top"><h2>Related card artwork</h2><a href="#cards"><small>View Cards ↗</small></a></div>
      <div class="related-grid">${related.length ? related.map(relatedCardLink).join('') : soon()}</div></section>`;
}
