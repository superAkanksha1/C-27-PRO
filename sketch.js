
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;

var rope1, rope, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200,500,100);
	bob2 = new Bob(300,500,100);
	bob3 = new Bob(400,500,100);
	bob4 = new Bob(500,500,100);
	bob5 = new Bob(600,500,100);


	roof = new Roof(width/2,100,700,20);

	
	rope1 = new Chain(bob1.body, roof.body, -200, 0);
	rope2 = new Chain(bob2.body, roof.body, -100, 0);
	rope3 = new Chain(bob3.body, roof.body, 0, 0);
	rope4 = new Chain(bob4.body, roof.body, 100, 0);
	rope5 = new Chain(bob5.body, roof.body, 200, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  drawSprites();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  if(keyCode === UP_ARROW){

	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:5,y:-10});

}

}



