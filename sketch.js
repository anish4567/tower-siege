const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world

function setup() {
  createCanvas(800,400);
engine=Engine.create()
world=engine.world
ground=new Ground(400,380,800,20)
stand= new Ground(400,250,150,10)
box1=new Box(400,200,20,20)
box2=new Box(380,200,20,20)
box3=new Box(360,200,20,20)
box4=new Box(420,200,20,20)
box5=new Box(440,200,20,20)
box6=new Box(380,180,20,20)
box7=new Box(400,180,20,20)
box8=new Box(420,180,20,20)
box9=new Box(400,160,20,20)
box10=new Box(700,180,20,20)
box11=new Box(680,180,20,20)
box12=new Box(720,180,20,20)
box13=new Box(700,160,20,20)
stand2 = new Ground(650,200,300,10)
ball=Bodies.circle(150,200,15)
World.add(world,ball)
slingshot=new Slingshot(this.ball,{x:100,y:150})
}

function draw() {
  background(255,255,255);  
  drawSprites();
Engine.update(engine);
ground.display()
box1.display()
stand.display()
stand2.display()
box2.display()
box3.display()
box4.display()
box6.display()
box5.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
slingshot.display()
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,15,15)

}
function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingshot.fly();

}

