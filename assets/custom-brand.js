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

document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
})

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
// Brand两模块的第一张图
const brandTween1 = gsap.from('.blockSize2 .brand-block:first-child .brand_image_inner', { x: '100%', duration: 1 });
// Brand两模块的第二张图
const brandTween2 = gsap.from('.blockSize2 .brand-block:last-child .brand_image_inner', { x: '-100%', duration: 1 });
// Brand三模块的第一张图
const brandTween3 = gsap.from('.blockSize3 .brand-block:first-child .brand_image_inner', { x: '100%', duration: 1 });
// Brand三模块的第二张图
const brandTween4 = gsap.from('.blockSize3 .brand-block:nth-child(2) .brand_image_inner', { x: '100%', duration: 1 });
// Brand三模块的第三张图
const brandTween5 = gsap.from('.blockSize3 .brand-block:last-child .brand_image_inner', { x: '-100%', duration: 1 });
// Brand三模块的第二张图 移动端
const brandTween6 = gsap.fromTo('.blockSize3 .brand-block:nth-child(2) .brand_image_inner', { x: '-100%' }, { x: '0', duration: 1 });
// Brand三模块的第三张图 移动端
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
    if (window.matchMedia("(max-width: 767px)").matches) {
        anchors = ['anchor-brand', 'anchor-brand', 'anchor-brand', 'anchor-team'];
        sectionsColor = ['transparent', '#000', '#000', '#000'];
    } else {
        anchors = ['anchor-brand', 'anchor-brand', 'anchor-brand', 'anchor-team', 'anchor-team'];
        sectionsColor = ['#000', '#000', '#000', '#000', '#000'];
    }
}

handleAnchors();

var homeFullPage = new fullpage('#fullpage', {
    licenseKey: 'DKI1I-632TK-E05KK-2MZJ9-NSPAO',
    menu: '#sider-menu',
    sectionsColor: sectionsColor,
    anchors: anchors,
    slidesNavigation: true,
    recordHistory: false,
    autoScrolling: false,
    fitToSection: false,
    scrollBar: false,
    sectionSelector: '.section',
    slideSelector: '.slide',
    credits: { enabled: false, label: 'Made with fullPage.js', position: 'right' },
    beforeLeave: function (origin, destination, direction, trigger) { },
    onLeave: function (origin, destination, direction, trigger) {
        if (direction == 'down') {
            var y = $(origin.item).find('.fp-bg').attr('data-offy') || 0;
            $(origin.item).find('.fp-bg').css('transform', 'translateY(' + y + 'px)');

            if (destination.index == 1) {
                // brandTween1.restart();
                // brandTween2.restart();
            }

            if (window.matchMedia("(max-width: 767px)").matches) {
                if (destination.index == 2) {
                    // brandTween3.restart();
                    // brandTween6.restart();
                    // brandTween7.restart();
                }
              

                if (destination.index == 5) {
                  
                    // timelineHeaderTween.restart();
                    // timelineImageTween1.restart();
                    // timelineImageTween2.restart();
                    // timelineImageTween3.restart();
                    // timelineContentTween.restart();
                }
            } else {
                if (destination.index == 2) {
                    // brandTween3.restart();
                    // brandTween4.restart();
                    // brandTween5.restart();
                }

                if (destination.index == 5) {
                }

               
                if (destination.index == 6) {

           

                    // timelineHeaderTween.restart();
                    // timelineImageTween1.restart();
                    // timelineImageTween2.restart();
                    // timelineImageTween3.restart();
                    // timelineContentTween.restart();
                }
            }
        } else {
            $(destination.item).find('.fp-bg').css('transform', 'translateY(0px)');
        }
    },
    afterLoad: function (origin, destination, direction, trigger) { },
    afterRender: function () {
        $('.fp-bg').each(function (index, item) {
            $(item).attr('data-offy', $(item).height() * 0.6 || 500);
            $(item).attr('data-offx', $(item).width() * 0.6);
        })
        // brandTween1.play();
        // brandTween2.play();
        // brandTween3.play();
        // if (window.matchMedia("(max-width: 767px)").matches) {
        //     brandTween6.play();
        //     brandTween7.play();
        // } else {
        //     brandTween4.play();
        //     brandTween5.play();
        // }
        // teamImageTween.play();
        // teamTextTween.play();
        // timelineHeaderTween.play();
        // timelineImageTween1.play();
        // timelineImageTween2.play();
        // timelineImageTween3.play();
        // timelineContentTween.play();
    },
    afterResize: function (width, height) {
        $('.fp-bg').each(function (index, item) {
            $(item).attr('data-offy', $(item).height() * 0.6);
            $(item).attr('data-offx', $(item).width() * 0.6);
        })
    },
    afterReBuild: function () { },
    afterResponsive: function (isResponsive) { },
    afterSlideLoad: function (section, origin, destination, direction, trigger) { },
    onSlideLeave: function (section, origin, destination, direction, trigger) { },
    onScrollOverflow: function (section, slide, position, direction) { }
});
/* FULLPAGE END */

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

