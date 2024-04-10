//SJSVBMNLOVE
$('.gallary_filter_menu li').on('click', function () {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
  
  })
  
  $('.filter_section').filterizr();

 
