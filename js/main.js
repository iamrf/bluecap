// Owl Carousel initialize
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      rtl: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      items: 3,
      loop: true,
      margin:20,
      responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1200:{
            items:3
        }
    }
    });
  });