$(function () {
  // === ACTIVATE RIGHT SIDE MENU ON DESKTOP ===
  $(".header__button").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });
  // === / ACTIVATE RIGHT SIDE MENU ON DESKTOP ===

  // === ACTIVATE BURGER MENU ===
  $(".header__button-menu").on("click", function () {
    $(".menu").toggleClass("menu--opened");
  });
  // === / ACTIVATE BURGER MENU ===

  // === MOVING .WORKFLOW__ITEM--MEASUREMENTS INSIDE OF .WORKFLOW__ITEMS-BOX FOR ADAPTIVE ===
  if ($(window).width() < 651) {
    $(".workflow__item--measurements").appendTo($(".workflow__items-box"));
  }
  // === / MOVING .WORKFLOW__ITEM--MEASUREMENTS INSIDE OF .WORKFLOW__ITEMS-BOX FOR ADAPTIVE ===

  // === TOP SLIDER IN INDEX.HTML ===
  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
  // === / TOP SLIDER IN INDEX.HTML ===

  // === SLIDER IN CONTACT.HTML ===
  $(".contact-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 5,
    // autoplaySpeed: 7000,
    dots: true,
    arrows: false,
    autoplay: false,
    // responsive: [
    //   {
    //     breakpoint: 1700,
    //     settings: {
    //       slidesToShow: 8,
    //       slidesToScroll: 4,
    //     }
    //   },
    //   {
    //     breakpoint: 1511,
    //     settings: {
    //       slidesToShow: 6,
    //       slidesToScroll: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 1201,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 841,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 541,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 376,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     }
    //   },
    // ]
  });
  // === / SLIDER IN CONTACT.HTML ===

  // === SLIDER IN BLOG.HTML ===
  $(".article-slider__box").slick({
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev'><img class='article-slider__angle-left-icon' src='images/icons/angle-left.svg' alt='angle left icon'></button>",
    nextArrow:
      "<button type='button' class='slick-next'><img class='article-slider__angle-right-icon' src='images/icons/angle-right.svg' alt='angle right icon'></button>",
  });
  // === / SLIDER IN BLOG.HTML ===

  // === ACTIVATE MIXITUP PLUGIN IN INDEX.HTML ===
  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".cat-living-room",
    },
  });
  // === / ACTIVATE MIXITUP PLUGIN IN INDEX.HTML ===
})