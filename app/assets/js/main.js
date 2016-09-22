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
});
