init()

function init() {
	navi()
	recentSlide()
	times()
	chart()
	sildeBanner()
	editor()
	player()
}

function navi() {
	$('.top-wrapper .close').on('click', close)
	$('.sub-container').slideUp(0)
	$('.navi-wrapper .navi').on('click', onNaviClick)
	$('.navi-wrapper .navi').on('mouseover', onNaviHover)
	$('.navi-wrapper').on('mouseleave', onNaviLeave)
	function close() {
		$('.top-wrapper').css('display','none')
	}
	function onNaviClick() {
		$('.sub-container').stop().slideToggle(300)
	}
	function onNaviHover() {
		$('.sub-container').stop().slideDown(300)
	}
	function onNaviLeave() {
		$('.sub-container').stop().slideUp(300)
	}
	/***** 모바일 *****/ 
	$('.m-navi-wrap').slideUp(0)
	$('.m-sub-wrap').slideUp(0)
	$('.header-wrapper .fa-bars').on('click', openMoNavi)
	$('.m-navi-wrapper .m-navi').on('click', openMoSubnavi)
	$('.m-sub-wrap').on('click', closeMoSubnavi)
	function openMoNavi() {
		$('.m-navi-wrapper').stop().slideToggle(300)
	}
	function openMoSubnavi() {
		$(this).find('.m-sub-wrap').stop().slideToggle(300)
		$(this).addClass('active')
	}
	function closeMoSubnavi() {
		$('.m-navi-wrapper').stop().slideUp(300)
		$(this).removeClass('active')
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

function sildeBanner() {
	var swiper = new Swiper(".bannerMySwiper", {
		spaceBetween: 30,
		loop: true,
		autoplay: { delay: 2000 },
		pagination: {
			el: ".banner-swiper-pagination",
			clickable: true,
		},
	});
}

function editor() {
	var $editorWrap = $('.editor-wrapper .swiper-wrapper')
	function onGetData(r) {
		r.editor.forEach(function(v, i) {
			var html = '';
			html += '<div class="swiper-slide editor">';
			html += '<div><img src="'+v.src+'"></div>';
			html += '<div class="cnt">';
			html += '<div class="sub-title">'+v.subTitle+'</div>';
			html += '<div class="title">'+v.title+'</div>';
			html += '<div class="ex">'+v.ex+'</div>';
			html += '</div>';
			html += '</div>';
			$editorWrap.append(html);
		})
		slideEditor();
		}
	$.get('../json/editor.json', onGetData)
}

function slideEditor() {
	var swiper = new Swiper(".editorMySwiper", {
		slidesPerView: 4,
		slidesPerGroup: 4,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		
	});
}

function player() {
	$('.player-wrapper .bt-close').on('click', playerClose)
	$('.player-wrapper .bi-play-fill').on('click', play)
	$('.player-wrapper .bi-pause-fill').on('click', stop)

	function stop() {
		$('.player-wrapper .bi-play-fill').css('display', 'block')
		$('.player-wrapper .bi-pause-fill').css('display', 'none')
	}
	function play() {
		$('.player-wrapper .bi-play-fill').css('display', 'none')
		$('.player-wrapper .bi-pause-fill').css('display', 'block')
	}
	function playerClose() {
		$('.player-wrapper').css('display', 'none')
	}
}
