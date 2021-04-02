class ball{
    constructor(x,y,r){
    var Options={
      isStatic:false,
        restitution:0.4,
      frictionAir:0.005,
      density:2
    }
     this.body=Bodies.circle(x,y,r,Options)
     World.add(world,this.body)

}

display(){
var angle=this.body.angle;
    push()
 translate(this.body.position.x,this.body.position.y)
 rotate(angle);
 ellipseMode(RADIUS)
 ellipse(0,0,50,50)
 pop()
}
}