$(function() {
	var sWidth1 = $("#focus1").width();
	var len1 = $("#focus1 ul li").length;
	var index1 = 0;
	var picTimer1;


	


	$("#focus1 .pre").click(function() {
		index1 -= 1;
		if (index1 == -1) {
			index1 = len1 - 1;
		}
		showPics(index1);
	});


	$("#focus1 .next").click(function() {
		index1 += 1;
		if (index1 == len1) {
			index1 = 0;
		}
		showPics(index1);
	});


	$("#focus1 ul").css("width", sWidth1 * (len1));


	$("#focus1").hover(function() {
		clearInterval(picTimer1);
	}, function() {
		picTimer1 = setInterval(function() {
			showPics(index1);
			index1++;
			if (index1 == len1) {
				index1 = 0;
			}
		}, 2000);
	}).trigger("mouseleave");


	function showPics(index1) {
		var nowLeft1 = -index1 * sWidth1;
		$("#focus1 ul").stop(true, false).animate({
			"left": nowLeft1
		}, 300);
		
	}
	});












$(function() {
	var sWidth = $("#focus").width();
	var len = $("#focus ul li").length;
	var index = 0;
	var picTimer=0;

	$("#focus .pre").click(function() {
		index -= 1;
		if (index == -1) {
			index = len - 1;
		}
		showPics(index);
	});


	$("#focus .next").click(function() {
		index += 1;
		if (index == len) {
			index = 0;
		}
		showPics(index);
	});


	$("#focus ul").css("width", sWidth * (len));


	$("#focus").hover(function() {
		clearInterval(picTimer);
	}, function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if (index == len) {
				index = 0;
			}
		}, 2000);
	}).trigger("mouseleave");


	function showPics(index) {
		var nowLeft = -index * sWidth;
		$("#focus ul").stop(true, false).animate({
			"left": nowLeft
		}, 300);
		
	}
});



