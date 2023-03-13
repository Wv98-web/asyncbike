var N1 = null,
	L1 = null,
	W1 = null,
	line1 = null,
	V1 = 0,
	N2 = null,
	L2 = null,
	W2 = null,
	line2 = null,
	V2 = 0,
	N3 = null,
	L3 = null,
	W3 = null,
	line3 = null,
	V3 = 0,
	N4 = null,
	L4 = null,
	W4 = null,
	line4 = null,
	V4 = 0,
	N5 = null,
	L5 = null,
	W5 = null,
	line5 = null,
	V5 = 0,
	line = !1,
	t1 = $(".a1-section2 p").offset().top;

	var btn1show = false;
$(window).scroll(function(l) {
	var e = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset,
		i = document.documentElement.clientHeight,
		n = document.body.scrollHeight;
		
		e > 0 && $(".a1-section2 p").css("transform", "translate(0," + (e - t1) + "px)"), $(".section").each(function() {
		$(this).find(".a1-section3").length > 0 ? e >= $(this).offset().top - 120 && ($(this).addClass("active"), $(this).find(".pic2").removeClass("t1")) : $(this).find(".a1-section5").length > 0 ? e >= $(this).offset().top - 300 && line == !1 && ($(this).addClass("active"), N1 = $("#bar .splitLine:eq(0) .demo"), L1 = $("#bar .progressBar").eq(0), W1 = 0 , V1 = N1.data("value").replace("%") , line1 = setInterval(frame1, 10), N2 = $("#bar .splitLine:eq(1) .demo"), L2 = $("#bar .progressBar").eq(1), W2 = 0 , V2 = N2.data("value").replace("%"), line2 = setInterval(frame2, 10), N3 = $("#bar .splitLine:eq(2) .demo"), L3 = $("#bar .progressBar").eq(2), W3 = 0 , V3 = N3.data("value").replace("%"), line3 = setInterval(frame3, 10), N4 = $("#bar .splitLine:eq(3) .demo"), L4 = $("#bar .progressBar").eq(3), W4 = 0 , V4 = N4.data("value").replace("%"), line4 = setInterval(frame4, 10), N5 = $("#bar .splitLine:eq(4) .demo"), L5 = $("#bar .progressBar").eq(4), W5 = 0 , V5 = N5.data("value").replace("%"), line5 = setInterval(frame5, 10), line = !0) : e >= $(this).offset().top + 5 && ($(this).addClass("active"), $(this).find(".pic2").removeClass("t1"))
	})
}), $(".list1 li").each(function() {
	$(this).index() > 20 && $(this).hide()
}), $(".btn_1").click(function() {
	
	if(btn1show){
		$(".list1 li").each(function() {
			$(this).index() > 20 && $(this).hide()
		})
		$(".btn_1").html('Full specification +');
	}else{
		$(".list1 li").removeAttr("style")
		$(".btn_1").html('Full specification -');
	}
	btn1show = !btn1show;
});

$(function(){
     initProgress();
	$(window).resize(function(){
		initProgress();
	});
	$(window).on("scroll",function(){
		if($(window).scrollTop() > $(".ani-progress").offset().top - 100){
			initProgressBar();
		}	
	})
});

function initProgress(){
	let dw = $("#bar .progressBox").eq(0).width();
	$("#bar .progressBar").each(function(idx,item){
		$(item).children("i").eq(0).css({"width":(dw*0.6)+"px","minWidth":(dw*0.6)+"px"});
		$(item).children("i").eq(1).css({"width":(dw*0.4)+"px","minWidth":(dw*0.4)+"px"});
	});
}

function initProgressBar(){
	let arr = [];
	$("#bar li").each(function(idx,item){
		arr.push($(item).find(".data").text().replace("%",''));
	});
	//let base = Math.max.apply(null, arr);
	let base = 160;  //最大比例基数
	$("#bar .data").each(function(idx,item){
		let val = parseInt($(item).text().replace("%"));
		$(item).width((val/base*100)+"%");
	});
	$(".ani-progress").addClass("animated");
	if(arr.length > 0){
		$("#bar").addClass("progress-active");
		$("#bar .progressBox").each(function(idx,item){
			$(item).find(".progressBar").width((arr[idx]/base*100)+"%");
		});
	}
}

function frame1() {
	W1 == parseInt(V1) ? clearInterval(line1) : (W1++, L1.width(W1*0.6 + "%"), N1.html(W1 + "%"))
}

function frame2() {
	W2 == parseInt(V2) ? clearInterval(line2) : (W2++, L2.width(W2*0.6 + "%"), N2.html(W2 + "%"))
}

