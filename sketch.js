let c = [];
let speed = 0.2;
let animX = 0;
let fillr = [0, 255, 0, 50, 255];
let fillg = [255, 0, 0, 50, 100];
let fillb = [0, 0, 255, 50, 0];
let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  fill(fillr[count], fillg[count], fillb[count]);
  noStroke();

  //Mouse interactives
  const transX1 = mouseX * 0.06 - 35;
  const transX2 = mouseX * 0.015 - 10;
  const transY1 = mouseY * 0.07 - 35;
  const transY2 = mouseY * 0.01 - 10;

  //Character (c)
  //Head
  c[0] = ellipse(
    width / 2 + transX1,
    height / 2 - 210 + transY1,
    180,
    200 - mouseY * 0.05
  );

  //Chest
  c[1] = circle(width / 2 + transX2, height / 2 - 80 + transY2, 130);

  //Torso
  c[2] = circle(width / 2 + transX2, height / 2 + 10 + transY2, 130);

  //Hip
  c[3] = circle(width / 2 + animX, height / 2 + 90 + transY2, 140);
  //Hip animate
  animX += speed;
  if (animX < -5.3) {
    speed *= -1;
  } else if (animX > 5.3) {
    speed *= -1;
  }

  //Left Arm
  c[4] = circle(width / 2 + transX2 - 75, height / 2 - 80 + transY2, 80);
  c[5] = circle(width / 2 + transX2 - 130, height / 2 - 50 + transY2, 70);
  c[6] = circle(width / 2 + transX2 - 160, height / 2 - 5 + transY2, 70);
  c[7] = circle(width / 2 + transX2 - 190, height / 2 + 40 + transY2, 60);

  //Right Arm
  c[8] = circle(width / 2 + transX2 + 75, height / 2 - 80 + transY2, 80);
  c[9] = circle(width / 2 + transX2 + 130, height / 2 - 50 + transY2, 70);
  c[10] = circle(width / 2 + transX2 + 160, height / 2 - 5 + transY2, 70);
  c[11] = circle(width / 2 + transX2 + 190, height / 2 + 40 + transY2, 60);

  //Left Leg
  c[12] = circle(width / 2 + transX2 - 50, height / 2 + 140, 80);
  c[13] = circle(width / 2 + transX2 - 60, height / 2 + 195, 80);
  c[14] = circle(width / 2 + transX2 - 70, height / 2 + 250, 80);

  //Right Leg
  c[15] = circle(width / 2 + transX2 + 50, height / 2 + 140, 80);
  c[16] = circle(width / 2 + transX2 + 60, height / 2 + 195, 80);
  c[17] = circle(width / 2 + transX2 + 70, height / 2 + 250, 80);
}

function mousePressed() {
  fillr[count];
  fillg[count];
  fillb[count];
  count++;
  if (count > fillr.length - 1) {
    count = 0;
  }

  fill(255, 0, 0);
  circle(mouseX, mouseY, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
