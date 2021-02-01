
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
 
  createCanvas(800, 700);
 


	engine = Engine.create();
  world = engine.world;
  
   
   groundSprite=createSprite(400, 680, 800,10);
   groundSprite.shapeColor="Lime"
   ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
   World.add(world, ground);
   dustbin1 = new Dustbin(695,620,15,100)
   dustbin2 = new Dustbin(550,620,15,100)
   dustbin3 = new Dustbin(620,665,150,15)
   paper = new Paper(100,300,10);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{
x:15,
y:-15


} )



}



}

