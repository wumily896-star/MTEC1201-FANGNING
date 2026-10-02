// MTEC-1201
//SS2-MILY
//patiently continue to hone your skills through dauky particle, even if it takes a long time
//instruction: Click the start the animation to reset the positions of the elements
//instruction: move your mouse left and right to wag the cat's tail and make the emoji follow the cursor.

let circleY = 180;
let ellipseX = 100;
let ellipse2X = 360;
let rectY = -105;
let textstarY = -500;
let moonY = -500
let ellipse3X = -500;
let ellipse4X = -200;
let rectX = -170
let rectsandX = -170;
let railingX = 0;// initial position of the left railing
let railingrX = 330;// initial position of the right railing
let triangleX = 0; // intial position of the triangle for the railing -left side
let trianglerX = 340; // intial position of the triangle for the railing -right side


function setup() {
  createCanvas(500, 500);
}

function mousePressed(){
  circleY = 180;
  ellipseX = 100;
  ellipse2X = 360;
  rectY = -105;
  textstarY = -500;
  moonY= -500;
  ellipse3X = -500;
  ellipse4X = -200;
  rectX = -170;
  rectsandX = -170
  railingX = 0;
  railingrX = 330;
  triangleX = 0;
  trianglerX = 340;

}
function draw() {

  // sky 
  background(255,140,80);// sky orange background);

  // night sky
  fill(30, 30, 80);
  stroke(30, 30, 80);
  rect(0, 0, 500, rectY);
  rectY = rectY + 1.5;


  // moon
  fill(255, 255, 200);
  stroke(255, 255, 200);
  circle(250, moonY, 80);
 if (moonY < 180) {
    moonY = moonY + 1.9;
  }
  
  // stars-the big dipper
  strokeWeight(1)
  fill(255, 255, 255);
  textSize(20);
  text(".", 86, textstarY + 60);
  text(".", 170, textstarY + 10);
  text(".", 230, textstarY + 35);
  text(".", 289, textstarY + 57);
  text(".", 330, textstarY + 130);
  text(".", 420, textstarY +110);
  text(".", 445, textstarY + 25);

  if (textstarY < 60){
  textstarY = textstarY + 1.5;
  }


  // sun 
  stroke(255, 225, 0);// yellow stroke for the sun
  fill(255,225,0);// yellow fill for the sun
  circle(250, circleY, 80);
  circleY = circleY + 0.8;

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

  // sea
  stroke(51, 93, 232);// blue stroke for the ground
  fill(51, 93, 232);// blue fill for the ground
  rect(0, 400, 500, 100);// ground

  // night - sea
  stroke(23, 30, 94);// blue stroke for the ground
  fill(23, 30, 94);// blue fill for the ground
  rect(0, 400, rectX, 50);// ground
  rectX = rectX + 2;
  
  // sand
  stroke(238, 214, 175);// yellow stroke for the ground
  fill(238, 214, 175);// yellow fill for the ground
  rect(0, 450, 500, 50);// ground

  // railing
 fill(135, 79, 65);// brown fill for the railing
 stroke(135, 79, 65);// brown stroke for the railing
  rect(railingX, 420, 180, 20);//railing of the left side
    rect(railingX, 420, 20, 80);
    rect(railingX + 50, 420, 20, 80);
    rect(railingX + 100, 420, 20, 80);
    rect(railingX + 150, 420, 20, 80);

    rect(railingrX, 420, 180, 20);//railing of the right side
    rect(railingrX + 10, 420, 20, 80);
    rect(railingrX + 60, 420, 20, 80);
    rect(railingrX + 110, 420, 20, 80);
    rect(railingrX + 150, 420, 20, 80);

    railingX = railingX - 1;
    railingrX = railingrX + 1;
  
  // triangle for the railing
triangle(triangleX, 420, triangleX +20, 420, triangleX +10, 400);// triangle for the railing
triangle(triangleX + 50, 420, triangleX + 70, 420, triangleX + 60, 400)
triangle(triangleX + 100, 420, triangleX +120, 420, triangleX + 110, 400)
triangle(triangleX + 150, 420, triangleX + 170, 420, triangleX + 160, 400)
triangleX = triangleX - 1;

// triangles for the railing - right side

triangle(trianglerX, 420, trianglerX + 20, 420, trianglerX + 10, 400)
triangle(trianglerX + 50, 420, trianglerX + 70, 420, trianglerX + 60, 400)
triangle(trianglerX + 100, 420, trianglerX + 120, 420, trianglerX + 110, 400)
triangle(trianglerX + 150, 420, trianglerX + 170, 420, trianglerX + 160, 400)
trianglerX = trianglerX + 1;

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
ellipse(ellipseX + 20, 100, 50, 50)
ellipse(ellipseX + 40, 100, 50, 50)
ellipse(ellipseX + 60, 100, 50, 50)
ellipse(ellipseX + 80, 100, 50, 50)
ellipse(ellipseX + 100, 100, 50, 50)

ellipseX = ellipseX + 1.5;

stroke(255, 255, 255);// white stroke for the clouds
ellipse(ellipse2X + 20, 250, 50, 50)
ellipse(ellipse2X + 40, 250, 50, 50)
ellipse(ellipse2X + 60, 250, 50, 50)
ellipse(ellipse2X + 80, 250, 50, 50)
ellipse(ellipse2X + 100, 250, 50, 50)

ellipse2X = ellipse2X + 1.5;

// line for the sea
stroke( 19, 30, 56)

// ellipse for the third set of night clouds
fill(3, 1, 33);//
stroke(3, 1, 33);
ellipse(ellipse3X + 20, 250, 50, 50)
ellipse(ellipse3X + 40, 250, 50, 50)
ellipse(ellipse3X + 60, 250, 50, 50)
ellipse(ellipse3X + 80, 250, 50, 50)
ellipse(ellipse3X + 100, 250, 50, 50)

if (ellipse3X < 370){
ellipse3X = ellipse3X + 0.7;
}

// ellipse3X for the fourth set of night clouds
fill(3, 1, 33);// white fill for the clouds
stroke(3, 1, 33)
ellipse(ellipse4X + 20, 160, 50, 50)
ellipse(ellipse4X + 40, 160, 50, 50)
ellipse(ellipse4X + 60, 160, 50, 50)
ellipse(ellipse4X + 80, 160, 50, 50)
ellipse(ellipse4X + 100, 160, 50, 50)

if (ellipse4X < 60){
  ellipse4X = ellipse4X + 0.3;
}

// cat
fill(0);//orange fill fof the cat
stroke(0);//orange stroke fo the cat
ellipse(255, 400, 50, 45);// body of the cat
triangle(235, 386, 240, 365, 250, 386);// left ear of the cat
triangle(257, 386, 262, 365, 274, 386);// right ear of the cat
ellipse(255, 452, 65, 70);// body of the cat
ellipse(238, 480, 12, 7)
ellipse(272, 480, 12, 7)

// arc for the cat's tail
noFill()
stroke(0)
strokeWeight(10)
arc(300 + mouseX / 30, 460, 100, 80, 1, PI)


 strokeWeight(1)
  fill(255, 255, 255);
  textSize(20);
  text("🤚🏼", mouseX, mouseY + 20);
  

}
