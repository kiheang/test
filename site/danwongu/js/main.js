//$ 중첩 방지
(function ($) {
    'use strict';
    //제이쿼리가 있는지 확인
    if (typeof $ === 'function') {
        $(function () {
            //홈
            var home = container.home = {},
                $home = home.$element = $('#home');

            //visual
            var visual = home.visual = {},
                $visual_box = $('.visual'),
                $visualAuto = $visual_box.find('.visual_control .auto'),
                $visualPrev = $visual_box.find('.visual_control .prev'),
                $visualNext = $visual_box.find('.visual_control .next'),
                $visualCurrent = $visual_box.find('.visual_control .current'),
                $visualTotal = $visual_box.find('.visual_control .total'),
                $visualList = $visual_box.find('.slide_box');

            $visualList.slick({
                swipe: true,
                draggable: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                prevArrow: $visualPrev,
                autoArrow : $visualAuto,
                nextArrow: $visualNext,
                current : $visualCurrent,
                total : $visualTotal,
                variableWidth: false,
                dots: false,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: false
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            variableWidth: false,
                            draggable: true
                        }
                    }
                ]
            });


            //news
            var news = home.news = {},
                $news_box = $('.news'),
                $newsAuto = $news_box.find('.news_control .auto'),
                $newsPrev = $news_box.find('.news_control .prev'),
                $newsNext = $news_box.find('.news_control .next'),
                $newsList = $news_box.find('.slide_box');
            $newsList.slick({
                swipe: true,
                draggable: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                //speed: 1000,
                infinite: true,
                autoplay: true,
                prevArrow: $newsPrev,
                autoArrow : $newsAuto,
                nextArrow: $newsNext,
                variableWidth: false,
                dots: false,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: false
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            variableWidth: false,
                            draggable: true
                        }
                    }
                ]
            });


            //popup
            var  popup = home.popup = {},
                $popup_box = $('.popup'),
                $popupPrev = popup.$prev = $popup_box.find('.popup_control .prev'),
                $popupAuto = popup.$auto = $popup_box.find('.popup_control .auto'),
                $popupNext = popup.$next = $popup_box.find('.popup_control .next'),
                $popupCurrent = popup.$current = $popup_box.find('.popup_control .current'),
                $popupTotal = popup.$total = $popup_box.find('.popup_control .total'),
                $popupList = $popup_box.find('.slide_box');

            $popupList.slick({
                swipe : true,
                draggable : false,
                slidesToShow : 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay : true,
                variableWidth: true,
                dots : false,
                arrows: true,
                playText : '재생',
                pauseText : '정지',
                autoArrow : $popupAuto,
                prevArrow : $popupPrev,
                nextArrow : $popupNext,
                current : $popupCurrent,
                total : $popupTotal,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            draggable : true,
                            variableWidth: false
                        }
                    },
                ]
            });


            //welfare_center
            $('.welfare_center .active_box .active_content .center_btn button.btn_text').on('click', function() {
                var ActiveBtn = $(this).text(),
                    ActiveLink = $(this).val();

                $(this).parent().parent().siblings('.active_btn').text(ActiveBtn);
                $(this).parent().parent().siblings('.welfare_center_link').attr("href",ActiveLink);
                $('.welfare_center .active_box .active_btn').focus();
                $('.welfare_center .active_box').removeClass('active');
            });


            //quick
            var  quick = home.quick = {},
                $quick_box = $('.quick'),
                $quickPrev = quick.$prev = $quick_box.find('.quick_control .prev'),
                $quickNext = quick.$next = $quick_box.find('.quick_control .next'),
                $quickList = $quick_box.find('.slide_box');

            $quickList.slick({
                swipe : true,
                draggable : false,
                slidesToShow : 6,
                slidesToScroll: 1,
                //speed: 1100,
                infinite: true,
                autoplay : false,
                variableWidth: false,
                dots : false,
                arrows: true,
                prevArrow : $quickPrev,
                nextArrow : $quickNext,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow : 4,
                            draggable : true,
                            variableWidth: false
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow :2,
                            draggable : true,
                            variableWidth: false
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow :4,
                            draggable : true,
                            variableWidth: false
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow :2,
                            draggable : true,
                            variableWidth: false
                        }
                    }
                ]
            });


            //포토갤러리 공통롤링
            var $PhotoListbox = $('.gallerybox');
            $PhotoListbox.each(function () {
                var $PhotoSlide = $(this).find('.slide_list'),
                    $PhotoItem = $PhotoSlide.find('.slide_item');
                $PhotoSlide.slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    autoplay: false,
                    variableWidth: true,
                    dots: false,
                    arrows: false,
                    swipe: false,
                    draggable: false,
                    responsive: [
                        {
                            breakpoint: 1201,
                            settings: {
                                slidesToShow:1,
                                slidesToScroll: 1,
                                swipe: true,
                                draggable: true
                            }
                        }]
                });
            });
            $('.photonews_borard .tab_list ul li a').on('click', function (event) {
                var $this = $(this),
                    $Myparent = $this.parent('li'),
                    ParentIndex = $Myparent.index(),
                    IsActive = $Myparent.is('.active'),
                    $OtherParents = $Myparent.siblings('li'),
                    $Contentbox = $('.photonews_borard .tabcontent'),
                    $Mycon = $Contentbox.find('.tab_obj').eq(ParentIndex),
                    $Othercon = $Mycon.siblings('.tab_obj'),
                    $MySlide = $Mycon.find('.slide_list');
                if (!IsActive) {
                    $OtherParents.removeClass('active');
                    $Myparent.addClass('active'),
                        $Othercon.removeClass('active');
                    $Mycon.addClass('active');
                    $MySlide.slick('setPosition');
                    event.preventDefault();
                } else {
                    event.preventDefault();
                }
            });

			//banner
			var banner = home.banner = {},
				$banner_box = $('.banner'),
				$bannerPrev = banner.$prev = $banner_box.find('.banner_control .button_prev'),
				$bannerAuto = banner.$auto = $banner_box.find('.banner_control .button_ctrl'),
				$bannerNext = banner.$next = $banner_box.find('.banner_control .button_next'),
				$bannerList = $banner_box.find('.banner_list');

			$bannerList.slick({
				swipe : true,
				draggable : false,
				slidesToShow : 4,
				slidesToScroll: 1,
				//speed: 1000,
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
							variableWidth: false
						}
					}
				]
			});
        });
    } else {
        throw '제이쿼리가 없습니다.';
    }
})(window.jQuery);