function frame3() {
	W3 == parseInt(V3) ? clearInterval(line3) : (W3++, L3.width(W3*0.6 + "%"), N3.html(W3 + "%"))
}

function frame4() {
	W4 == parseInt(V4) ? clearInterval(line4) : (W4++, L4.width(W4*0.6 + "%"), N4.html(W4 + "%"))
}

function frame5() {
	W5 == parseInt(V5) ? clearInterval(line5) : (W5++, L5.width(W5*0.6 + "%"), N5.html(W5 + "%"))
}

$("#btn_play").click(function() {
	vshow()
}), $("body").on("click", "#btn_close", function() {
	$(".vshow,.bg1").remove()
    $("#fullvideo1").hide();
    $("#fullvideo2").hide();
});
var myVideo = null;

function vshow() {
  $("#fullvideo1").show();
	$("main").find(".vshow").length == 0 && ($("main").after('<div class="vshow"><div class="close" id="btn_close">Close</div>' + $("#fullvideo1").prop("outerHTML") + '</div><div class="bg1"></div>'), $(".vshow video").removeAttr("id").attr("id", "video2")), myVideo = document.getElementById("video2"), playPause()
}

function playPause() {
	myVideo.paused ? myVideo.play() : myVideo.pause()
}

$("#mobile_btn_play").click(function() {
	vshowmobile()
}), $("body").on("click", "#btn_close", function() {
	$(".vshow,.bg1").remove()
});
var myVideo = null;

function vshowmobile() {
  $("#fullvideo2").show();
	$("main").find(".vshow").length == 0 && ($("main").after('<div class="vshow"><div class="close" id="btn_close">Close</div>' + $("#fullvideo2").prop("outerHTML") + '</div><div class="bg1"></div>'), $(".vshow video").removeAttr("id").attr("id", "video2")), myVideo = document.getElementById("video2"), playPause()
}

function playPause() {
	myVideo.paused ? myVideo.play() : myVideo.pause()
}

$(".pic2 .p1").each(function() {
	$(this).find("img").width() > $(this).find("img").height() && $(this).addClass("type1")
});


var wow = new WOW({
    offset: 200,
    mobile: true,
    live: true
}).init();

let timer = 0;
let $elePos = 25;
function resetAinPos(){
	let $wh = $(window).height() - $(".float-newsletter").height(),
		$eh = $(".ani-container .image-case-inside .imgh").height();
	if($wh/$eh > 3){
		$elePos = 50;
	}else if($wh/$eh > 2.4){
		$elePos = 40;
	}else if($wh/$eh > 2){
		$elePos = 25;
	}else if($wh/$eh < 1){
		$elePos = -($wh/$eh)/4*100;
	}else{
		$elePos = 25;	
	}
	$(".ani-container .sticky-case").css("top",$elePos+"vh");
}
function startAniLayer()
{
	$(window).resize(function(){
		resetAinPos();
	})
	resetAinPos();
	$(window).on("scroll",function(){
		var $et = $(".ani-container").offset().top,
			$wt = $(window).scrollTop(),
			$eh = $(".ani-container .image-case-inside .imgh").height();
		if($wt >= $et - jQuery(window).height()*$elePos/100 + $eh - 30){
			$(".ani-container .image-case-inside").addClass("show");	
			$(".ani-text .slideup").addClass("fadeInUp");
		}else{
			$(".ani-container .image-case-inside").removeClass("show");	
			$(".ani-text .slideup").removeClass("fadeInUp");
		}
	}).trigger("scroll");
}

startAniLayer();

function daojishi () {
    timer = setInterval(function () {
        let from = dayjs($('#timing').attr('data-end')).unix();
        let now = dayjs(new Date()).unix();
        let diff = from - now;
        if (diff > 0) {
            diff--;

            var d = parseInt(diff / 60 / 60 / 24);
            // d = d < 10 ? '0' + d : d;
            var h = parseInt(diff / 60 / 60 % 24);
            // h = h < 10 ? '0' + h : h;
            var m = parseInt(diff / 60 % 60);
            // m = m < 10 ? '0' + m : m;
            var s = parseInt(diff % 60);
            // s = s < 10 ? '0' + s : s;

            $('#timing .day').html(d);
            $('#timing .hour').html(h);
            $('#timing .minute').html(m);
            $('#timing .second').html(s);
        } else {
            clearInterval(timer);
            $('#timing').html('Now');
        }

        // var a = $('#timing').html().toString();
        // var b = a.split("");
        // if (a.length > 3) {
        //     b.splice(3, 0, " ");
        //     b.join("");

        //     $('#timing').html(b);
        // }
    }, 1000)
}

