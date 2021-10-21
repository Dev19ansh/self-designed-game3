var king,guard;
var game;
var coinsGrp;
var score=0;
var ground;
var gameState=0;
function setup() {
 createCanvas(4*displayWidth,displayHeight);
 game = new Game();
 king = new Player();

 ground = createSprite(displayWidth*2,displayHeight-50,displayWidth*10,20);
 
 guard = new Guards();

 coinsGrp = new Group(); 

 

}

function draw() {
  background("lightblue");
  if(gameState===1){
    game.play();
  }
  if(gameState===0){
    game.start();
  } 

  drawSprites();

  textSize(60);
  textFont("Impact");
  fill("yellow"); 
  stroke("red");
  strokeWeight(5);
  text("Score: " + score,camera.position.x,250);

}

function removeCoin(sprite,coins){
  coins.remove();
}