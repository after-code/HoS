(function ($){
  var header = "white";
  var decelerationCurve = [0.0, 0.0, 0.2, 1];
  var accelerationCurve = [0.4, 0.0, 1, 1];
  var sharpCurve = [0.4, 0.0, 0.6, 1];
  var standardCurve = [0.4, 0.0, 0.2, 1];
  var longCurve = [0.7, 0.0, 0.2, 1];
  var bouncyCurve = [0.87,-0.41,0.19,1.44];
  var open = false;
  var animating = false;
  var animSpeed = 205,
      header__height = $(".header__nav").height();
  $(function(){
var counter = 0;
  // ScrollMagic
  var controller = new ScrollMagic.Controller();

  var i1 = 0;
  var i2 = 0;
  var firstScene = false;
  var headerActive = false;
  if ($("body").hasClass("headerAnimation")){
    firstScene = true;
  }
  console.log("First scene: " + firstScene);
  var scene = new ScrollMagic.Scene()
  .addTo(controller)
  .on("update", function() {
    var x1 = controller.info("scrollDirection"),
        x2 = $(window).scrollTop(),
        x3 = 0,
        x4 = 200;
    if($(window).width() > 1025){


       if ( x1 == "FORWARD") {

         if(firstScene){
           firstScene = false;
           disableScroll();
           console.log("scrollDisabled");

           tl3.play();
           setTimeout(function(){
             enableScroll();
             console.log("scrollEnabled");

           },600);
         } else if (x2 >= x4){
           if (headerActive){
             tl4.reverse();
             headerActive = false;
           }
            console.log("forward > 200");
         }
        //  $("body,html").css({"overflow-y":"hidden"});
       }
       if (x1 == "REVERSE"  && !firstScene && x2 >= 800) {
         console.log("reverse > 600");
         if (!headerActive){
           console.log(tl4.time()+'play');
           $(".header__wrap").addClass("header-animated");
           tl4.play();

           headerActive = true;
         }
       } else if (x1 == "REVERSE" && !firstScene && x2 < 800){
         console.log("reverse < 600");
         if (headerActive){
           console.log(tl4.time()+'reverse');
           tl4.reverse();

           headerActive = false;
         }
       }
    }
    //  else {
    //   if ( x1 == "FORWARD"  ) {
    //     console.log(firstScene);
    //     if(firstScene){
    //       firstScene = false;
    //       disableScroll();
    //       console.log("scrollDisabled");
    //
    //       tl6.play();
    //       setTimeout(function(){
    //         enableScroll();
    //         console.log("scrollEnabled");
    //
    //       },600);
    //     }
    //   }
    // }
  });

  // var scene2 = new ScrollMagic.Scene()
  // .addTo(controller)
  //
  });
  $(function(){
     var img_path = 'url(' + $('.b-fluid-header').data("img") +")";
    $(".b-fluid-header").css({"background-image":img_path});
    $(".nav-icon").click(function(){
      $('.header').toggleClass("active");
      $('.wrapper--big').toggleClass("opened");
      $('html').toggleClass("opened");
      $('.header__wrap').toggleClass("opened");
    });
    $(".footer__back-to-top").click(function(){
      $("html, body").animate({scrollTop:"0px"},1000, $.bez(accelerationCurve));
    });
    if ($(window).width() > 1025){
      // var header_height = $(".header__nav").height();
      // $(".header__wrap").css({"height":header_height+"px"});
      // $(".b-fluid-header").css({"margin-top":-header_height+"px"});
    }
    $( window ).resize(function() {
      if ($(window).width() <1025) {
        $(".header").removeAttr('style');
        $(".header__logo--white").removeAttr('style');
        $(".header__logo").removeAttr('style');
        $(".header__wrap").removeAttr('style');
      } else {
        // header_height = $(".header__nav").height();
        // $(".header__wrap").css({"height":header_height+"px"});
        // $(".b-fluid-header").css({"margin-top":-header_height+"px"});
      }
    });
  });
  function headerBlack(){
    header = 'black';
  console.log('header changed to '+header);
  }
  function headerWhite(){
    header = 'white';
  console.log('header changed to '+header);
  }



  // / Widget animations
  var tl = new TimelineLite(),
      timeout,
      widget_active = false,
      $widget,
      $widget_left,
      $widget_right,
      $widget_main_img,
      $widget_chat_img,
      $widget_text_img;
  $(function(){
    // tl.to(".b-content-sticker ", 1, {"margin-left":"100px"});
    tl.pause();
    $widget = ".w-sidebar-widget",
    $widget_left = ".w-sidebar-widget__left",
    $widget_right_after = ".w-sidebar-widget__left .after",
    $widget_right_after_white = ".w-sidebar-widget__left .after--white",
    $widget_right = ".w-sidebar-widget__right",
    $widget_main_img = ".w-sidebar-widget__main-img",
    $widget_main_img_wrap = ".w-sidebar-widget__main-img-wrap",
    $widget_chat_img = ".w-sidebar-widget__chat-img",
    $widget_text_img = ".w-sidebar-widget__text-img";
    $widget_text = ".w-sidebar-widget__text";
    $widget_text_small = ".w-sidebar-widget__text--small";
    $after_wrap = '.after-wrap';


    tl.to($widget_chat_img, 0.15, {opacity:0, top:"3px", right:"3px", ease: $.bez(standardCurve)}, 'start-=0.10');
    tl.to($widget_text_img, 0.15, {opacity:0,  ease: $.bez(standardCurve)}, 'start-=0.15');
    tl.to($widget, 0.25, {   right:"0px"}, 'start');
    // tl.to($widget, 5, {    top:" -2%", ease: $.bez(standardCurve)}, 'start');
    tl.to($widget_right_after, 0.30, {left:"-35%",ease: $.bez(standardCurve)}, "start+=0.15");
    tl.to($widget_right_after_white, 0.01, {left:"7%"}, "start+=0.15");
    tl.to($widget_right_after_white, 0.5, {opacity:1}, "start+=0.15");
    // // tl.to($widget_text, 0.2, {opacity:1}, 'start+=0.3');
    // tl.to($widget_text_small, 0.2, {opacity:1}, "start+=0.4");
    tl.to($widget_right, 0.2, {opacity:1}, "start+=0.2");
    tl.to($widget_main_img_wrap, 0.1, {height:"50%", top:"25%", "overflow":"hidden"}, "start");
    $(".w-sidebar-widget").mouseenter(function(){
      showWidget();
    });
    $(".w-sidebar-widget").mouseleave(function(){
      clearTimeout(timeout);
      setTimeout(function(){
        hideWidget();
      },0);
    });
    $(".w-popup-email__wrap").on('click', function(e) {
    if (e.target !== this)
      return;
    hidePopup();
  });
    $(".w-popup-email__close-ico").click(hidePopup);
    $(".w-sidebar-widget").click(showPopup);
    $(".w-sidebar-widget__right").click(showPopup);
  });

  function showWidget(){
    if (!widget_active && $(window).width() > 500){
      tl.play();
      widget_active = true;
    }
  }
  function hideWidget(){
    if (widget_active){
      tl.reverse();
      widget_active = false;
    }
  }
  function showPopup() {
    if ($(window).width()< 460){
      tl5.play();
    } else {
      tl2.play();
    }
    if ($(window).width()< 797){
      setTimeout(function(){
        $('html, body').scrollTop(0);
      },200);
      setTimeout(function(){
        $("html").addClass("opened");
      },550);
    }
    // hideWidget();
  }
  function hidePopup() {
    tl2.reverse();
    tl5.reverse();
    if ($(window).width()< 797){
      $("html").removeClass("opened");
    }


  }

  // / Popup animations
  var tl2 = new TimelineLite(),
      tl3 = new TimelineLite(),
      tl4 = new TimelineLite({
        onReverseComplete:function(){
          $(".header__wrap").removeClass("header-animated");

          $(".header").animate({opacity:0},0, function(){
            $(".header").animate({opacity:1},150);
          });
        }
      }),
      tl5 = new TimelineLite(),
      tl6 = new TimelineLite(),
      tl7 = new TimelineLite(),
      $email_popup_wrap = '.w-popup-email__wrap',
      $email_popup = '.w-popup-email';
      $email_popup_mask = '.w-popup-email__mask';
      tl6.pause();

      window._tl4 = tl4;

  $(function(){
    tl2.pause();
    tl2.to($email_popup_wrap, 0.25, {display:"block", opacity:"1", ease: $.bez(standardCurve)}, 'start');
    tl2.to($email_popup, 0.30, {top:"50%", ease: $.bez(standardCurve)}, 'start-=0.05');
    tl2.to($email_popup_mask, 0.30, {opacity:'0.61', left:"-50.5%", ease: $.bez(standardCurve)}, 'start+=0.2');
    $('#mailMe').validate();
  // email popup on mobile
    tl5.pause();
    tl5.to($email_popup_wrap, 0.25, {display:"block", opacity:"1", ease: $.bez(standardCurve)}, 'start');
    tl5.to($email_popup, 0.30, {top:"0%", ease: $.bez(standardCurve)}, 'start-=0.05');
    tl5.to($email_popup_mask, 0.30, {opacity:'0.61', left:"-50.5%", ease: $.bez(standardCurve)}, 'start+=0.2');
    //header navigation animations

    var $header_wrap = $('.header__wrap'),
        $header = $('.header'),
        $header_link = $('.header__link'),
        $header_links = $('.header__links'),
        $header_nav = $('.header__nav'),
        $header_logo = $('.header__logo'),
        $fluid_header = $('.b-fluid-header'),
        $body_html = $('body,html'),
        $fluid_header_element = $('.b-fluid-header__element'),
        $fluid_header_vector = $('.b-fluid-header__vector'),
        $fluid_header_type = $('.b-fluid-header__type'),
        $header_logo_white = $('.header__logo--white');
    tl3.pause();
    tl4.pause();
    // var header_logo_top = $(".header__logo").offset().top+'px';
    // $(".header__logo, .header__logo--white").css({top:header_logo_top});
    //header wrap final treba da se prebaci u tl4 tipa
    // tl4.to(".header__wrap", 0.20,{"opacity":"0", ease: $.bez(accelerationCurve)},'start');
    // tl4.to($header_nav, 0, {padding:"10px", ease: $.bez(decelerationCurve)},'start+=0.2');
    // tl4.to($header_link, 0,  {fontSize:"16",autoRound: false,  color:"white",ease: $.bez(decelerationCurve)},'start+=0.2');
    // tl4.to($header_wrap, 0, {"box-shadow":" 0px 0px 7px 4px rgba(0, 0, 0,0.3)", position:'fixed', height:"auto",  opacity:1, top:"-100px",  background:'rgba(34, 34, 34, 0.99)', ease: $.bez(decelerationCurve)},'start+=0.2');
    // tl4.to($header_logo_white, 0, {left:"27.7%",top:"6px",  width:"107px",opacity:'1',ease: $.bez(decelerationCurve)},'start+=0.2');
    // tl4.to($header_logo, 0, {left:"27.7%",top:"6px",  width:"107px",opacity:'1',ease: $.bez(decelerationCurve)},'start+=0.2');
    // tl4.to($header_wrap, 0.20, {top:"0px", ease: $.bez(decelerationCurve)},'start+=0.2');

    //header wrap final treba da se prebaci u tl4 tipa
    // tl4.to(".header__wrap", 0.20,{"opacity":"0", ease: $.bez(accelerationCurve)},'start');
    // tl4.to($header_nav, 0, {padding:"10px", ease: $.bez(decelerationCurve)},'start+=0.2');
    // tl4.to($header_link, 0,  {fontSize:"16",autoRound: false,  color:"white",ease: $.bez(decelerationCurve)},'start+=0.2');
    // tl4.to($header_wrap, 0, {"box-shadow":" 0px 0px 7px 4px rgba(0, 0, 0,0.3)", position:'fixed', height:"auto",  opacity:1, top:"-100px",  background:'rgba(34, 34, 34, 0.99)', ease: $.bez(decelerationCurve)},'start+=0.2');
    // tl4.to($header_logo_white, 0, {left:"27.7%",top:"6px",  width:"107px",opacity:'1',ease: $.bez(decelerationCurve)},'start+=0.2');
    // tl4.to($header_logo, 0, {left:"27.7%",top:"6px",  width:"107px",opacity:'1',ease: $.bez(decelerationCurve)},'start+=0.2');
    tl4.to($header_wrap, 0.15, {top:"0px", ease: $.bez(decelerationCurve)},'start+=0.2');


  //Fluid header animations on desk
    // tl3.to($fluid_header, 0.6, {transform:"translateY(-56vh)", ease: Power2.easeOut},'start');
    // tl3.to($fluid_header, 0.6, {marginTop:"-56vh", ease: Power2.easeOut},'start');
    tl3.to($fluid_header, 0.5, {top:"-56vh", ease: Power4.easeInOut},'start');
    tl3.to($fluid_header_element, 0.5, {"top":"49.7vh","left":"46.1%", width:"36.4%", ease: Power4.easeInOut},'start');
    // tl3.to($fluid_header_vector, 0.45, {transform: "scale(7)", marginTop:"-50%", marginLeft:"-50%", ease: $.bez(accelerationCurve)},'start');
    // tl3.to($fluid_header_vector, 0.45, {transform: "scale(1)", marginTop:"0%", marginLeft:"0%", ease: $.bez(decelerationCurve)},'start+=0.5');
    tl3.to($fluid_header_type, 0.5, {transform: "scale(0.5)", marginLeft:"-25%", ease: Power4.easeInOut},'start');
    tl3.to($widget, 0.55, {opacity: "1" , delay:0.3 , ease: Power4.easeInOut},'final');
    tl3.to($fluid_header, 0, {position:"absolute"},'final');
    // tl3.to($header_wrap, 0, {position:"absolute"},'final');
    tl3.to($body_html, 0.8, {scrollTop:0},'start');

    //Fluid header animations on mobile
      tl6.to($fluid_header, 0.4, {"margin-top":"-74vh", ease: $.bez(decelerationCurve)},'start+=0.2');
      // tl6.to($fluid_header_element, 0.4, {"top":"70.7vh","left":"9.1%", width:"36.4%", ease: $.bez(decelerationCurve)},'start+=0.2');
      // tl3.to($fluid_header_vector, 0.45, {transform: "scale(7)", marginTop:"-50%", marginLeft:"-50%", ease: $.bez(accelerationCurve)},'start');
      // tl3.to($fluid_header_vector, 0.45, {transform: "scale(1)", marginTop:"0%", marginLeft:"0%", ease: $.bez(decelerationCurve)},'start+=0.5');
      // tl6.to($fluid_header_type, 0.4, {top:"24.6vh","left":"28.5vh" ,fontSize:"5vh",lineHeight:"4.7vh", ease: $.bez(decelerationCurve)},'start+=0.2');
      tl6.to($body_html, 0.4, {scrollTop:0, ease: $.bez(decelerationCurve)},'start+=0.2');

    //Initial header animation
     tl7.to($fluid_header_vector, 0.50, {transform: "scale(1)", marginTop:"0%", marginLeft:"0%", ease: Power2.easeOut},'start+=0.7');
     tl7.to($fluid_header_type, 0.2, {opacity: "1" ,ease: $.bez(accelerationCurve)},'start+=1');
     tl7.to($header_links, 0.65, {opacity: "1" ,ease: $.bez(accelerationCurve)},'start+=0.8');
     tl7.to($header_logo, 0.65, {opacity: "1" ,ease: $.bez(accelerationCurve)},'start+=0.8');

  });
  var keys = {37: 1, 38: 1, 39: 1, 40: 1};

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
  }

  function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
      }
  }

  function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
  }
  function enableScroll() {
      if (window.removeEventListener)
          window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
  }
})(jQuery);
