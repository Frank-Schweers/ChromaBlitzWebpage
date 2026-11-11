function guideArt(guide) {
  return guide.art
    ? `<img src="${guide.art}" alt="${guide.name}" loading="lazy">`
    : '<p>Artwork coming soon.</p>';
}

function guidesPage(guide) {
  if (!guide) {
    return heading('MEET THE WORLD GUIDES', 'World Guides',
      
      worldGuides.length, 'GUIDES') +
      `<div class="guest-grid">${worldGuides.map(entry => `
        <a class="relic" href="#guides/${entry.id}">
          <div class="relic-art">${guideArt(entry)}</div>
          <div class="tile-body">${eyebrow('WORLD ' + entry.world)}
            <h2>${entry.name}</h2><p>${entry.description}</p>
          </div>
        </a>`).join('')}</div>`;
  }
  const gifts = relics.filter(relic => relic.id.startsWith(guide.id + '_') && relic.sources.includes('Stage start'));
  return `<div class="back"><a href="#guides">← Back to World Guides</a></div>
    <section class="detail">
      <figure class="relic-art">${guideArt(guide)}</figure>
      <div>${eyebrow('WORLD ' + guide.world)}<h1>${guide.name}</h1><p>${guide.description}</p></div>
    </section>
    <h2>Relic gifts</h2>
    ${gifts.length ? `<p>Choose one of up to three randomly offered relics. Previously acquired relics are excluded from the offers.</p>
      <div class="relic-grid">${gifts.map(relic => `
        <a class="relic" data-relic-rarity="${relic.rarity}" href="#relics/${relic.id}">
          <div class="relic-art"><img src="${relic.art}" alt="" loading="lazy"></div>
          <div class="tile-body">${eyebrow(relic.rarity.toUpperCase())}<h3>${relic.name}</h3><p>${relic.effect}</p></div>
        </a>`).join('')}</div>` : '<p>No relic gifts are currently available from Amina.</p>'}`;
}
