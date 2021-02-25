$(window).scroll(function() {
  if ($(document).scrollTop() > 8) {
    $('#desk-nav').attr("uk-sticky", "bottom: #offset");
  } else {
    $('#desk-nav').removeAttr("uk-sticky", "bottom: #offset");
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 8) {
    $('#desk-nav').addClass('shrink-nav uk-animation-fade');
  } else {
    $('#desk-nav').removeClass('shrink-nav uk-animation-fade');
  }
});
