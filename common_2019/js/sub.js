try {
	(function($) {
		'use strict';

		//제이쿼리가 있을 때
		if(typeof $ === 'function') {

			//사이드메뉴
			$(function() {
				$('.side_menu .menu').menu({
					cut : {},
					event : 'click',
					namespace : 'side'
				});
			});

			//sns공유
			$(function(){
				$('.share_open button').on('click', function(event) {					
					$('.share').addClass('share_active');
				});

				$('.share_close button').on('click', function(event) {
					$('.share').removeClass('share_active');
				});

				Kakao.init("f2b1b4baf261cdb843ce0b603f3149c1");
				
				// 해당페이지 제목
				var snsText = $("#sub01 > div.sub_visual > div > div > div.sub_title > h2").text();

				// SNS 아이콘 별 이벤트 추가
				$(".share_content a").click(function(){
					
					var elmId = $(this).attr("id");
					
					// 해당 페이지 URL
					// var snsShareURL = document.querySelector("meta[property='og:url']").content;
					var snsShareURL = location.href;
					

					
					var href = "";
					
					if( elmId == "share_popup_twitter" || elmId == "share_popup_facebook" || elmId == "share_popup_band"){
						if( elmId == "share_popup_twitter"){
							href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(snsText) + "&url="+ encodeURIComponent(snsShareURL);	
						} else if ( elmId == "share_popup_facebook"){
							href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(snsShareURL);				
						} else if ( elmId == "share_popup_band"){
							href = "http://share.naver.com/web/shareView.nhn?url=" +  encodeURIComponent(snsShareURL) + "&title=" + encodeURIComponent(snsText);
						}
						window.open(href, "blogShare", "width=400, height=450, scrollbars=yes, resizable=yes");
					} else if ( elmId=="share_popup_kko"){
						fnKakaoLink();
					} else if ( elmId=="share_popup_story"){
						fnKakaoStoryLink();
					}
					
					
				});
				
				var metaTitle = document.querySelector("meta[name='title']").content;
				function fnKakaoLink(){
					var snsShareURL = location.href;
					Kakao.Link.sendDefault({
					  objectType: 'feed',
					  content: {
						title: metaTitle + '에 오신 것을 환영합니다.',
						description: '#' + metaTitle +'#'+snsText,
						imageUrl: 'https://www.ansan.go.kr/common_2019/images/popup/as_logo.png',
						link: {
						  mobileWebUrl: snsShareURL,
						  webUrl: snsShareURL
						}
					  },
					  buttons: [
						{
						  title: '자세히 보기',
						  link: {
							mobileWebUrl: snsShareURL,
							webUrl: snsShareURL
						  }
						}
					  ]
					});
				}

				function fnKakaoStoryLink(){
					
					var snsShareURL = location.href;
					
					Kakao.Story.share({
					  url: snsShareURL,
					  text: '#' + metaTitle +'#'+snsText
					});
				}
			});
			// end : sns 공유 

		}else{
			throw '제이쿼리가 없습니다.';
		}
	})(window.jQuery);
}catch(e) {
	console.error(e);
}