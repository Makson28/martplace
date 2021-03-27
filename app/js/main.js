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

document.addEventListener('click', e => {
  if (e.target.dataset.type === 'arrow') {
    const target = e.target
    const targetId = target.getAttribute('id')
  
    const filterName = targetId.split('-')[1]
    const filter = document.getElementById(`filter-${filterName}`)
    filter.classList.toggle('active')
    target.classList.toggle('active')
  }
})

$(".range__line").ionRangeSlider({
  type: "double",
  min: 0,
  max: 330,
  from: 30,
  to: 300,
  prefix: "$",
  skin: "round"
});

$('.icon-th').on('click', function(){
  $('.icon-th').addClass('active');
  $('.icon-th-list').removeClass('active');
  $('.category-product__list').addClass('category-product__grid');
  $('.category-product__list').removeClass('category-product__list');
});

$('.icon-th-list').on('click', function(){
  $('.icon-th-list').addClass('active');
  $('.icon-th').removeClass('active');
  $('.category-product__grid').addClass('category-product__list');
  $('.category-product__grid').removeClass('category-product__grid');
});