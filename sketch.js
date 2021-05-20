var survival=0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(5000,500)
  monkey=createSprite(100,400)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.25
  
  ground=createSprite(600,500,5000,40)
ground.velocityX=-5

 FoodGroup=new Group()
 obstacleGroup=new Group()
}


function draw() {
background("green")
  text("Survival Score = "+survival,500,50)
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(monkey.x<0){
    monkey.x=monkey.width/2
  }
  if(keyDown("space")&&monkey.y<500){
    monkey.velocityY=-10
    
  }
  if(monkey.y<200){
     monkey.velocityY=monkey.velocityY+0.8
      }
  if(monkey.isTouching(ground)){
    monkey.x=100
    monkey.y=400
  }
 
 if(keyDown("a")){
   monkey.velocityX=5
   bananaMaker();
   obstacles();
 }
  
  drawSprites()
}

function bananaMaker(){
  if (frameCount % 80 === 0){
    banana = createSprite(200,165,10,40);
    banana.addImage("bun",bananaImage)
    banana.y=Math.round(random(500,400))
    
    banana.lifetime=100
    banana.scale=0.25
    FoodGroup.add(banana)
   
  }
}

function obstacles(){
  if (frameCount % 20 === 0){
    obstacle=createSprite(20,20)
    obstacle.addImage("ob", obstacleImage)
    obstacle.x=Math.round(random(100,300))
   
    obstacles.lifetime=300
    obstacle.scale=0.25
    obstacleGroup.add(obstacle)
  }
                        
}




