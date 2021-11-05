/*common*/

$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});
/*header*/
scrollHandle();
$(window).on('scroll', function () {
  scrollHandle();
});
function scrollHandle() {
  var scrollAmt = $(window).scrollTop();
  $('#quick-menu').css({ top: `${scrollAmt + 200}px` });
  if (scrollAmt > 200) $('#header').addClass('small');
  else $('#header').removeClass('small');
}

/*img-slide*/
