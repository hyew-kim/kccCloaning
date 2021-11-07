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
