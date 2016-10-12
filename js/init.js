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
});

$("#card1-div").mouseover(function(){
    $("#card1").show();
});

$("#card1-div").mouseout(function(){
    $("#card1").hide();
});

$("#card2-div").mouseover(function(){
    $("#card2").show();
});

$("#card2-div").mouseout(function(){
    $("#card2").hide();
});

$("#card3-div").mouseover(function(){
    $("#card3").show();
});

$("#card3-div").mouseout(function(){
    $("#card3").hide();
});
