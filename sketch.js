
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}
function setup() {
	
	createCanvas(800,700);
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1 =new Box1(500,550,10,3);
box2 = new Box2(200,550,10,3);
box3 = new Box3(350,655,20,200);
ground=Bodies.rectangle(200,690,1200,20);
circle1=new Circle(30,380, 20)

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);
  fill("orange");
rect(ground.position.x,ground.position.y,1200,30);

     

box1.display();
box2.display();
box3.display();
circle1.display();


}
 
function keyPresssed(){
	if(keyCode===UP_Arrow){
		Matter.Body.applyForce(circle1.body.position.x,circle1.body.position.y,{x:85,y:-85});
	}
}


