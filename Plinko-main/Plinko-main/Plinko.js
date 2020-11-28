class Plinko{

    constructor(x,y,radius){

        var options={

            isStatic: true

        };
 
        this.r=r;

    this.body=Bodies.circle(x,y,radius,options);
    this.color=color(random(0, 255), random(0, 255), random(0, 255));
    World.add(world,this.body);

    };

    display(){

        var pos= this.body.position;
        var angle= this.body.angle

        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r, this.r);
        pop();

    }

}