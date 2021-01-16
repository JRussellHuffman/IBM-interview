var posTop;
var winHeight = $(window).height();
var introTop;
var earnTop;
var useTop;
var joinTop;
var aboutTop;

$(window).scroll(function(){
    //posBottom = winHeight + posTop;
    highlight();
    divHeight();
});

function highlight () {
	// when to trigger the underline prior to reaching the top
	var fromTop = -3;
 	if (aboutTop > fromTop) {
		$(".tab").css({
			"border-bottom" :"1px solid #000",
			"background" : "#e6e6e6",
		})
		$("#about-tab").css({
			"border-bottom":"none",
			"background" : "#fff",
		})
	} else if (joinTop > fromTop) {
		$(".tab").css({
			"border-bottom" :"1px solid #000",
			"background" : "#e6e6e6",
		})
		$("#join-tab").css({
			"border-bottom":"none",
			"background" : "#fff",
		})
	} else if (useTop > fromTop) {
		$(".tab").css({
			"border-bottom" :"1px solid #000",
			"background" : "#e6e6e6",
		})
		$("#use-tab").css({
			"border-bottom":"none",
			"background" : "#fff",
		})
	} else if (earnTop > fromTop) {
		$(".tab").css({
			"border-bottom" :"1px solid #000",
			"background" : "#e6e6e6",
		})
		$("#earn-tab").css({
			"border-bottom":"none",
			"background" : "#fff",
		})
	} else if (introTop > fromTop) {
		$(".tab").css({
			"border-bottom" :"1px solid #000",
			"background" : "#e6e6e6",
		})
		$("#intro-tab").css({
			"border-bottom":"none",
			"background" : "#fff",
		})
	}



	 else {
		$(".tab").css({
			"border-bottom" :"1px solid #000",
			"background":"#e6e6e6",
		})
	}
}

function divHeight () {
	introTop = $(window).scrollTop() - $('#intro').offset().top;
	earnTop = $(window).scrollTop() - $('#earn').offset().top;
	useTop = $(window).scrollTop() - $('#use').offset().top;
	joinTop = $(window).scrollTop() - $('#join').offset().top;
	aboutTop = $(window).scrollTop() - $('#about').offset().top;
}