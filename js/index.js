/*************** 글로벌 설정 *****************/

init()

/*************** 사용자 함수 *****************/
function init() {
	navi() 
}


/*************** 이벤트 콜백 *****************/
function navi() {

	$('.navi-wrapper .navi').on('click', onNaviClick)
	$('.navi-wrapper .navi').on('mouseover', onNaviHover)
	$('.navi-wrapper').on('mouseleave', onNaviLeave)

	function onNaviClick() {
		$('.sub-wrapper').stop().slidToggle(300)
	}
	
	function onNaviHover() {
		$('.sub-wrapper').stop().slideDown(300)
	}
	
	function onNaviLeave() {
		$('.sub-wrapper').stop().slideUp(300)
	}
}


