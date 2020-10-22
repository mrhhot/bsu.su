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
