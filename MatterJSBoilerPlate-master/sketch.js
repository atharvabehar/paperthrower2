
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,rect1,rect2,rect3,ground;
var paper,dustbin;


function preload()
{
	
	dustbin = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    rect1 = new Ground(525,620,10,75);
	
	
	rect2 = new Ground(675,620,10,75);
	//rect2.shapeColor = "red";

	rect3 = new Ground(600,height-40,175,10);
	//rect3.shapeColor = "red";

	Engine.run(engine);

	 ball = new PaperBall(200,660,20);
    ground = new Ground(400,670,800,10)
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
  image(dustbin,600,620,175,75)
  ball.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
}
function keyPressed(){
	if (keyCode == UP_ARROW)
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}


*/