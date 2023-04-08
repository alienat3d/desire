export function burgerMenu() {
  // === ACTIVATE BURGER MENU ===
  $(".header__button-menu").on("click", function () {
    $(".menu").toggleClass("menu--opened");
  });
  // === / ACTIVATE BURGER MENU ===
}