var ball;
var vx = 2;

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
  ball.shapeColor = "teal";
  
//  console.log(ball);
}

function draw() 
{
  background("orange");
  if(ball.position.x<=0 || ball.position.x>=width)
  {
    //make the velocity negative to change the direction
    vx= -vx;
  }

  //set the x velocity to vx
  ball.velocity.x = vx;


  drawSprites();

}

