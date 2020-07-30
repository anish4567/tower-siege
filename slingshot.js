class Slingshot{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA, pointB:pointB, 
        stiffness:0.04,length:1
    }
    this.sling=Matter.Constraint.create(options)
    World.add(world,this.sling)


}fly(){
this.sling.bodyA=null;



}
display(){
    if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position
        var pointB=this.sling.pointB
        
        
        
            line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
}