class SlingShot{


    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1 = loadImage("sprites/sling1.png");

        this.sling2 = loadImage("sprites/sling2.png");

        this.sling3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,70,38,150);
        image(this.sling2,175,75,38,83);
        
        console.log(this.sling2.height)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            if(pointA.x<200){
                image(this.sling3,pointA.x-27,pointA.y-10,15,30);
                strokeWeight(7);
                stroke(50,25,10);
                
                line(pointA.x-25, pointA.y, pointB.x, pointB.y);
                line(pointA.x-25,pointA.y,pointB.x+40,pointB.y-5);
            }else{
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x, pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+40,pointB.y-5);
            }
            
        }
        
    }
    
}