const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygonImg;
var score = 0;
function preload() {
  polygonImg = loadImage("Images/polygon.png");
}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground(390, 300, 250, 10);


  block1 = new Block(340, 275, 25, 25);
  block2 = new Block(365, 235, 25, 25);
  block3 = new Block(390, 195, 25, 25);
  block4 = new Block(340, 275, 25, 25);
  block5 = new Block(365, 235, 25, 25);
  block6 = new Block(390, 195, 25, 25);
  block7 = new Block(340, 275, 25, 25);
  block8 = new Block(365, 235, 25, 25);
  block9 = new Block(390, 195, 25, 25);
 

  //ball holder with slings
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingShot = new SlingShot(this.ball, { x: 100, y: 200 });
}
function draw() {
  background(153, 217, 234);

  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  ground.display();
  strokeWeight(2);
  stroke(15);
  slingShot.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  imageMode(CENTER);
  image(polygonImg, ball.position.x, ball.position.y, 40, 40);
}
function mouseDragged() {
  Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.ball);
  }
}