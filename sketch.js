var fixedRect, movingRect;
var obg1, obg2, obg3, obg4;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  obg1 = createSprite(100, 100, 50, 10);
  obg1.velocityX = 3;
  obg1.shapeColor = "white";
  obg2 = createSprite(200, 200, 50, 10);
  obg3 = createSprite(300, 500, 50, 10);
  obg4 = createSprite(400, 100, 50, 10);
  obg4.shapeColor = "grey";
  obg4.velocityX = -4;

}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(obg1, obg4);
  if (isTouching(movingRect, obg1) || isTouching(movingRect, obg2) || isTouching(movingRect, obg3) || isTouching(movingRect, obg4) || isTouching(movingRect, fixedRect)) {
    textSize(20);
    fill("white");
    text("Objects are touching.", 700, 100);
  }

  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}