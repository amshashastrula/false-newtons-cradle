
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Ball(100, 200, 20);
	bobObject2 = new Ball(140, 200, 20)
	bobObject3 = new Ball(180, 200, 20)
	bobObject4 = new Ball(220, 200, 20)
	bobObject5 = new Ball(260, 200, 20)

	
	roof = new Roof(400, 100, 200, 20);

	bobDiameter1 = 5;
	bobDiameter2 = 10;
	bobDiameter3 = 15;
	bobDiameter4 = 20;
	bobDiameter5 = 25;

	rope1 = new Rope(bobObject1.body, roof.body,-bobDiameter1*5, 0);
	rope2 = new Rope(bobObject2.body, roof.body,-bobDiameter2*5, 0);
	rope3 = new Rope(bobObject3.body, roof.body,-bobDiameter3*5, 0);
	rope4 = new Rope(bobObject4.body, roof.body,-bobDiameter4*5, 0);
	rope5 = new Rope(bobObject5.body, roof.body,-bobDiameter5*5, 0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //drawSprites();
 
}
function upArrow(){
	function keyPressed(){
		if(keyCode === UP_ARROW){
			Matter.Body.applyForce(rope5.body, rope5.body.position, {x: 100, y: 150});
		}
	}
}


