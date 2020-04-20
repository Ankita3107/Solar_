function setup() {
  createCanvas(900, 400);

}

function draw() {
  background(0);

  // Sun
  fill(255, 255, 0);
  ellipse(-1040, 200, 2182);

  // Mercury
  fill(200);
  ellipse(120, 200, 8);

  // Venus
  fill(255, 130, 0);
  ellipse(160, 200, 19);

  // Earth
  fill(18, 154, 221);
  ellipse(200, 200, 20);

  // Mars
  fill(255, 57, 4);
  ellipse(240, 200, 11);

  // Jupiter
  fill(255, 130, 0);
  ellipse(380, 200, 224);

  // Saturn
  fill(255, 235, 176);
  ellipse(600, 200, 189);

  // Uranus
  fill(38, 222, 255);
  ellipse(750, 200, 80);

  // Neptune
  fill(0, 150, 255);
  ellipse(850, 200, 78);
}