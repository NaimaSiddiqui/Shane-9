var box;

function setup() {
  createCanvas(400,400);
  box= createSprite(200,200,30,30)
  box.shapeColor="cyan"
}




function draw(){
  background("black")



  if(keyIsDown(RIGHT_ARROW)){
    box.x += 5
  }

  if(keyIsDown(LEFT_ARROW)){
    box.x -= 5
  }

  if(keyIsDown(UP_ARROW)){
    box.y -= 5
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y += 5
  }


  
   drawSprites()
}
