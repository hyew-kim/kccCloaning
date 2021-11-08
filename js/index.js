/*common*/

$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});
/*header*/
scrollHandle();
$(window).on('scroll', function () {
  scrollHandle();
});

$('#gnb > ul > li > a').on('mouseover focus', function () {
  var index = $('#gnb > ul > li').index($(this).parent());
  $(`section:eq(${index})`).addClass('open');
});
$('#gnb > ul > li > a').on('mouseleave focusout', function () {
  $('section').removeClass('open');
});

function scrollHandle() {
  var scrollAmt = $(window).scrollTop();
  $('#quick-menu').css({ top: `${scrollAmt + 200}px` });
  if (scrollAmt > 200) $('#header').addClass('small');
  else $('#header').removeClass('small');
}

/*img-slide*/

var totalSlide = $('.image-slide .slide li').length;
var slideNow = 0;
var slidePrev = 0;
var slideNext = 0;
var slideFirst = 0;
var isTimerOn = true;
var timerId = '';
var timerSpeed = 2000;

if (isTimerOn) $('.image-slide .control a.play').addClass('on');
else $('.image-slide .control a.play').removeClass('on');

showSlide(slideFirst);

$('.image-slide .control a.prev').on('click', function () {
  showSlide(slidePrev);
});

$('.image-slide .control a.next').on('click', function () {
  showSlide(slideNext);
});

$('.image-slide .indicator li a').on('click', function () {
  var index = $('.image-slide .indicator li').index($(this).parent());
  showSlide(index);
});

function showSlide(n) {
  clearTimeout(timerId);
  $('.image-slide .slide > li').removeClass('on');
  $(`.image-slide .slide > li:eq(${n})`).addClass('on');
  $('.image-slide .indicator > li').removeClass('on');
  $(`.image-slide .indicator > li:eq(${n})`).addClass('on');

  slideNow = n;
  slidePrev = n === 0 ? totalSlide - 1 : n - 1;
  slideNext = n === totalSlide - 1 ? 0 : n + 1;
  if (isTimerOn) {
    timerId = setTimeout(function () {
      showSlide(slideNext);
    }, timerSpeed);
  }
}
