$(document).ready(function() {
  $('.button-collapse').sideNav();
  $(".dropdown-button").dropdown({ hover: false, alignment: 'right', constrain_width: false });

  $('.your-class').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  });

  $('.p1').attr('data-tooltip','Project 1');
  $('.p2').attr('data-tooltip','Project 2');
  $('.p3').attr('data-tooltip','Project 3');

  $('.tooltipped').tooltip({delay: 0});

  // Listen for orientation changes
  window.addEventListener("orientationchange", function() {
  	// Announce the new orientation number
  	location.reload();
  }, false);

  //Class for Detecting Mobile devices
  var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };

  $('#intro').height($(window).height()*.85 + 'px');
  $('#intro-spacer').height($('#intro').height() + 'px');
  $('#about').css('min-height',$(window).height() + 'px');
  $('#projects').css('min-height',$(window).height() + 'px');
  $('#us').css('min-height',$(window).height() + 'px');

  var footerHeight = $(window).height() - $('.footer-copyright').height() - 64;

  if ( isMobile.any() ){
    footerHeight = footerHeight + 60;
  }
  $('.footer-main').css('height',footerHeight + 'px');


  $('.social-wrapper').css('min-height',$('.footer-main').height() - $('.footer-header').height() + 'px');
  $('.footer-logo-wrapper').css('min-height',$('.social').height() + 'px');

  $('#footer').attr('offset',$(window).height() - $('#footer').height());

  $('.project').each(function() {
    $(this).css('min-height', $(window).height() - 69 - 70 - 64 - 35 + 'px');
  });

  $('.middle').each(function() {
    $(this).css('padding-top', ($(window).height() - 69 - 70 - 64 - 35 - $(this).height())/2 + 'px')
  });

  $('.slick-prev').css('top', $('.slick-list').height()/2 - $('.slick-prev').height()/2 + 'px');
  $('.slick-prev').css('left', $('.slick-prev').height()/4 + 'px');
  $('.slick-next').css('top', $('.slick-list').height()/2 - $('.slick-prev').height()/2 + 'px');
  $('.slick-next').css('right', $('.slick-prev').height()/4 + 'px');
  $('.slick-dots').css('left', $(window).width()/2 - $('.slick-dots').width()/2 + 'px');

  $('section').last().prev().css('margin-bottom',$('#footer').height() + 'px');

  if ($('#nav-mobile').width() > $('.nav-wrapper').width() - $('#logo-container').width()) {
    $('#nav-mobile').addClass("full");
    var css = '@media only screen and (min-width : 993px) { .hide-on-large-only, nav a.button-collapse { display: block !important; } }',
      style = document.getElementsByTagName('style');
      style[0].innerHTML = css;
  }

  $('.button-collapse').offset({left:12});
  $('.more').offset({left:$(window).width() - 12 - $('.more').width()});
  $('.button-more').css('left',$(window).width()/2-$('.button-more').width()/2 + 'px');
  $('.button-more').css('top',(-$('.btn-large').outerHeight())/2) + 'px';

  var logoFontSizeCollapse = 2.1;
  var logoFontSize = 5;

  if ($(window).width() >= 767) {
    var logoFontSize = 10;
  }

  $('.brand-logo').css('font-size',logoFontSize + 'rem');

  var logoPosition = $('.brand-logo').position();
  var logoOffset = $('.brand-logo').offset();

  var logoLeftCollapse = logoOffset.left;
  var logoTopCollapse = logoPosition.top;

  var logoLeft = $(window).width()/2-$('.brand-logo').width()/2;
  var logoTop = $('#intro').height()/2-$('.brand-logo').height()/2;

  var gradient = $(window).scrollTop()/($('#intro').height() - 64);

  if (gradient > 1){
    gradient = 1;
  }

  $('.brand-logo').offset({left:logoLeft - (logoLeft - logoLeftCollapse) * (gradient)});
  $('.brand-logo').css('top',logoTop - (logoTop - logoTopCollapse) * (gradient) + 'px');
  $('.brand-logo').css('font-size',logoFontSize - (logoFontSize - logoFontSizeCollapse) * (gradient) + 'rem');
  $('.brand-logo').css('position','absolute');
  $('.brand-logo').css('opacity',1);

  $(window).scroll(function() {
      var gradient = $(window).scrollTop()/($('#intro').height() - 64);

      if (gradient > 1){
        gradient = 1;
      }

      if ($(window).scrollTop() > $('#intro').height()){
        if ($('#footer').css('opacity') != 1) {
          $('#footer').css('opacity', 1);
          $('#footer').css('z-index', 1);
        }
      }
      else {
        if ($('#footer').css('opacity') != 0) {
          $('#footer').css('opacity', 0);
          $('#footer').css('z-index', 0);
        }
      }

      var left = logoLeft - (logoLeft - logoLeftCollapse) * (gradient);
      var top = logoTop - (logoTop - logoTopCollapse) * (gradient);
      var fontSize = logoFontSize - (logoFontSize - logoFontSizeCollapse) * (gradient);


      /* Fade navbar background and shadow */
      // $('nav').css('background-color', "rgba(67,103,184," + gradient + ")");
      // $('nav').css('box-shadow', "0 2px 5px 0 rgba(0, 0, 0, " + 0.16 * gradient + "), 0 2px 10px 0 rgba(0, 0, 0, " + 0.12 * gradient + ")");
      // $('nav').css('-moz-box-shadow', "0 2px 5px 0 rgba(0, 0, 0, " + 0.16 * gradient + "), 0 2px 10px 0 rgba(0, 0, 0, " + 0.12 * gradient + ")");
      // $('nav').css('-webkit-box-shadow', "0 2px 5px 0 rgba(0, 0, 0, " + 0.16 * gradient + "), 0 2px 10px 0 rgba(0, 0, 0, " + 0.12 * gradient + ")");

      /* Smoothly move logo */
      $('.brand-logo').offset({left:left});
      $('.brand-logo').css('top',top + 'px');
      $('.brand-logo').css('font-size',fontSize + 'rem');

      /* Fade button-more */
      // $('.button-more').css('opacity',1-gradient);
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $('.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - $anchor.attr('offset')
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });

      $('.page-scroll-top').bind('click', function(event) {
          // var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: 0
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });

      $('.page-scroll-bottom').bind('click', function(event) {
          // var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(document).height() - $(window).height()
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });

  if( !isMobile.any() ){
    $(window).resize(function() {
      $('#intro').height($(window).height()*.85 + 'px');
      $('#intro-spacer').height($('#intro').height() + 'px');
      $('#about').css('min-height',$(window).height() + 'px');
      $('#projects').css('min-height',$(window).height() + 'px');
      $('#us').css('min-height',$(window).height() + 'px');
      $('.footer-main').css('height',$(window).height() - $('.footer-copyright').height() - 64 + 'px');
      $('.social-wrapper').css('min-height',$('.footer-main').height() - $('.footer-header').height() + 'px');
      $('.footer-logo-wrapper').css('min-height',$('.social').height() + 'px');

      $('#footer').attr('offset',$(window).height() - $('#footer').height());

      $('.project').each(function() {
        $(this).css('min-height', $(window).height() - 69 - 70 - 64 - 35 + 'px');
      });

      $('.middle').each(function() {
        $(this).css('padding-top', ($(window).height() - 69 - 70 - 64 - 35 - $(this).height())/2 + 'px')
      });

      $('.slick-prev').css('top', $('.slick-list').height()/2 - $('.slick-prev').height()/2 + 'px');
      $('.slick-prev').css('left', $('.slick-prev').height()/4 + 'px');
      $('.slick-next').css('top', $('.slick-list').height()/2 - $('.slick-prev').height()/2 + 'px');
      $('.slick-next').css('right', $('.slick-prev').height()/4 + 'px');
      $('.slick-dots').css('left', $(window).width()/2 - $('.slick-dots').width()/2 + 'px');

      if ($(window).scrollTop() > $('#intro').height()){
        $('#footer').css('opacity', 1);
        $('#footer').css('z-index', 1);
      }
      else {
        $('#footer').css('opacity', 0);
        $('#footer').css('z-index', 0);
      }
      $('section').last().prev().css('margin-bottom',$('#footer').height() + 'px');

      $('.button-collapse').offset({left:12});
      $('.more').offset({left:$(window).width() - 12 - $('.more').width()});
      $('.button-more').css('left',$(window).width()/2-$('.button-more').width()/2 + 'px');

      $('.brand-logo').css('opacity',0);
      $('.brand-logo').css('font-size',logoFontSizeCollapse + 'rem');
      $('.brand-logo').css('position','static');

      if ($('#nav-mobile').width() > $('.nav-wrapper').width() - $('#logo-container').width()) {
        $('#nav-mobile').addClass("full");
        var css = '@media only screen and (min-width : 993px) { .hide-on-large-only, nav a.button-collapse { display: block !important; } }',
        style = document.getElementsByTagName('style');
        style[0].innerHTML = css;
      }
      else {
        $('#nav-mobile').removeClass("full");
        var css = '',
        style = document.getElementsByTagName('style');
        style[0].innerHTML = css;
      }

      logoFontSize = 5;

      if ($(window).width() >= 767) {
        logoFontSize = 10;
      }

      logoPosition = $('.brand-logo').position();
      logoOffset = $('.brand-logo').offset();

      logoLeftCollapse = logoOffset.left;
      logoTopCollapse = logoPosition.top;

      $('.brand-logo').css('font-size',logoFontSize + 'rem');
      logoLeft = $(window).width()/2-$('.brand-logo').width()/2;
      logoTop = $('#intro').height()/2-$('.brand-logo').height()/2;

      var gradient = $(window).scrollTop()/($('#intro').height() - 64);

      if (gradient > 1){
        gradient = 1;
      }

      $('.brand-logo').offset({left:logoLeft - (logoLeft - logoLeftCollapse) * (gradient)});
      $('.brand-logo').css('top',logoTop - (logoTop - logoTopCollapse) * (gradient) + 'px');
      $('.brand-logo').css('font-size',logoFontSize - (logoFontSize - logoFontSizeCollapse) * (gradient) + 'rem');
      $('.brand-logo').css('position','absolute');
      $('.brand-logo').css('opacity',1);
    });
  }

  var scroll;

  $(window).mouseover(function(e) {
    scroll = $(e.target).hasClass('scroll');
  });

  //Firefox
// $('body').bind('DOMMouseScroll', function(e){
//     if(e.originalEvent.detail < 0) {
//         //scroll down
//         if (scroll) {
//           // if ($('.your-class').slick("slickCurrentSlide") < $('.your-class').slick("slickSlidePositionCount")){

//             $('.your-class').slick("slickNext");
//           // }
//         }
//     }else {
//         //scroll up
//         if (scroll) {
//           // if ($('.your-class').slick("slickCurrentSlide") > 0){
//             $('.your-class').slick("slickPrev");
//           // }
//         }
//     }

//     //prevent page fom scrolling
//     // return false;
// });

 //IE, Opera, Safari
 $('body').bind('mousewheel', function(e){

     if(e.originalEvent.deltaX > 1) {
         //scroll down
         if (scroll) {
          // if ($('.your-class').slick("slickCurrentSlide") < $('.your-class').slick("slickSlidePositionCount")){

             $('.your-class').slick("slickNext");
          // }
         }
     }else if (e.originalEvent.deltaX < -1) {
         //scroll up
         if (scroll) {
          // if ($('.your-class').slick("slickCurrentSlide") > 0){
             $('.your-class').slick("slickPrev");
          // }
         }


     }

     //prevent page fom scrolling
    // return false;
 });

  $('body').css('opacity',1);
});