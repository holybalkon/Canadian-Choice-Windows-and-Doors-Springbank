// Burger toggle for the mobile menu (.h-nav-mobile)
(function () {
  var btn = document.querySelector('.h-burger');
  var nav = document.getElementById('h-nav-mobile');
  if (!btn || !nav) return;
  function set(open) {
    nav.hidden = !open;
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  btn.addEventListener('click', function () { set(nav.hidden); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  document.addEventListener('click', function (e) {
    if (!nav.hidden && !e.target.closest('.h-burger') && !e.target.closest('#h-nav-mobile')) set(false);
  });
  window.matchMedia('(min-width: 60em)').addEventListener('change', function (m) { if (m.matches) set(false); });
})();