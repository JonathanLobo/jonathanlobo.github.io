$(document).ready(function () {
  $('.slider').slider({full_width: true});
  $('.card-text').hide();
  $('.carousel.carousel-slider').carousel({full_width: true});
  $('.img-carousel').slick({
    slidesToShow: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    adaptiveHeight: true
  });
  $('.scrollspy').scrollSpy();
  $('#errorText1').hide();
  $('#errorText2').hide();
  $('#errorText3').hide();
  $('#successText').hide();
});

$(document).on('click', '#submitButton', function(e) {
  e.preventDefault();
  $('#errorText1').hide();
  $('#errorText2').hide();
  $('#errorText3').hide();
  $('#successText').hide();

  if (validate()) {
    $('#successText').show();
  }
});

function validate() {
  var name = document.getElementById('nameBox').value;
  var email = document.getElementById('email').value;
  var comments = document.getElementById('comments').value;

  var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  var ret = true;

  if (name === '') {
    $('#errorText1').show();
    ret = false;
  }

  if (!emailRegex.test(email)) {
    $('#errorText2').show();
    ret = false;
  }

  if (comments === '') {
    $('#errorText3').show();
    ret = false;
  }

  return ret;
}
