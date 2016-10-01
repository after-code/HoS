$(function(){
  var decelerationCurve = [0.0, 0.0, 0.2, 1];
  var accelerationCurve = [0.4, 0.0, 1, 1];
  var sharpCurve = [0.4, 0.0, 0.6, 1];
  var standardCurve = [0.4, 0.0, 0.2, 1];
  var open = false;
  var animating = false;
  var animSpeed = 205;
  $(".widget").click(function(){
    console.log("nigga");
    if (!animating){
      if (!open){
        animating = true;
        $(".widget").animate({"right":"-220px"}, animSpeed, $.bez(sharpCurve));
        $(".widget__content").animate({"height":"30px", opacity:'0'}, animSpeed, $.bez(sharpCurve),function(){
          animating = false;
        });
        open = true;
      } else {
        animating = true;
        $(".widget").animate({"right":"-0px"}, animSpeed, $.bez(decelerationCurve));
        $(".widget__content").animate({"height":"126px", opacity:'1'}, animSpeed, $.bez(sharpCurve),function(){
          animating = false;
        });
        open = false;
      }
    }
  });

  // ScrollMagic
  var controller = new ScrollMagic.Controller();

  var i1 = 0;
  var i2 = 0;

  var scene = new ScrollMagic.Scene()
  .addTo(controller)
  .addIndicators()
  .on("update", function() {
      var x1 = controller.info("scrollDirection");
      var x2 = $(window).scrollTop();
      var x3 = 400;
          if ( x1 == "REVERSE" && x2 >= x3 && i1 == 0) {
              TweenLite.fromTo(".header", 0.2, { position:"fixed", top: "-80px"}, {position:"fixed", color:"white",  top: "0px", ease:  $.bez(sharpCurve)});
              i1++;
              i2 = 0;
          }
          if ( x1 == "REVERSE" && x2 == 0) {
              TweenLite.fromTo(".header", 0.6, { position:"relative", top: "0px"}, {color:"rgb(0,0,0)", background:"rgb(255,255,255)",top: "0px", ease:  $.bez(sharpCurve)});
              i1 = 0;
              i2 = 0;
          }

          if ( x1 == "FORWARD" && x2 <= 200 ) {
              TweenLite.to( ".header", 0.4, {position:"relative", background: "white", top:"0px", ease: $.bez(sharpCurve)});
              i1 = 0;
              i2 = 0;
              console.log('top');
          } else if ( x1 == "FORWARD" && x2 >= 400 ) {
              TweenLite.to( ".header", 0.2, {background: "black", top: "-130px", ease: $.bez(sharpCurve)});
              i1 = 0;
              i2 = 0;
              console.log('top');
          }
  });

});
