jQuery(document).ready(function($) {
  var $anim1Img1 = $(".scene-stepped-1 .anim-img1");
  var $anim1Img2 = $(".scene-stepped-1 .anim-img2");
  var $anim1Img3 = $(".scene-stepped-1 .anim-img3");

  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tlAnim1 = new TimelineMax()
    .set($anim1Img3, { scale: 0, transformOrigin: "center center" })
    .to($anim1Img1, 1, { autoAlpha: 1, ease: Power4.easeInOut })
    .to($anim1Img2, 1, { autoAlpha: 1, ease: Power4.easeInOut })
    .to($anim1Img3, 0.75, {
      autoAlpha: 1,
      scale: 1,
      ease: Back.easeOut.config(5)
    });

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".scene-stepped-1 .scene-stepped--figure",
    reverse: false
  })
    .setTween(tlAnim1)
    .triggerHook(0.7)
    .addIndicators({ name: "timeline" }) // add indicators (requires plugin)
    .addTo(controller);

  //----------------------------------------------------------------------------------//

  var $anim2Img1 = $(".scene-stepped-2 .anim-img1");
  var $anim2Img2 = $(".scene-stepped-2 .anim-img2");

  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tlAnim2 = new TimelineMax()
    .set($anim2Img2, { scale: 0, transformOrigin: "center center" })
    .to($anim2Img1, 1, { autoAlpha: 1, ease: Power4.easeInOut })
    .to($anim2Img2, 0.75, {
      autoAlpha: 1,
      scale: 1,
      ease: Back.easeOut.config(5)
    });

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".scene-stepped-2 .scene-stepped--figure",
    reverse: false
  })
    .setTween(tlAnim2)
    .triggerHook(0.7)
    .addIndicators({ name: "timeline" }) // add indicators (requires plugin)
    .addTo(controller);

  //----------------------------------------------------------------------------------//

  var $anim3Img1 = $(".scene-stepped-3 .anim-img1");
  var $anim3Img2 = $(".scene-stepped-3 .anim-img2");

  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tlAnim3 = new TimelineMax()
    .to($anim3Img1, 1, { autoAlpha: 1, ease: Power4.easeInOut })
    .to($anim3Img2, 1, { autoAlpha: 1, ease: Power4.easeInOut });

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".scene-stepped-3 .scene-stepped--figure",
    reverse: false
  })
    .setTween(tlAnim3)
    .triggerHook(0.7)
    .addIndicators({ name: "timeline" }) // add indicators (requires plugin)
    .addTo(controller);

  //----------------------------------------------------------------------------------//

  var $anim4Img1 = $(".scene-stepped-4 .anim-img1");
  var $anim4Img2 = $(".scene-stepped-4 .anim-img2");
  var $anim4Img3 = $(".scene-stepped-4 .anim-img3");

  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tlAnim4 = new TimelineMax()
    .set($anim4Img3, { scale: 0, transformOrigin: "center center" })
    .to($anim4Img1, 1, { autoAlpha: 1, ease: Power4.easeInOut })
    .to($anim4Img2, 1, { autoAlpha: 1, ease: Power4.easeInOut })
    .to($anim4Img3, 0.75, {
      autoAlpha: 1,
      scale: 1,
      ease: Back.easeOut.config(5)
    });

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".scene-stepped-4 .scene-stepped--figure",
    reverse: false
  })
    .setTween(tlAnim4)
    .triggerHook(0.7)
    .addIndicators({ name: "timeline" }) // add indicators (requires plugin)
    .addTo(controller);

  //----------------------------------------------------------------------------------//

  var $anim5Img1 = $(".scene-stepped-5 .anim-img1");
  var $anim5Img2 = $(".scene-stepped-5 .anim-img2");
  var $anim5Img3 = $(".scene-stepped-5 .anim-img3");

  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tlAnim5 = new TimelineMax()
    .set($anim5Img3, { scale: 0, transformOrigin: "center center" })
    .to($anim5Img1, 1, { autoAlpha: 1, ease: Power4.easeInOut })
    .to($anim5Img2, 1, { autoAlpha: 1, ease: Power4.easeInOut })
    .to($anim5Img3, 0.75, {
      autoAlpha: 1,
      scale: 1,
      ease: Back.easeOut.config(5)
    });

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".scene-stepped-5 .scene-stepped--figure",
    reverse: false
  })
    .setTween(tlAnim5)
    .triggerHook(0.7)
    .addIndicators({ name: "timeline" }) // add indicators (requires plugin)
    .addTo(controller);
});
