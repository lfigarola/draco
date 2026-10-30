// The mobile overlay stays outside document flow to preserve reading position.
const menu = document.querySelector('#main-nav');
const toggle = document.querySelector('.menu-toggle');
const mobile = window.matchMedia('(max-width: 680px)');
menu.dataset.enhanced = '';
function closeMenu(returnFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
  menu.hidden = mobile.matches;
  if (returnFocus && mobile.matches) toggle.focus();
}
function setBreakpoint() {
  const containedFocus = menu.contains(document.activeElement);
  toggle.hidden = !mobile.matches;
  closeMenu(containedFocus);
  if (!mobile.matches && document.activeElement === toggle) menu.querySelector('a').focus();
}
toggle.addEventListener('click', () => {
  const opening = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(opening));
  toggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
  menu.hidden = !opening;
});
menu.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || !mobile.matches) return;
  closeMenu();
  const destination = document.querySelector(link.hash);
  if (destination) { destination.tabIndex = -1; destination.focus({ preventScroll: true }); }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header-inner') && toggle.getAttribute('aria-expanded') === 'true') closeMenu(menu.contains(document.activeElement));
});
document.addEventListener('focusin', event => {
  if (!event.target.closest('.header-inner') && toggle.getAttribute('aria-expanded') === 'true') closeMenu();
});
mobile.addEventListener('change', setBreakpoint);
setBreakpoint();
