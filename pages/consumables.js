function consumablesPage(item) {
  if (item) {
    return `<div class="back"><a href="#consumables">← Back to Consumables</a></div>
      <section class="detail">
        <figure class="relic-art"><img src="${item.art}" alt="${item.name}"></figure>
        <div>${eyebrow('CONSUMABLE')}<h1>${item.name}</h1>
          <dl class="facts"><div><dt>Base shop price</dt><dd>${coinAmount(item.price, 'gold')} Gold</dd></div></dl>
          <h2>Effect</h2><p>${item.effect}</p>
        </div>
      </section>`;
  }
  return heading('THE COLLECTION', 'Consumables', consumables.length, 'CONSUMABLES') +
    prototypeArtNotice +
    `<div class="relic-grid">${consumables.map(entry => `
      <a class="relic" href="#consumables/${entry.id}">
        <div class="relic-art"><img src="${entry.art}" alt="" loading="lazy"></div>
        <div class="tile-body"><h3>${entry.name}</h3><p>${coinAmount(entry.price, 'gold')} Gold</p></div>
      </a>`).join('')}</div>`;
}
