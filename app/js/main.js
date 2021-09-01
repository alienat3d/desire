$(function () {
  
  $(".header__button").on('click', function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });


  $(".header__button-menu").on('click', function () {
    $(".menu").toggleClass("menu--opened");
  });
  

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });


  $(".contact-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 5,
    autoplaySpeed: 7000,
    dots: true,
    arrows: false,
    autoplay: true
  });


  $(".article-slider__box").slick({
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><img class='article-slider__angle-left-icon' src='images/icons/angle-left.svg' alt='angle left icon'></button>",
    nextArrow: "<button type='button' class='slick-next'><img class='article-slider__angle-right-icon' src='images/icons/angle-right.svg' alt='angle right icon'></button>"
  });


  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".cat-living-room",
    },
  });
})