var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground, rect;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	groundIMG=loadImage("grass.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(370, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.1;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.17;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.addImage(groundIMG);
	groundSprite.scale=1.5;

	engine = Engine.create();
	world = engine.world;
	 
	rect1 = new Box(400,580,200,20);
	rect2 = new Box(310,540,20,100);
	rect3 = new Box(490,540,20,100);

	packageBody = Bodies.circle(420 , 200 , 5 , {restitution:0.0, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();
 keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(packageBody,false)
 }
}