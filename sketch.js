let on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (on) {
    background(0,0,255);
  } else {
    background(0);
  }
  fill(0,255,0);
  stroke(0,0,255);
  strokeWeight(5)
  circle(300,200,100);
}
  
  function mousePressed() {
    if (mouseX > 250 && mouseX < 350 && mouseY < 250) {
  on = !on;
    }
   
}


// If you mouse click the center of the circle the background will change color.
// Practicing Boolean Varibles for Self Practice