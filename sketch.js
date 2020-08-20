var monkey, monkeyImg;
var bananaGrp, bananaImg;
var invGround;
var bg, bgImg;
var stonesGrp, stoneImg;
var score;

function preload(){
  
  monkeyImg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_10.png");

  
  bananaImg = loadImage("Banana.png");
  
  stoneImg = loadImage("Stone.png");
  
  bgImg = loadImage("Jungle4.jpg");
  
  
}


function setup() {
  
  createCanvas(600,300);
  
  bg = createSprite(300, 150, 10, 10);
  bg.addImage(bgImg);

  
  monkey = createSprite(50, 240, 20, 20);
  monkey.addAnimation("run",monkeyImg);
  monkey.scale = 0.17;
  
  score = 0;
  
  bananaGrp = createGroup();
  
  stoneaGrp = createGroup();
  
  invGround = createSprite(300, 257, 600, 2);
  
  stonesGrp = createGroup();
  
  bananaGrp = createGroup();
 
}


function draw(){
 background(255);
  
  invGround.visible = false;
  
  monkey.collide(invGround);
  
  bg.velocityX = -3;
  
  if(monkey.isTouching(stonesGrp)){
    stonesGrp.destroyEach();
    monkey.scale = 0.17;
     }
  
  if(monkey.isTouching(bananaGrp)){
    bananaGrp.destroyEach();
    score = score + 2;
  }
  
  if(bg.x < 110){
    
    bg.x = bg.width/2;
  } 
  
  if(keyDown("space") && monkey.y >= 206){
    monkey.velocityY = -18;
  } 
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  switch(score){
      
    case 10: monkey.scale = 0.27;
      break;
      
    case 20: monkey.scale = 0.37;
      break;
      
    case 30: monkey.scale = 0.47;
      break;
      
    case 40: monkey.scale = 0.57;
      break;
      
    case 50: monkey.scale = 0.67;
      break;
      
    default: break;
      
  }
    
drawSprites();
  
  spawnObstacles();
  spawnBananas();
  
  
  stroke("white");
  textSize(25);
  fill("white");
  text("YOUR SCORE!!!!! : " + score, 200, 40);
}

function spawnObstacles(){
  var rand = Math.round(random(100, 250));
  if(frameCount % rand === 0){
     var obstacle = createSprite(620, 225, 10, 10);
     obstacle.velocityX = -18;
     obstacle.scale = 0.7;
     obstacle.addImage("stone", stoneImg);
     obstacle.velocityX = -4;
     obstacle.lifetime = 600/18;
     stonesGrp.add(obstacle);
  }
  
}

function spawnBananas(){
  
  if(frameCount % 30 === 0){
      var r = random(10, 90);
      var banana = createSprite(620, r, 10, 10);
      banana.scale = 0.49;
      banana.addImage("abcdefg", bananaImg);
      banana.velocityX = -10;
      banana.lifetime = 600/10;
    
      bananaGrp.add(banana);
    
   }
}