
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash;
var ground;
var bin1,bin2,bin3;
function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	trash=new Paper();
	ground=new Ground();

	bin1=new Dustbin(800,530,200,20);
	bin2=new Dustbin(710,490,20,60);
	bin3=new Dustbin(890,490,20,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	trash.display();
	ground.display();

	bin1.display();
	bin2.display();
	bin3.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		var option={
			x:55,
			y:-27
		}
		Matter.Body.applyForce(trash.body,trash.body.position,option);
	}
}


