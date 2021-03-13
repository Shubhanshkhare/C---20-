var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect.velocityX = 6 ;
  movingRect.velocityX = -6 ;
}

function draw() {
  background(255,255,255);  
 // movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
  && fixedRect.x-movingRect.x<(movingRect.width+fixedRect.width)/2
  &&movingRect.y-fixedRect.x<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.x<(movingRect.height+fixedRect.height)/2 ) 

  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
  drawSprites();
  if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x<(movingRect.width+fixedRect.width)/2){
     fixedRect.velocityX=fixedRect.velocityX*(-1) 
     movingRect.velocityX=fixedRect.velocityX*(-1)
    }
    if (movingRect.y-fixedRect.x<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.x<(movingRect.height+fixedRect.height)/2 ) {
      fixedRect.velocityY=fixedRect.velocityY*(-1) 
     movingRect.velocityY=fixedRect.velocityY*(-1)
    }
}
