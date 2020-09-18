var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["654895ed-4a53-4236-82b1-42844ccc21c1","8b7f6fc4-85b4-44a5-b7c4-3f7d9d7130bf","9189f59d-c61a-4e64-8bf4-5c94a96ac10a","0e860485-5ef3-4ac7-85e2-07d76befed78","493d1fad-e084-4f29-9151-8c1e3e11bb11","7fbe30d5-f365-4124-b225-13af562dedf0","98efe0d6-2305-4f37-8615-1360a29d1066","256f726f-4b62-476c-84cc-e95436967a68"],"propsByKey":{"654895ed-4a53-4236-82b1-42844ccc21c1":{"name":"deeds","sourceUrl":null,"frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":12,"version":"hklYJqUDfFOsEfGYEEoTTAP8N8NIZbhM","loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/654895ed-4a53-4236-82b1-42844ccc21c1.png"},"8b7f6fc4-85b4-44a5-b7c4-3f7d9d7130bf":{"name":"daisy","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"uP3q3gihYZ_lio3miDQgVoizjuvLg95H","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8b7f6fc4-85b4-44a5-b7c4-3f7d9d7130bf.png"},"9189f59d-c61a-4e64-8bf4-5c94a96ac10a":{"name":"GoodDeedMedal","sourceUrl":null,"frameSize":{"x":41,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"9GZ.1vw2BBrOeukr_VyxsTihwR3j9jSY","loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":74},"rootRelativePath":"assets/9189f59d-c61a-4e64-8bf4-5c94a96ac10a.png"},"0e860485-5ef3-4ac7-85e2-07d76befed78":{"name":"bully","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"bqYxwsh5wSkESYVRFwk4lJr15akfS1LW","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0e860485-5ef3-4ac7-85e2-07d76befed78.png"},"493d1fad-e084-4f29-9151-8c1e3e11bb11":{"name":"rainbow","sourceUrl":"assets/api/v1/animation-library/gamelab/oxL0ak8K0_DZMb1sQi0VfaI8XrHTF6Jd/category_backgrounds/background_rainbow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"oxL0ak8K0_DZMb1sQi0VfaI8XrHTF6Jd","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oxL0ak8K0_DZMb1sQi0VfaI8XrHTF6Jd/category_backgrounds/background_rainbow.png"},"7fbe30d5-f365-4124-b225-13af562dedf0":{"name":"steps","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"FQxvXO6otTjE2_CH.UfeGZtM1Awqds_G","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7fbe30d5-f365-4124-b225-13af562dedf0.png"},"98efe0d6-2305-4f37-8615-1360a29d1066":{"name":"steps2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"hkGsAwoF4pgQ8xFR0vUI2ImmtKDlJUEg","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/98efe0d6-2305-4f37-8615-1360a29d1066.png"},"256f726f-4b62-476c-84cc-e95436967a68":{"name":"step1","sourceUrl":null,"frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":12,"version":"yihUbtR_FB6pZb54P2E.qXuiYtt2Eujm","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/256f726f-4b62-476c-84cc-e95436967a68.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var daisy = createSprite(11,361,5,5);
daisy.setAnimation("daisy");

var goodDeed = createSprite(206,70,10,10);
goodDeed.setAnimation("deeds");

var goodDeed1 = createSprite(28,92,10,10);
goodDeed1.setAnimation("deeds");

var goodDeed2 = createSprite(315,110,10,10);
goodDeed2.setAnimation("deeds");

var goodDeed3 = createSprite(57,195,10,10);
goodDeed3.setAnimation("deeds");

var goodDeed4 = createSprite(190,161,10,10);
goodDeed4.setAnimation("deeds");

var goodDeed5 = createSprite(361,222,10,10);
goodDeed5.setAnimation("deeds");
  
var goodDeed6 = createSprite(257,252,10,10);
goodDeed6.setAnimation("deeds");

var medal = createSprite(363,46,10,10);
medal.setAnimation("GoodDeedMedal");

var bully1 = createSprite(17,40,10,10);
bully1.setAnimation("bully");

var bully2 = createSprite(14,198,10,10);
bully2.setAnimation("bully");

var step1 = createSprite(132,356,20,100);
step1.setAnimation("step1");

var step2 = createSprite(222,369,20,100);
step2.setAnimation("step1");

var step3 = createSprite(320,352,20,100);
step3.setAnimation("step1");

var step4 = createSprite(390,340,20,100);
step4.setAnimation("step1");

var step5 = createSprite(276,353,20,100);
step5.setAnimation("step1");

var step6 = createSprite(198,369,20,100);
step6.setAnimation("step1");



bully1.velocityX = -2;
bully1.velocityY = 0;

bully2.velocityX = -2;
bully2.velocityY = 0;


function draw(){
background("orange");

createEdgeSprites();

bully1.bounceOff(leftEdge);
bully1.bounceOff(rightEdge);
bully2.bounceOff(leftEdge);
bully2.bounceOff(rightEdge);
daisy.bounce(edges);


if (daisy.isTouching(medal)) {
textSize(20);
text("Congradulations Good Deeds Completed",4,22);
}

if (keyDown(LEFT_ARROW)) {
daisy.x=daisy.x-3;
}
if (keyDown(RIGHT_ARROW)) {
daisy.x=daisy.x+3;
}
if(keyDown(UP_ARROW)){
daisy.y=daisy.y-3;
}
if(keyDown(DOWN_ARROW)){
daisy.y=daisy.y+3;
}
if (daisy.isTouching(goodDeed)) {
playSound("assets/default.mp3", false);
goodDeed.destroy(daisy);
}

if (daisy.isTouching(goodDeed1)) {
playSound("assets/default.mp3", false);
goodDeed1.destroy();

}

if (daisy.isTouching(goodDeed2)) {
playSound("assets/default.mp3", false);
goodDeed2.destroy();

}

if (daisy.isTouching(goodDeed3)) {
playSound("assets/default.mp3", false);
goodDeed3.destroy();

}

if (daisy.isTouching(goodDeed4)) {
playSound("assets/default.mp3", false);
goodDeed4.destroy();
}

if (daisy.isTouching(goodDeed5)) {
playSound("assets/default.mp3", false);
goodDeed5.destroy();

}


if (daisy.isTouching(goodDeed6)){
playSound("assets/default.mp3", false);
goodDeed6.destroy();


}

if (daisy.isTouching(bully1)) {
daisy.x = 11; 
daisy.y = 361;
}
if (daisy.isTouching(bully2)) {
daisy.x=11;
daisy.y=361;
}

drawSprites();
}

  



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
