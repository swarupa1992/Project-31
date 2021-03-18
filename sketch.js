const Engine = Matter.Engine;
const World = Matter.World;
const  Bodies = Matter.Bodies;

var engine,world;
var drops = [];
var rain_drops;

function preload(){

    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    boy = loadImage("WalkingFrame/walking_2.png");
    
}

function setup(){

    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
  
   for(var i =0;i<=100;i++){
       rain_drops = new Drops(random(0,400),random(0,400));
      //drops.push(new Drops(random(0,400),random(0,400)));
      drops.push(rain_drops);
   }

   
    
}

function draw(){

    background(0);
    Engine.update(engine);

    for(var i = 0;i<100;i++){

        drops[i].display();
        drops[i].update_pos();
    }


    var r = Math.round(random(1,4));
    for(var i =0;i<random(1,3);i++){
    if(frameCount%30 === 0){

        switch(r){

            case 1:  image(thunder1,random(10,370),random(10,30),150,380);
                     break;
            case 2:  image(thunder2,random(10,370),random(10,30),220,80);
                     break;
            case 3:  image(thunder3,random(10,370),random(10,30),250,350);
                     break;
            case 4:  image(thunder4,random(10,370),random(10,30),100,250);
                     break;
        }

    }
}
drawSprites();
    
imageMode(CENTER);
image(boy,150,560,300,300);

    
}   
