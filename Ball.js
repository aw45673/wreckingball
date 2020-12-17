class Ball{
    constructor(x,y,r){
       var options={
            restitution: 0.3,
            friction: 0.8,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r = r
        World.add(world,this.body)
    }
    display(){
        var angle= this.body.angle
        var pos= this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        fill("yellow")
        ellipse(0,0,this.r,this.r)
    }

}