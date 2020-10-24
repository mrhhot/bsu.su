// MENU BURGER

$(document).ready(function () {
    $('.menu__icon').click(function (event) {
        $('.menu__icon, .menu__body').toggleClass('active_burger');
        $('body').toggleClass('lock')
    });
});

/* ЗАКРЫТИЕ МЕНЮ ПО ТАПУ В ЛЮБОМ МЕСТЕ

$('.header__list').click(function(event) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');}
*/


// SLIDER

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        speed: 1500,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 2000,
        touchThreshold: 10,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        fade: true,
        asNavFor: ".slider-mini",
    });
    $('.slider-mini').slick({
        slidesToShow: 5,
        arrows: false,
        speed: 1500,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 2000,
        touchThreshold: 10,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        asNavFor: ".slider",
    });
});
