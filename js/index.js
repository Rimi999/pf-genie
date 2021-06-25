/*************** 글로벌 설정 *****************/


/*************** 사용자 함수 *****************/
$('.sub-wrapper').slideUp(0)


/*************** 이벤트 등록 *****************/
$('.navi-wrapper .navi').on('click', onNaviClick)
$('.navi-wrapper .navi').on('mouseover', onNaviHover)
$('.navi-wrapper').on('mouseleave', onNaviLeave)


/*************** 이벤트 콜백 *****************/
function onNaviClick() {
	$('.sub-wrapper').stop().slidToggle(300)
}

function onNaviHover() {
	$('.sub-wrapper').stop().slideDown(300)
}

function onNaviLeave() {
	$('.sub-wrapper').stop().slideUp(300)
}
