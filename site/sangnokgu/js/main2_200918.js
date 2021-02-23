$(function () {
    /* 200918 추가 */

    //quick
    var home = container.home = {},
        $home = home.$element = $('#home');

    var quick = home.quick = {},
        $quick_box = $('.quick'),
        $quickPrev = quick.$prev = $quick_box.find('.quick_control .prev'),
        $quickNext = quick.$next = $quick_box.find('.quick_control .next'),
        $quickList = $quick_box.find('.slide_box');

    $quickList.slick({
        swipe: true,
        draggable: false,
        slidesToShow: 9,
        slidesToScroll: 1,
        //speed: 1100,
        infinite: true,
        autoplay: false,
        variableWidth: false,
        dots: false,
        arrows: true,
        prevArrow: $quickPrev,
        nextArrow: $quickNext,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
});