const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope1;
var fruit;
var fruit_con;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope1 = new Rope(7,{x:250,y:40})
  
  var fruitOptions={
    density:0.001
  }
  fruit= Bodies.circle(300,300,20,fruitOptions)
  Matter.Composite.add(rope1.body,fruit);
  fruit_con=new Link(rope1,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
 
  rope1.show();
  ellipse(fruit.position.x,fruit.position.y,20,20)
  ground.show();

  Engine.update(engine);
  

 
   
}
