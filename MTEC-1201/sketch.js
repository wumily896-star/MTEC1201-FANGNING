let x=600; // x-
let y=0;;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
//blue cricle
 fill(0, 0, 225);
circle(x, y, 50);

x= x - 1;//same as x++;
y= y + 1;//same as y++;

//using mathemaitic operations
//x=+=5;

// Mouse pressed resets the position of the circle to (0, 0)
//y = y * 3
//y= y / 2;
}

function mousePressed(){
  x = 0;
  y = 0;
}

function keyPressed(){
  x = 0;
  y = 0;
}
