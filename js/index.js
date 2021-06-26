/*************** 글로벌 설정 *****************/

init()

/*************** 사용자 함수 *****************/
function init() {
	navi()
	times()
	chart()
	editor()
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

function editor() {
	var $editortWrap = $('.editor-wrapper .editor-wrap');

	function onGetData(r) {
		r.chart.forEach(function (v, i) {
			var html = '';
			var html =	'<li class="editor">'
			var html =	'<div><img src="../img/editor01.jpg" class="w-100"></div>'
			var html =	'<div class="cnt">'
			var html =	'<div class="sub-title">추천 신곡</div>'
			var html =	'<div class="title">여름의 어느 날을 한 조각 담아낸 재즈 플레이리스트</div>'
			var html =	'<div class="ex">DJ 수수</div>'
			var html =	'</div>'
			var html =	'</li>'
			$editortWrap.append(html);
		})
	}
	$.get('../json/editor.json', onGetData);
}