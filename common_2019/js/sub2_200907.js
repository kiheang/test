$(function(){
	 /* 200907 추가 */

	// 행정복지센터 게시판 슬라이드
	$('.town_slide').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 8,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});

	$('.town_slide a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	// 게시판 탭메뉴 웹접근성
	$(".row_select a").click(function(){
		var tab_index = $(this).index();
		
		$(this).addClass('active').attr('title', '선택됨').siblings().removeClass('active').attr('title', '');
		$('.board_tab > li').eq(tab_index).addClass('active').siblings().removeClass('active');
	});
});