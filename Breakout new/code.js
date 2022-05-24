var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3554b163-9197-4ea9-ae42-e4eacf5b7dff"],"propsByKey":{"3554b163-9197-4ea9-ae42-e4eacf5b7dff":{"name":"soccer","sourceUrl":"assets/api/v1/animation-library/gamelab/_voB8z1tybHuDAKJb3XrVhG9nCoFKaj./category_sports/soccer_yellow.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"_voB8z1tybHuDAKJb3XrVhG9nCoFKaj.","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_voB8z1tybHuDAKJb3XrVhG9nCoFKaj./category_sports/soccer_yellow.png"}}};
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

//obstacles row1
var box1 = createSprite(50,45, 100, 30);
box1.shapeColor="red";
var box2 = createSprite(150,45, 100, 30);
box2.shapeColor="blue";
var box3 = createSprite(250,45, 100, 30);
box3.shapeColor="red";
var box4 = createSprite(350,45, 100, 30);
box4.shapeColor="blue";

//obstacles row2
var box5 = createSprite(50,75, 100, 30);
box5.shapeColor="blue";
var box6 = createSprite(150,75, 100, 30);
box6.shapeColor="red";
var box7 = createSprite(250,75, 100, 30);
box7.shapeColor="blue";
var box8 = createSprite(350,75, 100, 30);
box8.shapeColor="red";

//obstacles row3
var box9 = createSprite(50,105, 100,30);
box9.shapeColor="red";
var box10 = createSprite(150,105,100,30);
box10.shapeColor="blue";
var box11 = createSprite(250,105,100,30);
box11.shapeColor="red";
var box12 = createSprite(350,105,100,30);
box12.shapeColor="blue";

//obstacles row4
var box13 = createSprite(50,135,100,30);
box13.shapeColor="blue";
var box14 = createSprite(150,135,100,30);
box14.shapeColor="red";
var box15 = createSprite(250,135,100,30);
box15.shapeColor="blue";
var box16 = createSprite(350,135,100,30);
box16.shapeColor="red";

//creating player
var paddle=createSprite(200,390,100,10);
paddle.shapeColor="green";

//creating environment
var ball=createSprite(200,200,20,20);
ball.shapeColor="magenta";
ball.setAnimation("soccer");
ball.scale=0.07;

//scores
var life=3;
var count = 0;
var state = "start";
function draw() {
background("yellow");

//score on canvas
  fill(0);
  textSize(15);
  text("Lives:"+life,20,20);
  
//bouncing ball from edges 
  createEdgeSprites();
  ball.bounceOff(paddle);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  
  
  if(state=="start"){
  if(keyDown("space")){
  ball.velocityX= -5;
  ball.velocityY= 7;
  state="play";
  } 
  }
  
  if(state=="play"){
  paddle.x=World.mouseX;
  
  
  if(ball.isTouching(box1)){
   ball.bounceOff(box1); 
   box1.destroy();
   count= count+1;
  }
  if(ball.isTouching(box2)){
   ball.bounceOff(box2); 
   box2.destroy();
   count= count+1;
  }
  if(ball.isTouching(box3)){
   ball.bounceOff(box3); 
   box3.destroy();
   count= count+1;
  }
  if(ball.isTouching(box4)){
   ball.bounceOff(box4); 
   box4.destroy();
   count= count+1;
  }
  if(ball.isTouching(box5)){
   ball.bounceOff(box5); 
   box5.destroy();
   count= count+1;
  }
  if(ball.isTouching(box6)){
   ball.bounceOff(box6); 
   box6.destroy();
   count= count+1;
  }
  if(ball.isTouching(box7)){
   ball.bounceOff(box7); 
   box7.destroy();
   count= count+1;
  }
  if(ball.isTouching(box8)){
   ball.bounceOff(box8); 
   box8.destroy();
   count= count+1;
  }
  if(ball.isTouching(box9)){
   ball.bounceOff(box9); 
   box9.destroy();
   count= count+1;
  }
  if(ball.isTouching(box10)){
   ball.bounceOff(box10); 
   box10.destroy();
   count= count+1;
  }
  if(ball.isTouching(box11)){
   ball.bounceOff(box11); 
   box11.destroy();
   count= count+1;
  }
  if(ball.isTouching(box12)){
   ball.bounceOff(box12); 
   box12.destroy();
   count= count+1;
  }
  if(ball.isTouching(box13)){
   ball.bounceOff(box13); 
   box13.destroy();
  }
   if(ball.isTouching(box14)){
   ball.bounceOff(box14); 
   box14.destroy();
   count= count+1;
  }
  if(ball.isTouching(box15)){
   ball.bounceOff(box15); 
   box15.destroy();
   count= count+1;
  }
  if(ball.isTouching(box16)){
   ball.bounceOff(box16); 
   box16.destroy();
   count= count+1;
  }
  
  if(ball.isTouching(bottomEdge)){
    reset();
    life = life-1;
  }
  
  if(count==16){
  state="end";
  } 
  
  if(life==0){
  reset();
  state="end";
  }  
  }
  
  if(state=="end"){
  reset();
  fill(0);
  textSize(20);
  text("GAME OVER",150,180);  
  }
  drawSprites();
  }
  
function reset(){
ball.setVelocity(0,0);
ball.x=200;
ball.y=200; 
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
