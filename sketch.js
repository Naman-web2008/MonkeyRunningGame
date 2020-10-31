
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var backgroundImage;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImage = loadImage("OIP (1).jpg");
 
}



function setup() {
  createCanvas(600, 400);
  
  monkey=createSprite(80,345,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,385,9000000000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  invisibleGround = createSprite(300,383,11100,10);
    invisibleGround.visible = false;
  
}


function draw() {
  background("lightblue");
  
  monkey.collide(invisibleGround);
  
  if(keyDown("space") && monkey.y >= 100) {
        monkey.velocityY = -12;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8;

  
    Food();
  Hard();
  Time();
  
  drawSprites();
}

function Food(){
   
    if (frameCount % 60 === 0) {
    banana = createSprite(570,200,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 170;
    }
  
}

function Hard(){
  
   if (frameCount % 60 === 0) {
    obstacle = createSprite(580,360,40,10);
    obstacle.x = Math.round(random(100,400));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 100;
  
    }

  }

function Time(){
  //survivalTime=createSprite(200,200,10,10);
 /* stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);*/
  
   if(survivalTime>0 && survivalTime%100 === 0){
        survivalTime=survivalTime+1;
      }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate);
  text("Survival Time:"+survivalTime,100,50); 
  
}