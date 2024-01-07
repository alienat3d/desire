// === NAV-MENU-ACTIVE-STYLE ===
const menuLinks = document.querySelectorAll('.menu__list-link'),
  url = window.location.pathname.slice(1, length - 5);

menuLinks.forEach(link => {
  link.classList.remove('menu__list-link--active');
  // link.outerHTML.replace(/^<span(.*)span>$/, "<a$1a>")
  if (link.innerText.toLowerCase() === url) {
    link.classList.add('menu__list-link--active');
    // link.outerHTML.replace(/^<a(.*)a>$/, "<span$1span>");
  }
});
// === / NAV-MENU-ACTIVE-STYLE ===