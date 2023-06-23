export function rightSideMenu() {
  // === ACTIVATE RIGHT SIDE MENU ON DESKTOP ===
  $(".header__button").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });
  // === / ACTIVATE RIGHT SIDE MENU ON DESKTOP ===
}