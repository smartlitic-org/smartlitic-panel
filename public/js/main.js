(function($) {
  
  "use strict";
  
  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  /* Testimonials Carousel 
  ========================================================*/
  var owl = $("#client-testimonial");
    owl.owlCarousel({
      navigation: true,
      pagination: false,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 1,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      addClassActive: true,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsTablet: [767,1],
      itemsTabletSmall: [480,1],
      itemsMobile : [479,1],
    });   
    $('#client-testimonial').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
    $('#client-testimonial').find('.owl-next').html('<i class="lni-chevron-right"></i>');


    /* showcase Slider
    =============================*/
     var owl = $(".showcase-slider");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        margin:10,
        stopOnHover: true,
        autoPlay: true,
        items: 3,
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
      });


      var owl = $(".faq-slider");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 60,
        margin:10,
        stopOnHover: true,
        autoPlay: true,
        items: 6,
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
      });



  /* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

  /* 
 VIDEO POP-UP
 ========================================================================== */
  $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
  });

  /* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

  /* 
   One Page Navigation
   ========================================================================== */


    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
      if ($(window).width() <= 768) {
          $('.navbar-collapse a').on('click', function () {
              $('.navbar-collapse').collapse('hide');
          });
      }
      else {
          $('.navbar .navbar-inverse a').off('click');
      }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });

  $('#sticky-feedback').on('click',function(event) {
    $('#sticky-box').fadeIn(400);
    $('#stk-body').fadeIn(400);
    $('#stk-selector-div').fadeOut(400);
    $('#stk-body-1').fadeOut(400);
    $('#sticky-feedback').fadeOut(400);
  })

  $('#stk-select').on('click',function(event) {
    $('#main-selector').fadeIn(400);
    $('#feedback-input').val("1");
    $('.navbar-nav').addClass('stk-navbar');
    $('.fixed-top').addClass('menu-bg-1');
  })

  $('.box-select0').on('click',function(event) {
    var input_fdk = $('#feedback-input').val();
    if (input_fdk == "1"){
      event.preventDefault();
      event.stopImmediatePropagation(); 
      $('.box-select').removeClass('box-select1i');
      $('.box-select').removeClass('box-select2i');
      $('.box-select').removeClass('box-select3i');
      $('.box-select').removeClass('box-select4i');
      $('.box-select').removeClass('box-select5i');
      $('.box-select').removeClass('box-select6i');
      $('.box-select').removeClass('box-select7i');
      $('.box-select0').parent().addClass('box-select0i');
      $('.fixed-top').removeClass('menu-bg-1');
      $('.fixed-top').addClass('menu-bg-2');
      $('#main-selector').addClass('main-selector-1');
      return false;
    }

  })
  $('.box-select1').on('click',function(event) {
    var input_fdk = $('#feedback-input').val();
    if (input_fdk == "1"){
      event.preventDefault();
      event.stopImmediatePropagation(); 
      $('.box-select').removeClass('box-select0i');
      $('.box-select').removeClass('box-select2i');
      $('.box-select').removeClass('box-select3i');
      $('.box-select').removeClass('box-select4i');
      $('.box-select').removeClass('box-select5i');
      $('.box-select').removeClass('box-select6i');
      $('.box-select').removeClass('box-select7i');
      $('.box-select1').parent().addClass('box-select1i');
      $('.fixed-top').removeClass('menu-bg-1');
      $('.fixed-top').addClass('menu-bg-2');
      $('#main-selector').addClass('main-selector-1');
      return false;
    }
  })
  $('.box-select2').on('click',function(event) {
    var input_fdk = $('#feedback-input').val();
    if (input_fdk == "1"){
      event.preventDefault();
      event.stopImmediatePropagation(); 
      $('.box-select').removeClass('box-select0i');
      $('.box-select').removeClass('box-select1i');
      $('.box-select').removeClass('box-select3i');
      $('.box-select').removeClass('box-select4i');
      $('.box-select').removeClass('box-select5i');
      $('.box-select').removeClass('box-select6i');
      $('.box-select').removeClass('box-select7i');
      $('.box-select2').parent().addClass('box-select2i');
      $('.fixed-top').removeClass('menu-bg-1');
      $('.fixed-top').addClass('menu-bg-2');
      $('#main-selector').addClass('main-selector-1');
      return false;
    }
  })
  $('.box-select3').on('click',function(event) {
    var input_fdk = $('#feedback-input').val();
    if (input_fdk == "1"){
      event.preventDefault();
      event.stopImmediatePropagation(); 
      $('.box-select').removeClass('box-select0i');
      $('.box-select').removeClass('box-select1i');
      $('.box-select').removeClass('box-select2i');
      $('.box-select').removeClass('box-select4i');
      $('.box-select').removeClass('box-select5i');
      $('.box-select').removeClass('box-select6i');
      $('.box-select').removeClass('box-select7i');
      $('.box-select3').parent().addClass('box-select3i');
      $('.fixed-top').removeClass('menu-bg-1');
      $('.fixed-top').addClass('menu-bg-2');
      $('#main-selector').addClass('main-selector-1');
      return false;
    }
  })
  $('.box-select4').on('click',function(event) {
    var input_fdk = $('#feedback-input').val();
    if (input_fdk == "1"){
      event.preventDefault();
      event.stopImmediatePropagation(); 
      $('.box-select').removeClass('box-select0i');
      $('.box-select').removeClass('box-select1i');
      $('.box-select').removeClass('box-select2i');
      $('.box-select').removeClass('box-select3i');
      $('.box-select').removeClass('box-select5i');
      $('.box-select').removeClass('box-select6i');
      $('.box-select').removeClass('box-select7i');
      $('.box-select4').parent().addClass('box-select4i');
      $('.fixed-top').removeClass('menu-bg-1');
      $('.fixed-top').addClass('menu-bg-2');
      $('#main-selector').addClass('main-selector-1');
      return false;
    }
  })
  $('.box-select5').on('click',function(event) {
    var input_fdk = $('#feedback-input').val();
    if (input_fdk == "1"){
      event.preventDefault();
      event.stopImmediatePropagation(); 
      $('.box-select').removeClass('box-select0i');
      $('.box-select').removeClass('box-select1i');
      $('.box-select').removeClass('box-select2i');
      $('.box-select').removeClass('box-select3i');
      $('.box-select').removeClass('box-select4i');   
      $('.box-select').removeClass('box-select6i');
      $('.box-select').removeClass('box-select7i');
      $('.box-select5').parent().addClass('box-select5i');
      $('.fixed-top').removeClass('menu-bg-1');
      $('.fixed-top').addClass('menu-bg-2');
      $('#main-selector').addClass('main-selector-1');
      return false;
    }
  })
  $('.box-select6').on('click',function(event) {
    var input_fdk = $('#feedback-input').val();
    if (input_fdk == "1"){
      event.preventDefault();
      event.stopImmediatePropagation(); 
      $('.box-select').removeClass('box-select0i');
      $('.box-select').removeClass('box-select1i');
      $('.box-select').removeClass('box-select2i');
      $('.box-select').removeClass('box-select3i');
      $('.box-select').removeClass('box-select4i');
      $('.box-select').removeClass('box-select5i');   
      $('.box-select').removeClass('box-select7i');
      $('.box-select6').parent().addClass('box-select6i');
      $('.fixed-top').removeClass('menu-bg-1');
      $('.fixed-top').addClass('menu-bg-2');
      $('#main-selector').addClass('main-selector-1');
      return false;
    }
  })
  $('.box-select7').on('click',function(event) {
    var input_fdk = $('#feedback-input').val();
    if (input_fdk == "1"){
      event.preventDefault();
      event.stopImmediatePropagation(); 
      $('.box-select').removeClass('box-select0i');
      $('.box-select').removeClass('box-select1i');
      $('.box-select').removeClass('box-select2i');
      $('.box-select').removeClass('box-select3i');
      $('.box-select').removeClass('box-select4i');   
      $('.box-select').removeClass('box-select5i');
      $('.box-select').removeClass('box-select6i');    
      $('.box-select7').parent().addClass('box-select7i');
      $('.fixed-top').removeClass('menu-bg-1');
      $('.fixed-top').addClass('menu-bg-2');
      $('#main-selector').addClass('main-selector-1');
      return false;
    }
  })

  
  $('.box-change').on('click',function(event) {
    $('.box-select').removeClass('box-select0i');
    $('.box-select').removeClass('box-select1i');
    $('.box-select').removeClass('box-select2i');
    $('.box-select').removeClass('box-select3i');
    $('.box-select').removeClass('box-select4i');
    $('.box-select').removeClass('box-select5i');
    $('.box-select').removeClass('box-select6i');
    $('.box-select').removeClass('box-select7i');
    $('.fixed-top').addClass('menu-bg-1');
    $('.fixed-top').removeClass('menu-bg-2');
    $('#main-selector').removeClass('main-selector-1');
  })

  $('.box-close').on('click',function(event) {
    $('#main-selector').fadeOut(400);
    $('.navbar-nav').removeClass('stk-navbar');
    $('.box-select').removeClass('box-select0i');
    $('.box-select').removeClass('box-select1i');
    $('.box-select').removeClass('box-select2i');
    $('.box-select').removeClass('box-select3i');
    $('.box-select').removeClass('box-select4i');
    $('.box-select').removeClass('box-select5i');
    $('.box-select').removeClass('box-select6i');
    $('.box-select').removeClass('box-select7i');
    $('#feedback-input').val("0");
    $('.fixed-top').removeClass('menu-bg-1');
    $('.fixed-top').removeClass('menu-bg-2');
    $('#main-selector').removeClass('main-selector-1');
  })

  $('#stk-close').on('click',function(event) {
    $('#sticky-box').fadeOut(400);
    $('#main-selector').fadeOut(400);
    $('.navbar-nav').removeClass('stk-navbar');
    $('#sticky-feedback').fadeIn(400);
    $("#stk-textarea").val("");
    $('#stk-btn').attr('disabled', true);
    $('#feedback-input').val("0");
    $('.fixed-top').removeClass('menu-bg-1');
    $('.fixed-top').removeClass('menu-bg-2');
    $('.box-select').removeClass('box-select0i');
    $('.box-select').removeClass('box-select1i');
    $('.box-select').removeClass('box-select2i');
    $('.box-select').removeClass('box-select3i');
    $('.box-select').removeClass('box-select4i');
    $('.box-select').removeClass('box-select5i');
    $('.box-select').removeClass('box-select6i');
    $('.box-select').removeClass('box-select7i');
    $('#main-selector').removeClass('main-selector-1');
  })
  
  $('#stk-selector-body .stk-emoji').on('click',function(event) {
     $('#stk-selector-div').fadeIn(400);
   })

  $('#stk-selector-div .btn-common').on('click',function(event) {
    $('#stk-body').fadeOut(400);
    $('#stk-body-1').fadeIn(400);
  })



  $('#stk-btn[type="submit"]').attr('disabled', true);
  $('#stk-textarea').on('keyup',function() {
      var textarea_value = $("#stk-textarea").val();
      if(textarea_value != '') {
          $('#stk-btn[type="submit"]').attr('disabled', false);
         // alert("false");
      } else {       
          $('input#stk-btn[type="submit"]').attr('disabled', true);
          //alert("true");
      }
  });
   


}(jQuery));

