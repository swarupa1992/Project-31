class Drops{

    constructor(x,y){

          var options ={

            //friction: 0.001,
            //restitution:0.1 
          }
          //this.width = w;
          //this.height = h;
          this.body = Bodies.circle(x,y,5,options);
          World.add(world,this.body);
    }


    update_pos(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,5,5);
    }

}