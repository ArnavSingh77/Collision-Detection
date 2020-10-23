var movRect, fixRect;

function setup() {

  createCanvas(800,400);
  movRect = createSprite(600, 200, 50, 50);

  fixRect = createSprite(400, 200, 50, 50);

  movRect.shapeColor = "green";
  fixRect.shapeColor = "green";

}

function draw() {

  background("lightgreen");  

  movRect.x = mouseX;
  movRect.y = mouseY;

  if (movRect.x - fixRect.x <= movRect.width/2 + fixRect.width/2 && fixRect.x - movRect.x <= movRect.width/2+ fixRect.width/2 &&
       movRect.y - fixRect.y <= movRect.height/2 + fixRect.height/2 && fixRect.y - movRect.y <= movRect.height/2+ fixRect.height/2) {

        movRect.shapeColor = "red";
        fixRect.shapeColor = "red";

  } else {

    movRect.shapeColor = "green";
    fixRect.shapeColor = "green";

  }



  drawSprites();
}