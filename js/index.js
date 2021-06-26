/*************** 글로벌 설정 *****************/

init()

/*************** 사용자 함수 *****************/
function init() {
	navi()
	times()
	chart()
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

function times() {
	var $chartTimes = $('.chart-wrapper .times')
	$chartTimes.find('.date').text(moment().format('YYYY. M. D.'))
	$chartTimes.find('.time').text(moment().format('hh:mm'))
}

function chart() {
	var $chartWrap = $('.chart-wrapper .chart-wrap');

	function onGetData(r) {
		r.chart.forEach(function (v, i) {
			var html = '';
			html += '<li class="chart">'
			html += '<div class="rank">'+ v.id +'</div>'
			html += '<div><img src="'+ v.src +'"></div>'
			html += '<div class="sing">'+ v.sing +'</div>'
			html += '<div class="singer">'+ v.singer +'</div>'
			html += '</li>'
			$chartWrap.append(html);
		})
	}
	$.get('../json/chart.json', onGetData);
}