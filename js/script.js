// navbar scroll show background start
$(function(){
  $(window).scroll(function(){
     var scrolling = $(window).scrollTop();

     if(scrolling > 20){
      $(".menu_bg").addClass("bg")
     }
     else{
      $(".menu_bg").removeClass("bg")
     }
  })
})
// navbar scroll show background end




// service part start
$(function(){
    $('.ser_slick').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 3,
      vertical: true,
      nextArrow:".next",
      prevArrow:".prev",
     
      responsive: [
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
          }
        },
      ]

    })


   
    
  
  })
  // service part end


  // team part Start
  $(function(){
    $('.team_paragraph').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.team_man'
    });
    $('.team_man').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.team_paragraph',
      dots: false,
      centerMode: true,
      centerPadding: "0px",
      focusOnSelect: true,
      vertical: true,
  
      nextArrow:".nex",
      prevArrow:".pre",


      responsive: [
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
          }
        },
      ]





      // responsive: [
      //   {
      //     breakpoint: 576,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       vertical: ,
      //     }
      //   },
       
       
      // ]
    });
  
  
  })
// team part end


// counter up js start
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// counter up js end


// market part start
$(function(){
  $('.mark_slick').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    // nextArrow:".ne",
    //  prevArrow:".pr",
  });

})
// market part end