var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["47e7b3ba-058b-4bda-bc03-fc7d1241b2e6","58255824-8661-4fa0-bedd-14a13e8a9fc5"],"propsByKey":{"47e7b3ba-058b-4bda-bc03-fc7d1241b2e6":{"name":"diamante","sourceUrl":null,"frameSize":{"x":391,"y":358},"frameCount":1,"looping":true,"frameDelay":12,"version":"zkwVF.UDDG3pATTVXi1XwyDXmLpRZVPA","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":358},"rootRelativePath":"assets/47e7b3ba-058b-4bda-bc03-fc7d1241b2e6.png"},"58255824-8661-4fa0-bedd-14a13e8a9fc5":{"name":"play_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.uhRrRsrbkYr5RW1NETgh8NrYZNQkRmB/category_icons/play.png","frameSize":{"x":384,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":".uhRrRsrbkYr5RW1NETgh8NrYZNQkRmB","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.uhRrRsrbkYr5RW1NETgh8NrYZNQkRmB/category_icons/play.png"}}};
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

var ladrão = createSprite(25,375,15,15);
ladrão.shapeColor = "yellow";
var laser = createSprite(300,350,200,5);
laser.shapeColor = "red";
laser.velocityY = 2;
var laser1 = createSprite(100,5,200,5);
laser1.shapeColor = "red";
laser1.velocityY = 2;
var joia = createSprite(375,25,20,20);
joia.scale = "0.1";
joia.setAnimation("diamante");
var gameState = "play";

function draw() {
background("grey");
createEdgeSprites();


if(gameState == "play"){
  
  joia.visible = true;
  ladrão.visible = true;
  
  if(laser.isTouching(ladrão)||laser1.isTouching(ladrão)){
    gameState = "loser"; 

}

if(ladrão.isTouching(joia)){
    gameState = "victory";
}
}

if(gameState == "loser"){
  
  stroke("red");
  fill("black");
  textSize(24);
  text("Ladrão capturado", 120,200);
  laser.setVelocity(0,0);
  laser1.setVelocity(0,0);
  ladrão.visible = false;
  joia.visible = true;
  
  
}

if(gameState == "victory"){
  
    if (World.frameCount%10 >4){
  background(rgb(255,99,71));
}else{
  background("yellow");
}
  
  stroke("#63C5DA");
  fill("white");
  textSize(24);
  text("DIAMANTE CAPTURADO", 80,200);
  laser.setVelocity(0,0);
  laser1.setVelocity(0,0);
  ladrão.visible = false;
  joia.visible = false;
  
}


if (keyDown(RIGHT_ARROW)){
  ladrão.velocityX = 2;
  ladrão.velocityY = 0;
}

if (keyDown(LEFT_ARROW)){
  ladrão.velocityX = -2;
  ladrão.velocityY = 0;
}

if (keyDown(UP_ARROW)){
  ladrão.velocityX = 0;
  ladrão.velocityY = -2;
}

if (keyDown(DOWN_ARROW)){
  ladrão.velocityX = 0;
  ladrão.velocityY = 2;
}

ladrão.bounceOff(edges);
laser.bounceOff(edges);
laser1.bounceOff(edges);


drawSprites()
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
