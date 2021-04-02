class rope{
    constructor(bodyA,pointB){
    var Options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        lenght:100
    }
    this.pointB=pointB;
    this.rope=Constraint.create(Options);
    World.add(world,this.rope)

    }
    display(){
    var  pointB=this.pointB;

        push();
        stroke("black")
        strokeWeight(3)
        line(pointB.x,pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y)
        pop();

    }
}