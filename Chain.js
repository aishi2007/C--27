class Chain{
    constructor(body1,body2){
        var chain_options={
            bodyA:body1,
            bodyB:body2,
            length: 40,
            stiffness: 0.5
        }
        this.chain= Constraint.create(chain_options)
        World.add(world,this.chain)
    }
  display(){
      var Point1= this.chain.bodyA.position
      var Point2= this.chain.bodyB.position
    push();
    strokeWeight(4)
    line(Point1.x, Point1.y,Point2.x,Point2.y)
    pop();
  }

}