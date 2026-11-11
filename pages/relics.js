function relicPage(relic) {
  if (!relic) return catalogPage('relics');
  const {art, name, rarity, effect, upgrade, owner} = relic;
  return `<div class="back"><a href="#relics">← Back to Relics</a></div>
    <section class="detail" data-relic-rarity="${rarity}"><div class="relic-art"><img src="${art}" alt="${name}"></div>
    <div>${eyebrow(rarity.toUpperCase() + ' RELIC')}<h1>${name}</h1>
    <dl class="facts">${blueCoinUnlockRow('relics', relic)}
      <div><dt>Base shop price</dt><dd>${relic.shopPrice === null ? 'Not sold in shops' : coinAmount(relic.shopPrice, 'gold') + ' Gold'}</dd></div>
    </dl>
    ${relic.shopPrice === null ? '' : `<p>Shop price varies from ${Math.max(0, relic.shopPrice - 20)} to ${relic.shopPrice + 15} Gold before discounts and other price modifiers.</p>`}
    <h2>Obtained from</h2><p>${relic.sources.join(', ')}</p>
    <h2>Base effect</h2><p>${effect}</p><h2>Upgraded effect</h2><p>${upgrade || 'No upgrade listed.'}</p>
    ${owner ? `<a class="starting-relic" href="#characters/${owner.id}">Starting relic of ${owner.name} →</a>` : ''}</div></section>`;
}
