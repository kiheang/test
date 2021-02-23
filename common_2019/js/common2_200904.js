$(function(){
	/* 200904 추가*/
	
    // 하이퍼 링크 새로고침 막기
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

	
	// 200904 메인화면 pc 탭메뉴, 모바일에서 lnb로 변환
	var winW = window.outerWidth;

    $('.tab1 > li > a').click(function(){
        winW = window.outerWidth;
        var tab_on = $(this).parent().hasClass('active');
        
        if(winW >= 800) $(this).parent().addClass('active').siblings().removeClass('active');
        else {
            if(tab_on == false) $(this).parent().addClass('active').find('div').slideDown(300).parent().siblings().removeClass('active').find('div').slideUp(300);
            else {
                $('.tab2').slideUp(300);
                $(this).parent().removeClass('active').find('div').slideUp(300);
            }
        }
    });

    // 게시판 채용정보, 시정소식은 탭 메뉴가 아닌 그냥 링크로 사용예정
    $('.board_file > a').click(function(){
        alert('외부링크로 연결될 예정입니다.');
    });
});