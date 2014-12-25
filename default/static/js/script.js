$(document).ready(function() {
  // Adjust heights of intro and connect sections
  var height = $(window).height();
  if ($("#intro").height() < height){
    $("#intro").height(height);
  }
  if ($("#connect").height() + 200 < height){
      $("#connect").height(height - 201);
  }

  $('body').show()

  // Make more-btns visible
  var dimension = 0;
  $(".btn-fab-more").each(function() {
    dimension = dimension + 72;
  });

  if ($(window).height() < dimension){
    $(".btn-fab-more").each(function() {
      $(this).attr("data-placement","top");
    });
  }

  $(".footer").each(function() {
    $(this).width($(this).parent().width());
  });

  if ($(window).width() >= 767){
    $("#more-btn-group").mouseenter(function() {
      $(".btn-fab-more").each(function() {
        $(this).removeClass("under");

      });
      $("#more-btn-group").addClass("in");

      if ($(window).height() >= dimension){
        $("#more-btn-group").css("height", dimension);
        $(".animation-rotate").rotate({duration:200,animateTo:180})
      }
      else {
        $("#more-btn-group").css("width", dimension);
        $(".animation-rotate").rotate({duration:200,animateTo:90})
      }
    });
    $("#more-btn-group").mouseleave(function() {
      $(".btn-fab-more").each(function() {
        $(this).addClass("under");
      });
      $("#more-btn-group").removeClass("in");

      if ($(window).height() >= dimension){
        $("#more-btn-group").css("height", 76);
        $(".animation-rotate").rotate({duration:200,animateTo:0})
      }
      else {
        $("#more-btn-group").css("width", 76);
        $(".animation-rotate").rotate({duration:200,animateTo:-90})
      }
    });
  }
  else {
    $("html").click(function(event) {
      if (jQuery.contains(document.getElementById("more-btn-group"),event.target) && !$("#more-btn-group").hasClass("in")){
        $(".btn-fab-more").each(function() {
          $(this).removeClass("under");
        });
        $("#more-btn-group").addClass("in");

        if ($(window).height() >= dimension){
          $("#more-btn-group").css("height", dimension);
          $(".animation-rotate").rotate({duration:200,animateTo:180});
        }
        else {
          $("#more-btn-group").css("width", dimension);
          $(".animation-rotate").rotate({duration:200,animateTo:90});
        }
      }
      else if ($("#more-btn-group").hasClass("in")) {
        $(".btn-fab-more").each(function() {
          $(this).addClass("under");
        });
        $("#more-btn-group").removeClass("in");

        if ($(window).height() >= dimension){
          $("#more-btn-group").css("height", 76);
          $(".animation-rotate").rotate({duration:200,animateTo:0});
        }
        else {
          $("#more-btn-group").css("width", 76);
          $(".animation-rotate").rotate({duration:200,animateTo:-90});
        }
      }
    });
  }

  // Position the profile-picture-collapse and resume-link elements correctly
  var position_profile = $(".navbar-brand").position();

  if ($(window).width() >= 767){
    $(".profile-picture-collapse").css("left",position_profile.left + 145);
  }
  else {
    //$(".profile-picture-collapse").css("left",position_profile.left + 135);
    $(".profile-picture-collapse").css("left",$(".navbar").width()/2 - 25);
  }

  var position_resume = $("#resume").find(".section-heading").position();
  var resumepositionleft = position_resume.left + $("#resume").find(".section-heading").width() - 26;
  var resumepositiontop = position_resume.top + 10;

  $(".resume-link").css("left",resumepositionleft);
  $(".resume-link").css("top",resumepositiontop);

  var rtime = new Date(1, 1, 2000, 12,00,00);
  var timeout = false;
  var delta = 200;
  $(window).resize(function() {
      rtime = new Date();
      if (timeout === false) {
          timeout = true;
          setTimeout(resizeend, delta);
      }

      if ($(window).height() >= dimension) {
        if ($("#more-btn-group").hasClass("in")) {
          $(".animation-rotate").rotate({duration:200,animateTo:180})
        }
        else {
          $(".animation-rotate").rotate({duration:200,animateTo:0})
        }
      }
      else {
        if ($("#more-btn-group").hasClass("in")) {
          $(".animation-rotate").rotate({duration:200,animateTo:90})
        }
        else {
          $(".animation-rotate").rotate({duration:200,animateTo:-90})
        }
      }

      if ($(window).height() < dimension) {
        $(".btn-fab-more").each(function() {
          $(this).attr("data-placement","top");
        });
      }
  });

  function resizeend() {
      if (new Date() - rtime < delta) {
          setTimeout(resizeend, delta);
      } else {
          timeout = false;

          position_profile = $(".navbar-brand-name").position();
          if ($(window).width() >= 767){
            $(".profile-picture-collapse").css("left",position_profile.left + 145);
          }
          else {
            //$(".profile-picture-collapse").css("left",position_profile.left + 135);
            $(".profile-picture-collapse").css("left",$(".navbar").width()/2 - 25);
          }

          position_resume = $("#resume").find(".section-heading").position();

          var resumepositionleft = position_resume.left + $("#resume").find(".section-heading").width() - 26;

          var resumepositiontop = position_resume.top + 10;

          $(".resume-link").css("left",resumepositionleft);
          $(".resume-link").css("top",resumepositiontop);
      }
  }

  // Prevent collapse event from being triggered unless navbar-toggle is clicked
  // or navbar-collapse is visible and the click event is off of the navbar
  $("html").click(function(event) {
    if ($(window).width() < 767){
      if ($(".navbar-collapse").is(":visible") && !$(event.target).hasClass("navbar-header")){
        $(".navbar-collapse").collapse("toggle");
      }
    }
  });

  // Change shadow of the profile-picture with mouseover
  $(".navbar-brand").mouseover(function() {
    if ($(window).width() >= 767){
      $(".profile-picture-collapse").addClass("shadow-z-2-hover");
    }
  });
  $(".navbar-header").mouseout(function() {
    $(".profile-picture-collapse").removeClass("shadow-z-2-hover");
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
          $(".navbar-fixed-top").addClass("shadow-z-2");
          $(".profile-picture").fadeOut(800)
          $(".profile-picture-collapse").fadeIn(800);
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
          $(".navbar-fixed-top").removeClass("shadow-z-2");
          $(".profile-picture").fadeIn(800);
          $(".profile-picture-collapse").fadeOut(800);
      }
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $('.page-scroll a').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });


});
