function guestsPage(guest) {
  if (guest) {
    const {id, name, description, heading, text} = guest;
    return `<div class="back"><a href="#guests">← Back to Guests</a></div>
      <section class="detail"><figure class="relic-art"><img src="assets/guests/full-body/${id}.png" alt="${name}"></figure>
      <div>${eyebrow('TAVERN GUEST')}<h1>${name}</h1><h2>At the tavern</h2><p>${description}</p>
      <h2>${heading}</h2><p class="codex-copy">${text}</p></div></section>`;
  }
  return heading('THE COLLECTION', 'Tavern Guests', tavernGuests.length, 'GUESTS') +
    prototypeArtNotice +
    `<div class="guest-grid">${tavernGuests.map(({id, name, description}) =>
    `<a href="#guests/${id}" class="relic"><div class="relic-art"><img src="assets/guests/${id}.png" alt="" loading="lazy"></div>
      <div class="tile-body"><h2>${name}</h2><p>${description}</p></div></a>`).join('')}</div>`;
}
