/*************** 글로벌 설정 *****************/
$('.sub-wrap').slideUp(0)

/*************** 사용자 함수 *****************/


/*************** 이벤트 등록 *****************/
$('.navi-wrapper .navi').on('click', onNaviClick)
$('.navi-wrapper .navi').on('mouseover', onNaviHover)
$('.navi-wrapper').on('mouseleave', onNaviLeave)


/*************** 이벤트 콜백 *****************/
function onNaviClick() {
	$('.sub-wrap').stop().slidToggle(300)
}

function onNaviHover() {
	$('.sub-wrap').stop().slideDown(300)
}

function onNaviLeave() {
	$('.sub-wrap').stop().slideUp(300)
}
