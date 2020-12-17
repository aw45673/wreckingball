class Block{
    constructor(x, y) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, 100,100, options);
        this.width = 100;
        this.height = 100;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke(0)
        strokeWeight(3)
        fill("blue");
        rect(0,0,this.width, this.height);
        pop();
      }
}