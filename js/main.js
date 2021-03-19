// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });


$(document).ready(function() {
    // slider
    if ($(window).width() < 476) {

        $('.autoplay').slick({
            infinite: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            centerMode: false,
            centerPadding: '15px',
            prevArrow: $('.prev-str'),
            nextArrow: $('.next-str')
        });
    }
    // $('.advantages__card:nth-child(2) .crad--picture').addClass("mb-3");
});