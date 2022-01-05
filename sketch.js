var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ballOptions = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

    ball = Bodies.circle(260,100,20,ballOptions)
	World.add(world, ball)

	groundObject = new ground(width/2, 670, width, 20)
	leftObject = new ground(1100, 600, 20, 120)
	rightObject = new ground(1350, 600, 20, 120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 20, 20)
  groundObject.display()
  leftObject.display()
  rightObject.display()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:85, y:-85})
	}
}


