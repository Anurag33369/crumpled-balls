var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	var opt = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
ball = Bodies.circle(300,100,10,opt)
World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
ellipse(ball.position.x,ball.position.y,10)
}
function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:60,y:-15}) 
	}
}
