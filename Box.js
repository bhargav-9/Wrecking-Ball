class Box{
  constructor(x,y,w,h){
    var Options={
      isStatic:false,
      restitution:0.8,
      friction:1,
      density:0.004
    }
     this.body=Bodies.rectangle(x,y,w,h,Options)
     World.add(world,this.body)
  }
  display(){
    var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle)
    strokeWeight(4);
    stroke(0)
    fill("yellow")
    rectMode(CENTER)
    rect(0,0,50,50);
    pop()
  }
}
    