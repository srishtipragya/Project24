class Ground{
    constructor(){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(width/2,height-50,width,20,option);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("brown");
        rect(pos.x,pos.y,width,20);
    }
}