var car,wall;
var speed,weight,deformation;
function setup() 
{
  createCanvas(1600,400);

  car = createSprite(100, 380, 50, 20);
  car.shapeColor = "blue"
  wall = createSprite(1550, 200, 100, 800)
  wall.shapeColor = "cyan"

  speed = random(55,70);
  weight = random(400,1500);

  car.velocityX = speed;
}

function draw()
 {
  background(255,255,255);  
  drawSprites();

  deformation = (0.5 * weight * speed * speed)/22500

  if((car.x - wall.x <= car.width/2 + wall.width/2) &&
    (wall.x - car.x <= car.width/2 + wall.width/2) &&
    (car.y - wall.y <= car.height/2 + wall.height/2) &&
    (wall.y - car.y <= car.height/2 + wall.height/2))
  {
    car.velocityX = 0;
    if(deformation < 80)
    {
      car.shapeColor = "lime"
    }
    else if(deformation < 180)
    {
      car.shapeColor = "yellow"
    }
    else
    {
      car.shapeColor = "red"
    }
  }
}