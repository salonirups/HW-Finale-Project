var background1,background_1;
var gun,gu_n;
var bullet,bull_et;

function preload() {
  background_1=loadImage("bg.jpg");
  gu_n=loadImage("gun2.png");
  bull_et=loadImage("bullet2.png");

}

function setup() {
  createCanvas(600, 600);

  background1 = createSprite(0, 150, 1200, 1200);
  background1.addImage(background_1);
  background1.scale = 2;
  

  gun = createSprite(550, 300, 50, 20);
  gun.addImage(gu_n);
  gun.scale = 0.1 
}

function draw() 
{
background("cyan");

  gun.y = mouseY;

  if (keyDown("space")) 
  {
    shootbullet();
  }

  //drawSprites
  drawSprites();
}

//shoot Arrow
function shootbullet() {
  bullet = createSprite(gun.x, gun.y, 50, 20);
  bullet.addImage(bull_et);
  bullet.y = gun.y
  bullet.scale = 0.1;
  bullet.velocityX = -5;
}