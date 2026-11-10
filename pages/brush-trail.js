(() => {
  const motion = matchMedia('(any-pointer: fine) and (prefers-reduced-motion: no-preference)');
  let last = null;

  function reset() {
    last = null;
    document.querySelectorAll('.brush-trail').forEach(mark => mark.remove());
  }

  window.addEventListener('pointermove', event => {
    if (!motion.matches || event.pointerType !== 'mouse') return;
    const point = { x: event.clientX, y: event.clientY, time: event.timeStamp };
    const from = last;
    if (from && Math.hypot(point.x - from.x, point.y - from.y) < 4) return;
    last = point;
    if (!from || point.time - from.time > 80) return;
    const dx = point.x - from.x;
    const dy = point.y - from.y;
    const length = Math.hypot(dx, dy);
    if (length > 80) return;
    const mark = document.createElement('i');
    mark.className = 'brush-trail';
    mark.setAttribute('aria-hidden', 'true');
    mark.style.width = length + 'px';
    mark.style.transform = `translate(${from.x}px, ${from.y}px) translateY(-50%) rotate(${Math.atan2(dy, dx)}rad)`;
    document.body.append(mark);
    mark.animate([{ opacity: .4 }, { opacity: .2, offset: .75 }, { opacity: 0 }],
      { duration: 230, fill: 'forwards' }).onfinish = () => mark.remove();
  }, { passive: true });

  document.documentElement.addEventListener('pointerleave', reset);
  window.addEventListener('blur', reset);
  motion.addEventListener('change', reset);
})();
