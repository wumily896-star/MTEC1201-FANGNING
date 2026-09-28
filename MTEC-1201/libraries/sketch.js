// MTEC-1201

function setup() {
  createCanvas(500, 500);
}

function draw() {

  // sky 
  createCanvas(500, 500);
  fill(135,206,235);
  background(255,140,80);// sky orange background);

  // waves
  stroke( 19, 30, 56);// blue stroke for the arc
  fill( 19, 30, 56);// blue fill for the arc
  arc(50, 400, 200, 50, 0,  TWO_PI );

  stroke( 19, 30, 56);// blue stroke for the arc
  fill( 19, 30, 56);// blue fill for the arc
  arc(180, 400, 200, 50, 0,  TWO_PI );

  stroke( 19, 30, 56);// blue stroke for the arc
  fill( 19, 30, 56);// blue fill for the arc
  arc(300, 400, 200, 50, 0,  TWO_PI );

  stroke( 19, 30, 56);// blue stroke for the arc
  fill( 19, 30, 56);// blue fill for the arc
  arc(430, 400, 200, 50, 0,  TWO_PI );

  // sun 
  stroke(255, 225, 0);// yellow stroke for the sun
  fill(255,225,0);// yellow fill for the sun
  circle(255, 200, 100);// sun

  // sea
  stroke(51, 93, 232);// blue stroke for the ground
  fill(51, 93, 232);// blue fill for the ground
  rect(0, 400, 500, 100);// ground
  
  // sand
  stroke(238, 214, 175);// yellow stroke for the ground
  fill(238, 214, 175);// yellow fill for the ground
  rect(0, 450, 500, 50);// ground

  // railing
 fill(135, 79, 65);// brown fill for the railing
 stroke(135, 79, 65);// brown stroke for the railing
  rect(0, 420, 180, 20);
   rect(330, 420, 180, 20);
    rect(0, 420, 20, 80);
    rect(50, 420, 20, 80);
    rect(100, 420, 20, 80);
    rect(150, 420, 20, 80);
    rect(340, 420, 20, 80);
    rect(390, 420, 20, 80);
    rect(440, 420, 20, 80);
    rect(490, 420, 20, 80);
  
  // triangle for the railing
triangle(0, 420, 20, 420, 10, 400);// triangle for the railing
triangle(50, 420, 70, 420, 60, 400)
triangle(100, 420, 120, 420, 110, 400)
triangle(150, 420, 170, 420, 160, 400)
triangle(340, 420, 360, 420, 350, 400)
triangle(390, 420, 410, 420, 400, 400)
triangle(440, 420, 460, 420, 450, 400)
triangle(490, 420, 510, 420, 500, 400)


// triangle for the mountain
fill( 19, 30, 56);// blue fill for the mountain
stroke( 19, 30, 56);// blue stroke for the mountain
triangle(1, 390, 1, 180, 200, 390);// triangle for the mountain 
triangle(40, 390, 130, 260, 280, 390);
   
// ellipse for rocks
fill( 122, 122, 122);// grey fill for the rocks
stroke( 122, 122, 122)
ellipse(255, 500, 110, 10)
ellipse(255, 480, 90, 10)
ellipse(255, 460, 70, 10)

// ellipse for the clouds
fill(255, 255, 255);// white fill for the clouds
stroke(255, 255, 255);// white stroke for the clouds
ellipse(100, 100, 50, 50)
ellipse(120, 100, 50, 50)
ellipse(140, 100, 50, 50)
ellipse(160, 100, 50, 50)
ellipse(180, 100, 50, 50)

stroke(255, 255, 255);// white stroke for the clouds
ellipse(360, 250, 50, 50)
ellipse(380, 250, 50, 50)
ellipse(400, 250, 50, 50)
ellipse(420, 250, 50, 50)
ellipse(440, 250, 50, 50)

// line for the sea
stroke( 19, 30, 56)

}
