function cardPalette(card) {
  return `data-card-type="${card.type}" data-card-rarity="${card.rarity}"`;
}

function highlightUpgrade(text) {
  return `<strong class="upgrade-change">${text}</strong>`;
}

const keywordNames = {square:'Square', cross:'Cross', diamond:'Diamond', gold:'Gold', armor:'Defense', exhaust:'Exhaust', random:'Random', flag:'Flag', confusion:'Confusion', x:'X pattern'};

function renderEffectText(text) {
  return text.replace(/\[\[(\w+)\]\]/g, (_, key) => {
    const name = keywordNames[key];
    const path = key === 'flag' ? 'assets/cards/signal_flag.png' : `assets/card-icons/${key}.png`;
    const symbol = key === 'confusion' ? '↻' : `<img class="keyword-icon" src="${path}" alt="">`;
    return `<span class="card-keyword">${symbol} ${name}</span>`;
  });
}

function cardEffectBody(card, upgraded) {
  const parts = upgraded && card.upgrade.segments.some(Boolean) ? card.upgrade.segments : [card.effect];
  let body = parts.map((part, index) => index % 2 ? highlightUpgrade(renderEffectText(part)) : renderEffectText(part)).join('');
  const exhausts = card.exhaust === 'Always' || (card.exhaust === 'BaseOnly' && !upgraded);
  if (exhausts && !parts.join('').includes('[[exhaust]]')) body += '\n' + renderEffectText('[[exhaust]]');
  if (card.id === 'Smelt') body += '\nExhausts if unplayed.';
  if (card.exhaust === 'BaseOnly' && upgraded) body += '\n' + highlightUpgrade('No longer Exhausts on play.');
  return body;
}

function cardPage(card) {
  if (!card) return catalogPage('cards');
  const art = card.art ? `<img src="${card.art}" alt="${card.name} artwork">` : '<small>Artwork coming soon.</small>';
  return `<div class="back"><a href="#cards">← Back to Cards</a></div>
    <section class="detail" ${cardPalette(card)}><div class="relic-art">${art}</div>
    <div>${eyebrow(card.rarity.toUpperCase() + ' CARD')}<h1>${card.name}</h1>
    <dl class="facts"><div><dt>Cost</dt><dd>${card.cost} Gold</dd></div>
    <div><dt>Card pool</dt><dd>${card.owner}</dd></div>
    <div><dt>Card type</dt><dd>${card.type}</dd></div>
    ${blueCoinUnlockRow('cards', card)}</dl>
    <h2>Base effect</h2><p class="codex-copy">${cardEffectBody(card, false)}</p>
    <h2>Upgrade</h2>
    ${card.upgrade ? `<p><strong>Gold cost</strong> · ${card.cost === card.upgrade.cost ? card.cost : card.cost + ' → ' + highlightUpgrade(card.upgrade.cost)}</p>
      <p class="codex-copy">${cardEffectBody(card, true)}</p>`
      : '<p>This card cannot be upgraded.</p>'}</div></section>`;
}
