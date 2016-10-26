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
  if($(window).width() > 1025){
    var x1 = controller.info("scrollDirection"),
        x2 = $(window).scrollTop(),
        x3 = 1600;


    console.log(header);
        if ( x1 == "REVERSE" && x2 >= x3 && i1 == 0 ) {
            TweenLite.to(".header", 0.24, {position:"fixed", color:"white",  top: "0", delay:.2,  ease:  $.bez(decelerationCurve), onComplete:headerBlack});
            TweenLite.fromTo(".header__logo--white", 0, {width:"10%", "margin-top": '1.1%', left: '25.7%' }, {opacity:'1', ease:  $.bez(decelerationCurve)});
            TweenLite.to(".header__logo", 0, {opacity:'0', ease:  $.bez(decelerationCurve)});
            TweenLite.to(".header__links", 0, {"margin-top":"2.8%", "margin-bottom":"2.8%",ease:  $.bez(decelerationCurve)});
            i1++;
            i2 = 0;
        }
        if ( x1 == "REVERSE" && x2 == 0 && header == "black") {
            TweenLite.to(".header", 0.28, {top: "0", ease:  $.bez(decelerationCurve), onComplete:function(){
              TweenLite.to(".header", 0.42, {position:"relative", color:"rgb(34, 34, 34)", background:"rgb(255,255,255)",  ease:  $.bez(standardCurve)});
              TweenLite.to(".header__logo", 0.42, {opacity:'1',delay:0.12, ease:  $.bez(standardCurve)});
              TweenLite.to(".header__logo--white", 0.42, {opacity:'0',delay:0.12, ease:  $.bez(standardCurve), onComplete:headerWhite});
            }});

            TweenLite.to(".header__links", 0.28, {"margin-top":"4.16%","margin-bottom":"4.16%", delay:0.18, ease:  $.bez(decelerationCurve)});
            TweenLite.to(".header__logo--white", 0.28, {width:"11%", left:"24.7%", ease:  $.bez(sharpCurve)});
            TweenLite.to(".header__logo--white", 0.28, {"margin-top":"2.4%", delay:0.18, ease:  $.bez(decelerationCurve)});
            i1 = 0;
            i2 = 0;
          }
        if ( x1 == "FORWARD" && x2 <= x3 ) {
            TweenLite.to( ".header", 0.4, {position:"relative", background: "white", top:"0", ease: $.bez(accelerationCurve) });
            i1 = 0;
            i2 = 0;
        } else if ( x1 == "FORWARD" && x2 >= x3 ) {

            TweenLite.to( ".header", 0.2, {background: "rgb(34, 34, 34)", top: -header__height + "px", ease: $.bez(accelerationCurve)});
            i1 = 0;
            i2 = 0;
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
    var header_height = $(".header__nav").height();
    $(".header__wrap").css({"height":header_height+"px"});
  }
  $( window ).resize(function() {
    if ($(window).width() <1025) {
      $(".header").removeAttr('style');
      $(".header__logo--white").removeAttr('style');
      $(".header__logo").removeAttr('style');
      $(".header__wrap").removeAttr('style');
    } else {
      header_height = $(".header__nav").height();
      $(".header__wrap").css({"height":header_height+"px"});
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



/// Widget animations
var widget_active = false,
    $widget,
    $widget_left,
    $widget_right,
    $widget_main_img,
    $widget_chat_img,
    $widget_text_img;
$(function(){


  $widget = ".w-sidebar-widget",
  $widget_left = ".w-sidebar-widget__left",
  $widget_right = ".w-sidebar-widget__right",
  $widget_main_img = ".w-sidebar-widget__main-img",
  $widget_chat_img = ".w-sidebar-widget__chat-img",
  $widget_text_img = ".w-sidebar-widget__text-img";
});
var t1 = new TimelineLite();
function toggleWidget(speed){
  if (!widget_active){
    t1.from($widget_chat_img, 0.3, {opacity:"0"});
    t1.from($widget_text_img, 0.3, {opacity:"0"}, "-=0.3");
          t1.from($widget, 0.3, {width:"300px", "margin-top":'30px', height:"70px"}, "-=0.6");
          t1.from($widget_right, 0.3, {opacity:'1'}, "-=0.6");
          t1.from($widget_main_img, 0.3, {"margin-top":'-15px'}, "-=0.6");
  }
}
