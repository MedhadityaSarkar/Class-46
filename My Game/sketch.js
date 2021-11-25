var ground, groundImg;
var player,playerImg;
var zombie, zombieImg, zombieGroup;

function preload() {
groundImg = loadImage("Images/ground.JPG");
playerImg = loadAnimation("Player/sprite_00.png","Player/sprite_01.png",
"Player/sprite_02.png","Player/sprite_03.png","Player/sprite_04.png",
"Player/sprite_05.png","Player/sprite_06.png","Player/sprite_07.png","Player/sprite_08.png",
"Player/sprite_09.png","Player/sprite_10.png","Player/sprite_11.png","Player/sprite_12.png",
"Player/sprite_13.png","Player/sprite_14.png","Player/sprite_15.png","Player/sprite_16.png", );
zombieImg = loadAnimation("zombie/0.png","zombie/1.png","zombie/2.png",
"zombie/3.png","zombie/4.png","zombie/5.png","zombie/6.png",
"zombie/7.png","zombie/8.png","zombie/9.png","zombie/10.png",
"zombie/11.png","zombie/12.png","zombie/13.png","zombie/14.png",
"zombie/15.png","zombie/16.png","zombie/17.png","zombie/18.png")

}

function setup() {
  createCanvas(780,400);
  
ground = createSprite(400, 200, 50, 50);
ground.addImage(groundImg)
ground.velocityX = -8;
ground.scale = 1;


player = createSprite(200,280,50,50);
player.addAnimation("running",playerImg);
player.scale = 0.5;

zombieGroup = new Group();

}

function draw() {
  background(0);  

  if(ground.x<300){
    ground.x = 400;

  }
  spawnZombies();

  drawSprites();
}

function spawnZombies(){
  if(frameCount%200===0){
    zombie = createSprite(800,290,50,50);
    zombie.addAnimation("playing",zombieImg);
    zombie.velocityX = -6;
    zombie.lifetime = 800;
    zombieGroup.add(zombie);
    zombie.scale = 0.5;

  }

}
