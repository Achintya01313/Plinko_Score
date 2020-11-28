
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particle, score=0,;

var start = 1;
var end = 0;

function setup() {

  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  world= engine.world;

}

function draw() {

  background(255,255,255);  
    
  if(frameCount%90===0){

    particles.push(newParticle(random(width/2-10, width/2+10),10,10))
  
  }

  if(particle!=null)
  {

    particle.display();

    if(particle.body.position.y > 760)
    {
      if(particle.body.position.x < 300)
      {
        score = score+500;
        particle = null;
        if(count>=5) gameState = "end";
                

      };

  };

    
};


  

  ground= new Ground(200,780,60,10)

  mousePressed();

  drawSprites();

}


function mousePressed(){

  if(gameState!=="end"){

    count++;
    particle = new particle(mouseX, 10, 10, 10)

  }

}




