var header = "white";
var decelerationCurve = [0.0, 0.0, 0.2, 1];
var accelerationCurve = [0.4, 0.0, 1, 1];
var sharpCurve = [0.4, 0.0, 0.6, 1];
var standardCurve = [0.4, 0.0, 0.2, 1];
var longCurve = [0.7, 0.0, 0.2, 1];
var open = false;
var animating = false;
var animSpeed = 205,
    header__height = $(".header__nav").height();
$(function(){

// ScrollMagic
var controller = new ScrollMagic.Controller();

var i1 = 0;
var i2 = 0;

var scene = new ScrollMagic.Scene()
.addTo(controller)
.on("update", function() {
  if($(window).width() > 1025 && $("body").hasClass("page-homepage")){
    var x1 = controller.info("scrollDirection"),
        x2 = $(window).scrollTop(),
        x3 = 0,
        x4 = 200;

     if ( x1 == "FORWARD" && x2 >= x3 ) {
       tl3.play();
     }
     if ( x2 <= x4 ) {
       tl3.reverse();
     }
  }
});

});
$(function(){
  $(".nav-icon").click(function(){
    console.log("ex");
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
    // console.log('over');
    showWidget();
    // timeout = setTimeout(showWidget, 200);
  });
  $(".w-sidebar-widget").mouseleave(function(){
    console.log('leave');
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
console.log("matori zeezanje");
});
function toggleWidget(speed){
  console.log('toggleing');
  if (!widget_active){
    tl.play();
    widget_active = true;
  } else {
    tl.reverse();
    widget_active = false;
    console.log('vad');
  }
}

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
  tl2.play();
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
  if ($(window).width()< 797){
    $("html").removeClass("opened");
  }


}

// / Popup animations
var tl2 = new TimelineLite(),
    tl3 = new TimelineLite(),
    $email_popup_wrap = '.w-popup-email__wrap',
    $email_popup = '.w-popup-email';
    $email_popup_mask = '.w-popup-email__mask';
$(function(){
  tl2.pause();
  tl2.to($email_popup_wrap, 0.25, {display:"block", opacity:"1", ease: $.bez(standardCurve)}, 'start');
  tl2.to($email_popup, 0.30, {top:"50%", ease: $.bez(standardCurve)}, 'start-=0.05');
  tl2.to($email_popup_mask, 0.30, {opacity:'0.61', left:"-50.5%", ease: $.bez(standardCurve)}, 'start+=0.2');
  $('#mailMe').validate();


  //header navigation animations

  var $header_wrap = '.header__wrap',
      $header = '.header',
      $header_link = '.header__link',
      $header_links = '.header__links',
      $header_logo = '.header__logo',
      $header_logo_white = '.header__logo--white';
  tl3.pause();
  tl3.to(".header__wrap", 0.20,{"opacity":"0", ease: $.bez(accelerationCurve)},'start');
  tl3.to($header_links, 0, {marginTop:"20px",marginBottom:"20px", ease: $.bez(decelerationCurve)},'start+=0.2');
  tl3.to($header_link, 0,  {fontSize:"16",autoRound: false,  color:"white",ease: $.bez(decelerationCurve)},'start+=0.2');
  tl3.to($header_wrap, 0, {"box-shadow":" 0px 0px 7px 4px rgba(0, 0, 0,0.3)", position:'fixed', height:"auto",  opacity:1, top:"-100px",  background:'rgba(34, 34, 34, 0.99)', ease: $.bez(decelerationCurve)},'start+=0.2');
  // tl3.to($header_wrap, 0, { ,, ease: $.bez(decelerationCurve)},'start+=0.2');
  tl3.to($header_logo_white, 0, {left:"27.7%",top:"6px",  width:"107px",opacity:'1',ease: $.bez(decelerationCurve)},'start+=0.2');
  tl3.to($header_logo, 0, {left:"27.7%",top:"6px",  width:"107px",opacity:'1',ease: $.bez(decelerationCurve)},'start+=0.2');
  tl3.to($header_wrap, 0.20, {top:"0px", ease: $.bez(decelerationCurve)},'start+=0.2');

});