daojishi()

const video_btn = document.querySelectorAll(".js_video_play");

video_btn.forEach((btn) => {
    btn.addEventListener("click", function () {
        const video = btn.previousElementSibling;
        // video.load();
        if (video.paused) {
            video.play();
            $('.js_video_section .video-header').fadeOut();
        } else {
            video.pause();
        }
    })
})

// brand
$('.js_brand_click').map((index, item) => {
    $(item).click(function () {
        if ($(item).hasClass('hover')) {
            $(item).removeClass('hover')
        } else {
            $(item).addClass('hover')
        }
    })

})


/* GSAP START */
// Brand涓ゆā鍧楃殑绗竴寮犲浘
const brandTween1 = gsap.from('.blockSize2 .brand-block:first-child .brand_image_inner', { x: '100%', duration: 1 });
// Brand涓ゆā鍧楃殑绗簩寮犲浘
const brandTween2 = gsap.from('.blockSize2 .brand-block:last-child .brand_image_inner', { x: '-100%', duration: 1 });
// Brand涓夋ā鍧楃殑绗竴寮犲浘
const brandTween3 = gsap.from('.blockSize3 .brand-block:first-child .brand_image_inner', { x: '100%', duration: 1 });
// Brand涓夋ā鍧楃殑绗簩寮犲浘
const brandTween4 = gsap.from('.blockSize3 .brand-block:nth-child(2) .brand_image_inner', { x: '100%', duration: 1 });
// Brand涓夋ā鍧楃殑绗笁寮犲浘
const brandTween5 = gsap.from('.blockSize3 .brand-block:last-child .brand_image_inner', { x: '-100%', duration: 1 });
// Brand涓夋ā鍧楃殑绗簩寮犲浘 绉诲姩绔�
const brandTween6 = gsap.fromTo('.blockSize3 .brand-block:nth-child(2) .brand_image_inner', { x: '-100%' }, { x: '0', duration: 1 });
// Brand涓夋ā鍧楃殑绗笁寮犲浘 绉诲姩绔�
const brandTween7 = gsap.fromTo('.blockSize3 .brand-block:last-child .brand_image_inner', { x: '100%' }, { x: '0', duration: 1 });
const teamImageTween = gsap.from('.team-section__media', { x: '100%', y: '100%', duration: 1 });
const teamTextTween = gsap.from('.team_txt', { y: '100%', opacity: 0, duration: 2 });
const timelineHeaderTween = gsap.from('.timeline-header', { y: 200, opacity: 0, duration: 1 });
const timelineImageTween1 = gsap.from('.timeline-item:nth-child(1) .image', { x: '-100%', duration: 1 });
const timelineImageTween2 = gsap.from('.timeline-item:nth-child(2) .image', { x: '-100%', duration: 0.8 });
const timelineImageTween3 = gsap.from('.timeline-item:nth-child(3) .image', { x: '-100%', duration: 0.6 });
const timelineContentTween = gsap.from('.timeline-item .content', { x: 200, duration: 1 })
/* GSAP END */

/* FULLPAGE START */
var anchors = [];
var sectionsColor = [];
function handleAnchors () {
    // let sections = Array.from($('.section'))
    // sections.map((item) => {
    //     anchors.push($(item).attr('id'))
    // })

    // let anchorsHTML = sections.map((item) => {
    //     return `<li data-menuanchor="${$(item).attr('id')}"><a href="#${$(item).attr('id')}">Anchors</a></li>`
    // }).join('');

    // $("#sider-menu").append(anchorsHTML);

    if (window.matchMedia("(max-width: 767px)").matches) {
        anchors = ['anchor-a1', 'anchor-a1', 'anchor-brand', 'anchor-brand', 'anchor-brand', 'anchor-team'];
        sectionsColor = ['#000', '#000', 'transparent', '#000', '#000', '#000'];
    } else {
        anchors = ['anchor-a1', 'anchor-a1', 'anchor-brand', 'anchor-brand', 'anchor-brand', 'anchor-team', 'anchor-team'];
        sectionsColor = [ '#000', '#000', 'transparent', '#000', '#000', '#000', '#000'];
    }
}

handleAnchors();




function handleResize () {
    var removeDom = $('.removeLess767');
    if (window.matchMedia("(max-width: 767px)").matches) {
        removeDom.remove();
        handleAnchors();
        homeFullPage.reBuild();
    }
}

handleResize()

$(window).resize(function (event) {
    event.stopPropagation();
    handleResize();
})

$('.video-jiantou').click(function () {
    homeFullPage.moveSectionDown()
})
