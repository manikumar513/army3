var hero,hero_running,hero_runningb
var box,boximg
var box2

var ground
var enemy,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,fire
var enemyimg,enemy2img,enemy3img,enemy4img,enemy5img,enemy6img,enemy7img,fireimg
var ecamp,ecamp2,ecamp3
var ecampimg,ecamp2img,ecamp3img
var nurses,nursesimg
var health
var stone,stoneimg
var gameState=Play
var Play=1;
var End=0;
var bulletsGroup;
var score=0;
var grass,grassImg,grass2,grass2Img
var tree,treeImg,tree2
var grass3
var jungle,jungleimg
var jungle2
var jungle3
var flame,flameImg
var gameState=Play
var Play=1
var End
var bomb,bombImg
var rib,ribimg
enemys

function preload(){
  //bgImg=loadImage("sachin.png")
  fireimg=loadImage("cook0.png")
  hero_running=loadAnimation("armyimg/army0.png","armyimg/army1.png","armyimg/army2.png","armyimg/army3.png","armyimg/army4.png","armyimg/army5.png")
  ecampimg=loadImage("camp0.png")
  boximg=loadImage("kila.png0.png")
  stoneimg=loadImage("stone0.png")
  //jungleimg=loadImage("jungle.png")
  enemyimg=loadImage("sprite_0.png")
  grassImg=loadImage("sprite_enemy0.png")
  treeImg=loadImage("tree.png")
  hero_runningb=loadImage("backarmy0.png","backarmy1.png","backarmy2.png","backarmy3.png","backarmy4.png","backarmy5.png")
  nursesimg=loadImage("nurse0.png")
  jungleimg=loadImage("jungle870.png")
  flameImg=loadImage("flame0.png")
  bombImg=loadImage("bomb0.png")
  ribimg=loadImage("rib30.png")
  enemys=loadImage("shoot0.png")
  
}


