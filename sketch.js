var tower, towerImg;
var ghost, ghostImg;
var door, doorImg;
var climber, climberImg;
var climberG, doorG;
var invisibleBlock, invisibleG;

var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
  ghostImg = loadImage("ghost-standing.png");
  towerImg = loadImage("tower.png");
  climberImg = loadImage("climber.png");
  doorImg = loadImage("door.png");
}

function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY = 4;
  
  ghost = createSprite(300,250);
  ghost.addImage(ghostImg);
  ghost.scale = 0.3;
  
  climberG = new Group();
  doorG = new Group();
  invisibleG = new Group();
}

function draw(){
  background("black");
 if(gameState === PLAY){ 
  if(tower.y>600){
    tower.y = height/2;
  }
  if(keyDown(RIGHT_ARROW)){
    ghost.x = ghost.x+2;
  }
  if(keyDown(LEFT_ARROW)){
    ghost.x = ghost.x-2;
  }
  if(keyDown("space")){
    ghost.velocityY = -10;
  }
  ghost.velocityY = ghost.velocityY + 0.8;
   if(ghost.y>600){
     gameState = END;
   }
  drawSprites();
 }
  else if(gameState === END){
    textSize(30);
    text("Game Over", 230, 250);
  }
}