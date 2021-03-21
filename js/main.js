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
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            centerMode: false,
            centerPadding: '15px',
            prevArrow: $('.next-str'),
            nextArrow: $('.prev-str')
        });
    }
    // $('.advantages__card:nth-child(2) .crad--picture').addClass("mb-3");

    const element = document.querySelector('#element'),
        progress = document.querySelector('.step__progress__inner');

    progress.style.width = `${document.documentElement.clientWidth * 100 / element.scrollWidth}%`;

    window.addEventListener('resize', () => {
        progress.style.width = `${document.documentElement.clientWidth * 100 / element.scrollWidth}%`;
    });

    element.addEventListener('scroll', () => {
        progress.style.width = `${(element.scrollLeft + document.documentElement.clientWidth) * 100 / element.scrollWidth}%`;
        console.log();
    });

});