function setup(){
  
  createCanvas(800,400)
 jungle=createSprite(400,200,4000,400)
 jungle.addImage(jungleimg)
 jungle.scale=4
 jungle2=createSprite(2214,200,400,400)
 jungle2.addImage(jungleimg)
 jungle2.scale=4
 jungle3=createSprite(4000,200,200,400)
 jungle3.addImage(jungleimg)
 jungle3.scale=4
 //bomb=createSprite()
 rib=createSprite(3896,360,10,120)
 rib.addImage(ribimg)
 rib.scale=3

  ground=createSprite(300,380,10000,20)
 //bg=createSprite(400,200,800,400)
  ground.shapeColor="black"
  ground.visible=false
  enemy=createSprite(550,330,20,90)
  enemy.shapeColor="red"
  enemy.setCollider("rectangle",0,0,70,120)
  enemy.debug=false
  enemy.addImage(enemyimg)
  enemy.scale=2.2
 // enemy.scale=0.5
  enemy2=createSprite(1365,330,20,90)
  //laser=createSprite(1400,150,10,300)
  //enemy3=createSprite(1818,330,20,90)
  //health=createSprite(1908,330,40,40)
  ecamp2=createSprite(1665,270,300,90)
  ecamp2.addImage(ecampimg)
  box=createSprite(1995,320,40,40)
  box.addImage(boximg)
  stone=createSprite(2700,383,40,40)
  stone.scale=0.9
  stone.addImage(stoneimg)
  box.scale=3.5
  box2=createSprite(1950,280,10,5)
  box2.visible=false
  enemy3=createSprite(2385,330,20,90)
  enemy3.setCollider("rectangle",0,0,70,120)
  enemy3.debug=false
  enemy3.addImage(enemyimg)
  enemy3.scale=2.2
  enemy4=createSprite(3042,330,20,90)
  enemy4.addImage(enemyimg)
  enemy4.scale=2.2
  enemy4.setCollider("rectangle",0,0,70,120)
  enemy4.debug=false
  enemy5=createSprite(3510,330,20,90)
  enemy5.scale=2.2
  enemy5.addImage(enemyimg)
  enemy5.setCollider("rectangle",0,0,70,120)
  enemy5.debug=false
  enemy2.addImage(enemyimg)
  enemy2.setCollider("rectangle",0,0,70,120)
  enemy2.debug=false
  enemy2.scale=2.2
  hero=createSprite(-90,350,40,90)
  flame=createSprite(-90,350,5,5)
  flame.visible=false
  enemy6=createSprite(1962.2,220.45,20,90)
  enemy6.addImage(enemyimg)
  enemy6.scale=2.2
  enemy6.setCollider("rectangle",0,0,70,120)
  enemy6.debug=false

  hero.addAnimation("running",hero_running)
  hero.scale=0.8
  hero.setCollider("rectangle",0,0,430,120)
  hero.debug=false;
  fire=createSprite(1017,300,40,40)
  fire.addImage(fireimg)
  fire.scale=0.9
  ecamp=createSprite(800,270,300,150)
  ecamp.addImage(ecampimg)

  bulletsGroup=new Group
 //jungle=createSprite(400,200,4000,400)
 //jungle.addImage(jungleimg)
score=0;
grass=createSprite(63,350,20,20)
grass.addImage(grassImg)
grass.scale=2
grass2=createSprite(-261,360,20,20)
grass2.addImage(grassImg)
grass2.scale=2
tree=createSprite(360,300,10,120)
tree.addImage(treeImg)
tree.scale=2.5
tree2=createSprite(1512,300,10,120)
tree2.addImage(treeImg)
tree2.scale=2.5
grass3=createSprite(1194,350,10,120)
grass3.addImage(grassImg)
grass3.scale=2
nurses=createSprite(3800,330,10,90)
nurses.addImage(nursesimg)
nurses.scale=1.5
nurses2=createSprite(3906,330,10,90)
nurses2.addImage(nursesimg)
nurses2.scale=1.5

}
function draw (){
  if(gameState===Play){
  background("jungle.png")

  text("score",500,50);
  if(gameState===Play){
    score=score+Math.round(getFrameRate()/60)
  }
  hero.collide(ground)
  //fire.collide(ground)
  hero.collide(box2)
  enemy.collide(box2)
  
 console.log(hero.x)
 //console.log(hero.y)
 if(hero.isTouching(nurses)){
  textSize(30)
  fill("black")
  text("ohh comando shushant tumne meri jaan bachai thanks",3600,240)
  text("ye to mera farj tha ",3490,200)
}
if(hero.isTouching(enemy)){
  enemy.addImage(enemys)
}else{
  enemy.addImage(enemyimg)
}
if(hero.isTouching(enemy2)){
  enemy2.addImage(enemys)
}else{
  enemy2.addImage(enemyimg)
}


if(hero.isTouching(enemy3)){
  enemy3.addImage(enemys)
}else{
  enemy3.addImage(enemyimg)
}

if(hero.isTouching(enemy4)){
  enemy4.addImage(enemys)
}else{
  enemy4.addImage(enemyimg)
}
if(hero.isTouching(enemy5)){
  enemy5.addImage(enemys)
}else{
  enemy5.addImage(enemyimg)
}
if(hero.isTouching(enemy6)){
  enemy6.addImage(enemys)
}else{
  enemy6.addImage(enemyimg)
}



  if(keyDown(RIGHT_ARROW)){
    hero.x=hero.x+20-11
    //hero.shapeColor="red"
    //hero.addAnimation("running",hero_running)
  }else{
    hero.addAnimation("running",hero_running)
}
  if(keyDown(LEFT_ARROW)){
    hero.x=hero.x-9
    hero.addAnimation("runningb",hero_runningb)
   // hero_running=changeAnimation("backarmy0.png","backarmy1.png","backarmy2.png","backarmy3.png","backarmy4.png","backarmy5.png")
    //hero.shapeColor="blue"
  }else{
   // hero_running=loadAnimation("armyimg/army0.png","armyimg/army1.png","armyimg/army2.png","armyimg/army3.png","armyimg/army4.png","armyimg/army5.png")
   //hero.addAnimation("runningb",hero_runningb)
  }
  if(keyDown("space")&&hero.y>120){
   hero.y=hero.y- 34    
}
  fire.depth=ecamp.depth+2
  ecamp.depth=hero.depth-3
  //hero.depth=jungle3.depth+3
  //score.y=hero.y+300
  score.x=hero.x
  hero.velocityY=hero.velocityY+0.9
  camera.x=hero.x
 // console.log(hero.x)
  //hero.depth=jungle.depth+4
  if(keyDown(DOWN_ARROW)){
    hero.scale=0.2
  }else{
    hero.scale=0.8
  }
  
  bullets()
   drawSprites()
  
}

}
function bullets(){
if(keyDown(UP_ARROW)){
  var bullets=createSprite(30,360,6,3)
  bullets.velocityX=20+5
  bullets.shapeColor="yellow"
  
  //bullets.playSound("we_ak47s_lb_04_hpx.mp3")
  bullets.x=hero.x+200
  bullets.y=hero.y-18
  bullets.lifetime=100
  flame.addImage(flameImg)
  flame.visible=true
  flame.x=hero.x+60
  flame.y=hero.y-10
  bullets.depth=enemy.depthi
  if(hero.isTouching(enemy)){
    
    bullets.destroy()
    enemy.destroy()
   // hero.loadImage("shoot0.png")
   
  }
  if(hero.isTouching(enemy2)){
    bullets.destroy()
    enemy2.destroy()
   
  }
  if(hero.isTouching(enemy3)){
    bullets.destroy()
    enemy3.destroy()
   
  }
  if(hero.isTouching(enemy4)){
    bullets.destroy()
    enemy4.destroy()
   
  }
  if(hero.isTouching(enemy5)){
    bullets.destroy()
    enemy5.destroy()
   
  }
  if(hero.isTouching(enemy6)){
    bullets.destroy()
    enemy6.destroy()
   
  }
  

  bulletsGroup.add(bullets)
  bullets.setCollider("rectangle",0,0,10,10)
}
}

  
   
    

