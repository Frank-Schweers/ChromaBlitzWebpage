const main=document.querySelector('main');
const eyebrow=t=>`<div class="eyebrow">${t}</div>`;
const soon=()=>`<div class="soon"><span class="plus" aria-hidden="true">+</span><h3>Coming soon.</h3><small>A NEW COLOR TO DISCOVER</small></div>`;
function heading(label,title,text,count,unit){return `<section class="page-heading"><div>${eyebrow(label)}<h1>${title}</h1><p>${text}</p></div><div class="count"><strong>${count}</strong>${unit}<p>Discover the world of ChromaBlitz</p></div></section>`}

const prototypeArtNotice = '<p class="prototype-art-notice">Many illustrations are still placeholders from the prototype.</p>';

function blueCoinUnlockRow(category, item) {
  const price = blueCoinPrices[category][item.id];
  let condition = 'No Blue Coin purchase required.';
  if (price !== undefined) {
    const owner = category === 'cards' && characters.find(character => character.name === item.owner);
    const prerequisite = owner && blueCoinPrices.characters[owner.id] !== undefined
      ? `Unlock ${owner.name} first. ` : '';
    condition = `${prerequisite}Spend ${price} Blue Coins when this offer appears in the shop.`;
  }
  return `<div><dt>Blue Coin unlock</dt><dd>${condition}</dd></div>`;
}
