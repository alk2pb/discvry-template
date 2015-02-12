$(document).ready(function() {
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

  if ($(window).width() >= 767){
    $("#more-btn-group").mouseenter(function() {
      if (!$("#more-btn-group").hasClass("disabled")){
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
      }
    });
    $("#more-btn-group").mouseleave(function() {
      if (!$("#more-btn-group").hasClass("disabled")){
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
      }
    });
  }
  else {
    $("html").click(function(event) {
      if (!$("#more-btn-group").hasClass("disabled")){
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
      }
    });
  }


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

      }
  }

});
