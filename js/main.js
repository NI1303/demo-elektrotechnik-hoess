/* Elektrotechnik Höß – Seitenfunktionen: Verteilerkasten (Automat einschalten → Details) */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const dataEl = $('#brk-data'), panel = $('[data-panel]');
  if (!dataEl || !panel) return;
  const data = JSON.parse(dataEl.textContent), brks = $$('.brk');
  const narrow = matchMedia('(max-width: 1100px)');
  brks.forEach(b => b.addEventListener('click', () => {
    brks.forEach(x => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); });
    panel.innerHTML = data[b.dataset.brk].html;
    panel.classList.remove('flash'); void panel.offsetWidth; panel.classList.add('flash');
    if (narrow.matches) { const r = panel.getBoundingClientRect(); if (r.top > innerHeight * .6 || r.top < 0) panel.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }); }
  }));
})();
/* Easter Egg Hauptschalter: solange er „aus“ ist, gehen oben die Lichter aus (Klasse kommt von liebe.js) */
(() => {
  const go = () => { const e = document.querySelector('.lv-egg-hauptschalter'); if (!e) return false;
    new MutationObserver(() => document.body.classList.toggle('lv-dark', e.classList.contains('lv-egg-on'))).observe(e, { attributes: true, attributeFilter: ['class'] }); return true; };
  if (!go()) addEventListener('load', () => setTimeout(go, 300));
})();
