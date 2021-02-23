
$(function(){
    $(".visual-slide").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover : true,
        fade: true, // 200914 추가
        cssEase: 'linear', // 200914 추가
    });
    $("body").on("click",".visual-play",function(e){
        var ck = $(this).hasClass("on");
        if(ck){
            $(this).removeClass("on");
            $('.visual-slide').slick('slickPlay');
        }else{
            $(this).addClass("on");
            $('.visual-slide').slick('slickPause');
        }
    });
    $("body").on("click",".visual-left",function(e){
        $('.visual-slide').slick("slickPrev");
    });
    $("body").on("click",".visual-right",function(e){
        $('.visual-slide').slick("slickNext");
    });
    $('body').on('afterChange', '.visual-slide', function(slick, slide){
        var num = $(this).slick('slickCurrentSlide')+1;
        $(".visual-page").html("<strong>"+num+"</strong> / "+slide.slideCount);
    });
    $(".event-slide").slick({
        arrows: false,
        slidesToShow: 1,
        dots: false,
        accessibility : true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover : false
    });
    $("body").on("click","#event-control .slide-start",function(e){
        var ck = $(this).hasClass("on");
        if(ck){
            $(this).removeClass("on");
            $('.event-slide').slick('slickPlay');
        }else{
            $(this).addClass("on");
            $('.event-slide').slick('slickPause');
        }
    });
    $("body").on("click","#event-control .slide-prev",function(e){
        $('.event-slide').slick("slickPrev");
    });
    $("body").on("click","#event-control .slide-next",function(e){
        $('.event-slide').slick("slickNext");
    });
    $(".minwon-slide").slick({
        arrows: false,
        slidesToShow: 4,
        dots: false,
        accessibility : true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover : false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2

                }
            }
        ]
    });
    $("body").on("click",".minwon-cont .slide-start",function(e){
        var ck = $(this).hasClass("on");
        if(ck){
            $(this).removeClass("on");
            $('.minwon-slide').slick('slickPlay');
        }else{
            $(this).addClass("on");
            $('.minwon-slide').slick('slickPause');
        }
    });
    $("body").on("click",".minwon-cont .slide-prev",function(e){
        $('.minwon-slide').slick("slickPrev");
    });
    $("body").on("click",".minwon-cont .slide-next",function(e){
        $('.minwon-slide').slick("slickNext");
    });

    $(".photo-slide").slick({
        swipeToSlide: true,
        arrows: false,
        slidesToShow:4,
        dots: false,
        accessibility : true,
        variableWidth: true,
        //autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover : false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3

                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 630,
                settings: {
					mobileFirst: true,
				}
            }
        ]
    });
    $('.photo-slide').slick('setPosition');
    $('.photo- slide').slick('refresh');
    $("body").on("click",".photo-cont .slide-start",function(e){
        var ck = $(this).hasClass("on");
        if(ck){
            $(this).removeClass("on");
            $('.photo-slide').slick('slickPlay');
        }else{
            $(this).addClass("on");
            $('.photo-slide').slick('slickPause');
        }
    });
    $("body").on("click",".photo-cont .slide-prev",function(e){
        $('.photo-slide').slick("slickPrev");
    });
    $("body").on("click",".photo-cont .slide-next",function(e){
        $('.photo-slide').slick("slickNext");
    });

    $(".popupzone-slide").slick({
        arrows: false,
        slidesToShow:1,
        dots: false,
        accessibility : true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover : false,
        // 200914 추가
        fade: true, 
        cssEase: 'linear'
    });
    $("body").on("click",".popupzone-cont .slide-start",function(e){
        var ck = $(this).hasClass("on");
        if(ck){
            $(this).removeClass("on");
            $('.popupzone-slide').slick('slickPlay');
        }else{
            $(this).addClass("on");
            $('.popupzone-slide').slick('slickPause');
        }
    });
    $("body").on("click",".popupzone-cont .slide-prev",function(e){
        $('.popupzone-slide').slick("slickPrev");
    });
    $("body").on("click",".popupzone-cont .slide-next",function(e){
        $('.popupzone-slide').slick("slickNext");
    });
    $('body').on('afterChange', '.popupzone-slide', function(slick, slide){
        var num = $(this).slick('slickCurrentSlide')+1;
        $(".popupzone-cont .page").html("<strong>"+num+"</strong>/"+slide.slideCount);
    });
    $("body").on("click",".center-select-header",function(e){
        $('.center-cont .center-select ul').show();
    });
    $("body").on("mouseleave",".center-cont .center-select",function(e){
        $('.center-cont .center-select ul').hide();
    });

    $("body").on("click",".news-tabs a",function(e){
        var _id = $(this).attr("data-id");
        var _title = $(this).attr("data-title");
        $(".news-tabs a").removeClass("on");
        $(this).addClass("on");
        $(".tab-area").hide();
        $("#"+_id).show();
        $(".news-tabs .slide-more").attr("title", _title);
    });

    //banner
    var main = container.main = {},
        $main = main.$element = $('#main');

    var banner = main.banner = {},
        $banner_box = $('.banner_box'),
        $bannerPrev = banner.$prev = $banner_box.find('.banner_control .button_prev'),
        $bannerAuto = banner.$auto = $banner_box.find('.banner_control .button_ctrl'),
        $bannerNext = banner.$next = $banner_box.find('.banner_control .button_next'),
        $bannerList = $banner_box.find('.banner_list');

    $bannerList.slick({
        swipe : true,
        draggable : false,
        slidesToShow : 4,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        autoplay : true,
        variableWidth: true,
        dots : false,
        arrows: true,
        playText : '재생',
        pauseText : '정지',
        autoArrow : $bannerAuto,
        prevArrow : $bannerPrev,
        nextArrow : $bannerNext,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    draggable : true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    draggable : true
                }
            }
        ]
    });
});

