class Paper{
    constructor(){
        var option={
            restituion:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(100,200,15,option);
        World.add(world,this.body);
    }
    display(){
        fill("purple");
        circle(this.body.position.x,this.body.position.y,30);
    }
}