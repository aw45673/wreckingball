const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;

function setup() {
  createCanvas(900,700);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(450,660,900,20);
  
  //level one
  block1 = new Block(650,600);
  block2 = new Block(650,500);
  block3 = new Block(650,400);
  block4 = new Block(650,300);
  block5 = new Block(650,200);
  //level two
  block8 = new Block(750,600);
  block9 = new Block(750,500);
  block10 = new Block(750,400);
  block11 = new Block(750,300);
  block12 = new Block(750,200);
  

  //ball holder with slings
  ball = new Ball(300,350,60);

  slingShot = new Slingshot(ball.body,{x:300,y:50});
  Engine.run(engine);
}
function draw() {
  background(200); 

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  ball.display();
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
