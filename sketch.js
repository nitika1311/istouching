// COLLISION ALGORITHM
var fixedrect, movingrect
var r1

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200, 200, 50, 50);
  r1=createSprite(600, 200, 50, 50);

  fixedrect.shapeColor=" green"
  movingrect.shapeColor=" green"
  r1.shapeColor=" green"

  fixedrect.debug= true
  movingrect.debug=true
  r1.debug=true
}

function draw() {
  background("orange");  
  movingrect.x= mouseX
  movingrect.y= mouseY

  if(isTouching(movingrect,r1))
  {
    r1.shapeColor=" purple"
    movingrect.shapeColor=" purple"
  }
  else
  {
    r1.shapeColor=" green"
    movingrect.shapeColor=" green"
  }
  drawSprites();
}

function isTouching(object1,object2)
{
  
  if(object1.x-object2.x < object1.width/2+ object2.width/2&&
    object2.x-object1.x <object1.width/2+ object2.width/2 &&
    object1.y-object2.y < object1.height/2+ object2.height/2&&
    object2.y-object1.y < object1.height/2+ object2.height/2 )
    {
      return true
    }
  
  else
  {
      return false
  }
  
}