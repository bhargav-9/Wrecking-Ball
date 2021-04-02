const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(2000,800)
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,790,2000,20);
    box1=new Box(900,100,70,70)
    box2=new Box(900,100,70,70)
    box3=new Box(900,100,70,70)
    box4=new Box(900,100,70,70)
    box5=new Box(900,100,70,70)
    box6=new Box(900,100,70,70)
    box7=new Box(900,100,70,70)
    box8=new Box(900,100,70,70)
    box9=new Box(900,100,70,70)

   
    box11=new Box(1000,100,70,70)
    box12=new Box(1000,100,70,70)
   box13=new Box(1000,100,70,70)
   box14=new Box(1000,100,70,70)
   box15=new Box(1000,100,70,70)
   box16=new Box(1000,100,70,70)
   box17=new Box(1000,100,70,70)

   box21=new Box(1100,100,70,70)
    box22=new Box(1100,100,70,70)
   box23=new Box(1100,100,70,70)
   box24=new Box(1100,100,70,70)
   box25=new Box(1100,100,70,70)

   Ball=new ball(800,500,50,50)

   Rope=new rope(Ball.body,{x:600,y:50});
  





    
}

function draw(){
    background("white");
    
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();

    box3.display();

    box4.display();
    box5.display();
    
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    Ball.display();
    Rope.display()
   // applyforce()
    //strokeWeight(4);

      
}


function applyforce(){
    
    Matter.Body.applyForce(Ball.body,{x:800,y:600},5);
    
}
function mouseDragged(){

    Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY})
}