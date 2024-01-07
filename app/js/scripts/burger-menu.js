// === ACTIVATE BURGER MENU ===
export function burgerMenu() {
  // $(".header__button-menu").on("click", function () {
  //   $(".menu").toggleClass("menu--opened");
  // });

  const burgerBtn = document.querySelector('.header__button-menu'),
    menu = document.querySelector('.menu');

  burgerBtn.addEventListener('click', () => menu.classList.toggle('menu--opened'));
}
// === / ACTIVATE BURGER MENU ===