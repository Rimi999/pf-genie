/*************** 글로벌 설정 *****************/

init()

/*************** 사용자 함수 *****************/
function init() {
	navi()
	recentSlide()
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
		$('.sub-container').stop().slidToggle(300)
	}
	
	function onNaviHover() {
		$('.sub-container').stop().slideDown(300)
	}
	
	function onNaviLeave() {
		$('.sub-container').stop().slideUp(300)
	}
}

function recentSlide() {
	var idx = 0
	var zIdx = 2
	var lastIdx = $('.recent-wrapper .slide').length - 1
	var interval
	var intervalGap = 4000
	init()
	
	function init() {
		$('.recent-wrapper .slide').eq(idx).css('z-index', zIdx++)
		interval = setInterval(onNextClick, intervalGap)
	}
	
	
	$('.recent-wrapper .bt-prev').on('click', onPrevClick)
	$('.recent-wrapper .bt-next').on('click', onNextClick)
	$('.recent-wrapper .slide-stage').on('mouseover', onOver)
	$('.recent-wrapper .slide-stage').on('mouseleave', onLeave)
	
	
	function onPrevClick() {
		idx = (idx === 0) ? lastIdx : idx - 1
		$('.recent-wrapper .slide').eq(idx).css('z-index', zIdx++).stop().fadeOut(0).fadeIn(500)
	}
	
	function onNextClick() {
		idx = (idx === lastIdx) ? 0 : idx + 1
		$('.recent-wrapper .slide').eq(idx).css('z-index', zIdx++).stop().fadeOut(0).fadeIn(500)
	}
	
	function onOver() {
		clearInterval(interval)
	}
	
	function onLeave() {
		interval = setInterval(onNextClick, intervalGap)
	}
}

function bannerSlide() {
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
			html += '<div class="rank">' + v.id + '</div>'
			html += '<div><img src="' + v.src + '"></div>'
			html += '<div class="sing">' + v.sing + '</div>'
			html += '<div class="singer">' + v.singer + '</div>'
			html += '</li>'
			$chartWrap.append(html);
		})
	}
	
	$.get('../json/chart.json', onGetData);
}

function editor() {
	var $editorWrap = $('.editor-wrapper .editor-wrap');
	
	function onGetData(r) {
		console.log(r);
		r.editor.forEach(function (v, i) {
			var html = '';
			html += '<li class="editor">';
			html += '<div><img src="' + v.src + '" class="w-100"></div>';
			html += '<div class="cnt">';
			html += '<div class="sub-title">' + v.subTitle + '</div>';
			html += '<div class="title">' + v.title + '</div>';
			html += '<div class="ex">' + v.ex + '</div>';
			html += '</div>';
			html += '</li>';
			$editorWrap.append(html);
		})
	}
	
	$.get('../json/editor.json', onGetData);
}