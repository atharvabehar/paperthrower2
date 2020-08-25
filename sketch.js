
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,rect1,rect2,rect3,ground;
var paper,dustbin;


function preload()
{
	paper = loadImage("paper.png")
	dustbin = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 	//ball.scale(0.5)
    rect1 = new Ground(525,620,10,75,"grey");
	
	
	rect2 = new Ground(675,620,10,75,"grey");
	//rect2.shapeColor = "red";

	rect3 = new Ground(600,height-40,175,10,"grey");
	//rect3.shapeColor = "red";

	Engine.run(engine);

	 ball = new PaperBall(200,660);
	ground = new Ground(400,670,800,10,"red")
//	ground.shapeColor = "red"
}


function draw() {
  
  background("grey");
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
 // dustbin.display();
  imageMode(CENTER);
 image(dustbin,600,620,175,75)
  ball.display();
 
}
function keyPressed(){
	if (keyCode == UP_ARROW)
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}


