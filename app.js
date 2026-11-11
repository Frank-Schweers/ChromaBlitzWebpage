const routes = {
  home: { title: 'Home', page: home },
  characters: { title: 'Characters', entries: characters, page: characterPage },
  enemies: { title: 'Enemies', entries: enemies, page: enemyPage },
  cards: { title: 'Cards', entries: gameCards, page: cardPage },
  relics: { title: 'Relics', entries: relics, page: relicPage },
  guests: { title: 'Guests', entries: tavernGuests, page: guestsPage },
  guides: { title: 'World Guides', entries: worldGuides, page: guidesPage },
  credits: { title: 'Credits', page: creditsPage }
};

function render() {
  const [page, id] = location.hash.slice(1).split('/');
  const active = Object.hasOwn(routes, page) ? page : 'home';
  const route = routes[active];
  const entry = id && route.entries?.find(item => item.id === id);
  main.innerHTML = route.page(entry);
  document.title = `ChromaBlitz · ${entry?.name || route.title}`;
  for (const link of document.querySelectorAll('[data-page]')) {
    const current = link.dataset.page === active;
    link.classList.toggle('active', current);
    if (current) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', () => {
  render();
  main.focus({preventScroll: true});
});
render();
