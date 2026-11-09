function relicPage(relic) {
  if (!relic) return catalogPage('relics');
  const {art, name, rarity, effect, upgrade, owner} = relic;
  return `<div class="back"><a href="#relics">← Back to Relics</a></div>
    <section class="detail" data-relic-rarity="${rarity}"><div class="relic-art"><img src="${art}" alt="${name}"></div>
    <div>${eyebrow(rarity.toUpperCase() + ' RELIC')}<h1>${name}</h1>
    <dl class="facts">${blueCoinUnlockRow('relics', relic)}</dl>
    <h2>Obtained from</h2><p>${relic.sources.join(', ')}</p>
    <h2>Base effect</h2><p>${effect}</p><h2>Upgraded effect</h2><p>${upgrade || 'No upgrade listed.'}</p>
    ${owner ? `<a class="starting-relic" href="#characters/${owner.id}">Starting relic of ${owner.name} →</a>` : ''}</div></section>`;
}
