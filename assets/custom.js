$(function () {
    $('.email-btn').click(function (event) {
        if ($('.float-newsletter').hasClass('open')) {
            $('.float-newsletter').removeClass('open')
        }else{
            $('.float-newsletter').addClass('open')
        }
    })

    $(window).scroll(function() {

        //滚到顶部显示邮箱订阅框框
        if ($(document).height() - $(document).scrollTop() >=  700) {
          $(".float-newsletter").show();
        }

        //滚到底部隐藏邮箱订阅框框
        if ($(document).scrollTop() >= $(document).height() - $(window).height() - 700) {
            $(".float-newsletter").hide();
        }

    });
})


var scrollFunc = function(e) {
	var e = e || window.event;
	if(e.wheelDelta) {
		  if(e.wheelDelta > 0) {     //当鼠标滚轮向上滚动时
			$(".header-wrapper").removeClass("hide")
     
		  }
		  if(e.wheelDelta < 0) {     //当鼠标滚轮向下滚动时
			$(".header-wrapper").addClass("hide");
		  }
	} else if(e.detail) {
		  if(e.detail < 0) {   //当鼠标滚轮向上滚动时
			$(".header-wrapper").removeClass("hide");
          
		  }
		  if(e.detail > 0) {   //当鼠标滚轮向下滚动时
			$(".header-wrapper").addClass("hide");
		  }
	}
}

//    给页面绑定鼠标滚轮事件,针对火狐的非标准事件
window.addEventListener("DOMMouseScroll", scrollFunc)

//    给页面绑定鼠标滚轮事件，针对Google，mousewheel非标准事件已被弃用，请使用 wheel事件代替
window.addEventListener("wheel", scrollFunc)

//    ie不支持wheel事件，若一定要兼容，可使用mousewheel
window.addEventListener("mousewheel", scrollFunc)

//滑动处理 
var startX, startY; 
document.addEventListener('touchstart',function (ev) { 
startX = ev.touches[0].pageX; 
startY = ev.touches[0].pageY; 
}, false); 
document.addEventListener('touchend',function (ev) { 
var endX, endY; 
endX = ev.changedTouches[0].pageX; 
endY = ev.changedTouches[0].pageY; 
var direction = GetSlideDirection(startX, startY, endX, endY); 
switch(direction) { 
  case 0: 
    console.log("无操作"); 
  break; 
  case 1: 
  // 向上 
  $(".header-wrapper").addClass("hide");
  break; 
  case 2: 
  // 向下 
  $(".header-wrapper").removeClass("hide");
  break; 

  default: 
} 
}, false); 

function GetSlideDirection(startX, startY, endX, endY) { 
  var dy = startY - endY; 
  //var dx = endX - startX; 
  var result = 0; 
  if(dy>0) {//向上滑动 
    result=1; 
  }else if(dy<0){//向下滑动 
    result=2; 
  } 
  else 
  { 
    result=0; 
  } 
  return result; 
} 