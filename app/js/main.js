$(function(){
  $('.fetured__slider').slick({
    slidesToShow: 1,
    prevArrow: $('.left_v1'),
    nextArrow: $('.right_v1'),
  });

  var mixer = mixitup('.product__inner');

  $('.followers__slider').slick({
    slidesToShow: 3,
    prevArrow: $('.left_v2'),
    nextArrow: $('.right_v2'),
  });
});