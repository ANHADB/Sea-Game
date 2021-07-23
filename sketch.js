var ship, ship_moving, sea;
var seaImage;
function preload() {
  ship_moving = loadAnimation("ship1.png", "ship2.png");
  seaImage = loadImage("sea.png");
}

function setup() {
  createCanvas(600, 600);

  sea = createSprite(200, 180, 200, 400);
  sea.addImage(seaImage);
  sea.scale = 0.4;
  ship = createSprite(160, 200, 400, 20);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
  sea.velocityX = -3;

  if (sea.x <0) {
    sea.x = sea.width / 5;
  }
  drawSprites();
}
