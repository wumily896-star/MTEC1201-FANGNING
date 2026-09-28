//First Sketch {09/14} by Professor Professor Max addae
/* Muti_line Comment everything between the two slashes is a comment*/
//Point(40, 80);//

function setup() {
  // createCanvas() - two arguments: {width, height}
  createCanvas(400, 400);
}

function draw() {
  // background() -- sets the background color of the canvas
  background(220);
  fill("red");

  // strokeWeight() - sets the thickness of the stroke
  strokeWeight(10);

  // line - draw set of cordinates cordinates: {x1, y1, x2, y2}
  line(50, 50, 100, 200);

  line(300, 10, 40, 100);

  line(600, 600, 810, 700);

  fill("blue");
  rect( 300, 150, 50, 200);

  strokeWeight(10);
  fill("blue");
  circle(40, 40, 50)

}
