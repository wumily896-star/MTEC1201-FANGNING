// MTEC-1201
// Final-MILY
//Title:
//Instructions:
//The background of the image is morning, noon, and night.
//Some elements on certain pages reference code from previous assignments.

//Click the mouse to switch animations and answer questions.
//The little surprise is that pressing the spacebar after failing will display a random message.
//In some scenes, the mouse X and mouse Y emojis are used, and the cat's tail can be slightly moved with the mouse.

let bbY = -300
let bb2Y = -300
let bb3Y = -300
let bb4Y = -287
let textY = -267
let img1Y = -285
let img2Y = -280
let teacherX = -200
let x = -500
let opengameThx = -250
let opengameTfx = -250
let opengameThx1 = -250
let opengameTfx2 = -250
let opengameThx3 = -250
let opengameTfx4 = -250
let lineX1 = -250
let lineX = -250
let lineX2 = -250
let Dialogbox = 900
let Dialogbox2 = 917
let message = -500
let ellipse3X = -100
let ellipse4X = -100
let textstarY = -100
let ellipse5X = -100
let snail = 800
let snail2 = 800
let crab = -100
let message0 = "Game over"
let message2 =["Where have my memories gone?!","I can't remember anything!","What is happening to me?","I feel lost!","I should be a fish =)"]



//
let game = 0
let choice = ""


let ms = 800

function restartGame() {
  game = 0;
  choice = "";

  //
  snail = -100
  crab = -100
  bbY = -300
  bb2Y = -300
  bb3Y = -300
  bb4Y = -287
  textY = -267
  img1Y = -285
  img2Y = -280
  teacherX = -200
  x = -500
  opengameThx = -250
  opengameTfx = -250
  opengameThx1 = -250
  opengameTfx2 = -250
  lineX = -250
  lineX1 = -250
  lineX2 = -250
  Dialogbox = 900
  Dialogbox2 = 917
  message = -500
  ellipse3X = -100
  ellipse4X = -100
  textstarY = -100
  ellipse5X = -100
  snail2 = 800

}

let img2
let img;
let svg;
let boat;
let c2
let gameoverImg;
let snailImg;
let crabImg;

// functions before setup, to load images & assets
function preload(){
  img = loadImage('images/Chem.png')
  svg = loadImage('images/teacher.svg')
  svg2 = loadImage('images/teacherh.svg')
  svg3 = loadImage('images/teacherf.svg')
  img2 = loadImage('Images/fish.jpg')
  boat = loadImage('images/boat.svg')
  png = loadImage('images/math.png')
  c1 = loadImage('images/c1.svg')
  c2 = loadImage('images/c2.svg')
  gameoverImg = loadImage('images/gameover.svg')
  snailImg = loadImage('images/snail.svg')
  crabImg = loadImage('images/crab.svg')


}

function setup() {

  createCanvas(630, 500);

  
}


function draw() {
  background(145, 198, 255);


  if (game === 0){
    startpage();
  }
  else if (game === 1){
    opengame();
  }
  else if (game === 2){
    Q1();
  }
  else if (game === 3){
    Q2();
  }
  else if (game === 4){
    Q3();
  }
  else if (game === 5){
    Win();
  }   
  else if (game === 6){
    Failed();
  }
  fill(0)

}

function Q1(){
//sun 
stroke(46, 44, 44)
strokeWeight(4)
fill(255, 246, 115)
circle(0, 0, 280)

//sun light
stroke(46, 44, 44)
strokeWeight(4)
fill(255, 246, 115)
triangle(20, 165, 80, 152, 50, 220)
triangle(120, 125, 157, 86, 210, 150)
triangle(173, 50, 178, 0, 250, 40)

  
//back board
  stroke(46, 44, 44)
  strokeWeight(4)
  fill(74, 74, 74)

  rect(90, bb2Y, 15, 130)
  rect(495, bb3Y, 15, 130)

  if (bb2Y <= 0){bb2Y = bb2Y + 2}
  if (bb3Y <= 0){bb3Y = bb3Y + 2}

  //黑板框
  fill(74, 74, 74)
  rect(50, bbY, 500, 200)
  //rect(40, 140, 500, 200)

  if (bbY <= 130){bbY = bbY + 2}


  //白板
  fill(250, 247, 235)
  rect(68, bb4Y, 465, 170)
  if (bb4Y <= 145){bb4Y = bb4Y + 2}

  //ground
  fill(196, 227, 143)
  rect(0, 405, 700, 100)



//note of backboard

  fill(46, 44, 44)
  strokeWeight(1)
  textFont('Georgia')
  textSize(20)
  text("!Do Now!", 90, textY)
  if(textY <= 168) {textY = textY + 2}


// note of image on the backboard
  stroke(1)
  strokeWeight(2)
  rect(75, img1Y, 130, 130)
 image(img, 80, img2Y, 120, 120)

  if(img1Y <= 175) {img1Y = img1Y + 2}
  if(img2Y <= 180) {img2Y = img2Y + 2}



//teacher image

  image(svg, teacherX, 260, 190, 170)
  if (teacherX <= 40){teacherX = teacherX + 2}

//test

    textFont('Georgia');
    textSize(18);
    fill(46, 44, 44);

    stroke(1)
    strokeWeight(1)

    text("1. What is the name of this process?", ms, 190);
    if (ms > 215) {
      ms = ms - 1
    }

    stroke(120, 17, 24)
    fill(120, 17, 24)
    textSize(18)
    text("6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", ms, 248)
    if (ms > 215) {
      ms = ms - 1
    }
    textSize(13)
    text("Carbon dioxide + Water + Light → Glucose + Oxygen", ms, 290)
    if (ms > 215) {
      ms = ms - 1
    }
    
   //answer box
  
   
stroke(46, 44, 44)
strokeWeight(4)
fill(250, 247, 235)
rect(65, 450, 160, 30)
rect(245, 450, 160, 30)
rect(425, 450, 160, 30)
  
 
    textFont('Georgia');
    textSize(18);
    fill(46, 44, 44);

    stroke(1)
    strokeWeight(1) 
    strokeWeight(1)
    fill(46, 44, 44)
    textSize(15)
    text("Cellular Respiration", 75, 470)
    text("Transpiration", 280, 470)
    text("Photosynthesis", 455, 470)
  
  
}

 


function Q3(){

  background(30, 30, 80)
  //sun 
stroke(0)
strokeWeight(4)
fill(250, 250, 250)
circle(620, 0, 280)

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
  text(".", 445, textstarY + 25);// ( text , x, name + y)
// means moving to the right/left in the original position IR
  if (textstarY < 60){
  textstarY = textstarY + 2;
  }

  //ground
  stroke(0)
  strokeWeight(3)
  fill(29, 60, 153)
  rect(0, 405, 700, 100)

  blackboard();


// note of image on the backboard
  stroke(1)
  strokeWeight(2)
  rect(110, 175, 130, 130)
  textSize(25)
  fill(158, 40, 51)
  text("Question 3", 350, 190)


//test
 
    textFont('Georgia');
    textSize(18);
    fill(46, 44, 44);

    stroke(1)
    strokeWeight(1) 
    strokeWeight(1)
    fill(46, 44, 44)
    textSize(15)
    text("(A) 0",130, 470)
  text("(B) π/4",310, 470)
  text("(C) 1",490, 470)
  

    stroke(46, 44, 44)
    strokeWeight(2)
    textFont('Georgia');
    textSize(20);
    fill(46, 44, 44);
    text("tan 45° in radians is?", 320, 260)

    image(png,110, 175, 130, 130)

      // ellipse for the third set of night clouds
fill(3, 1, 33);//
stroke(3, 1, 33);
ellipse(ellipse3X + 20, 350, 50, 50)
ellipse(ellipse3X + 40, 330, 50, 50)
ellipse(ellipse3X + 60, 350, 50, 50)
ellipse(ellipse3X + 80, 330, 50, 50)
ellipse(ellipse3X + 100, 350, 50, 50)

if (ellipse3X < 370){
ellipse3X = ellipse3X + 0.7;
}
// ellipse3X for the fourth set of night clouds
fill(3, 1, 33);// white fill for the clouds
stroke(3, 1, 33)
ellipse(ellipse4X + 20, 160, 50, 50)
ellipse(ellipse4X + 40, 150, 50, 50)
ellipse(ellipse4X + 60, 160, 50, 50)
ellipse(ellipse4X + 80, 150, 50, 50)
ellipse(ellipse4X + 100, 160, 50, 50)

if (ellipse4X < 60){
  ellipse4X = ellipse4X + 0.3;
}


ellipse(ellipse5X + 20, 40, 70, 70)
ellipse(ellipse5X + 40, 30, 70, 70)
ellipse(ellipse5X + 60, 40, 70, 70)
ellipse(ellipse5X + 80, 30, 70, 70)
ellipse(ellipse5X + 100, 40, 70, 70)

if (ellipse5X < 300){
ellipse5X = ellipse5X + 0.5;
}

  image(boat, x, 300, 200, 200);
  x = x + 1
}

function opengame(){
    //sun 
stroke(46, 44, 44)
strokeWeight(4)
fill(255, 246, 115)
circle(0, 0, 280)

//sun light
stroke(46, 44, 44)
strokeWeight(4)
fill(255, 246, 115)
triangle(20, 165, 80, 152, 50, 220)
triangle(120, 125, 157, 86, 210, 150)
triangle(173, 50, 178, 0, 250, 40)
 //ground
  fill(196, 227, 143)
  rect(0, 405, 700, 100)

//teacher image

 line(opengameThx1, 300, opengameThx1 + 70, 300)
 line(lineX1, 350, lineX1 + 70, 350)
 line(opengameTfx2, 380, opengameTfx2 + 70, 380)
  image(svg3, opengameTfx2, 260, 190, 170)
 image(svg2, opengameThx1, 260, 190, 170)
 if (opengameThx1 <= 40){opengameThx1 = opengameThx1 + 2.6}
if (opengameTfx2 <= 40){opengameTfx2 = opengameTfx2 + 3}
if (lineX1 <= 0){lineX1 = lineX1 + 2}



fill(250, 247, 235)
rect(220, 170, 350, 110)
//rect(220, 170, 350, 110)

triangle(200, 300, 221, 260, 395, 280)


textFont('Georgia');
strokeWeight(2)
textSize(18);
fill(46, 44, 44);
text("Hello! Welcome to the game!", 270, 200)
textSize(10);
strokeWeight(1)
text("There will be three questions next. If you fail them", 270, 230)
text("you will have to postpone your graduation!",270, 250)



strokeWeight(3)
fill(250, 247, 235)
rect(360, 300, 150, 30)
rect(360, 360, 150, 30)

fill(46, 44, 44)
strokeWeight(1)
text("Go answer the questions", 380, 320)
text("I refuse", 420, 380)

textSize(25)
text("💧", mouseX, mouseY)
}

function startpage(){
 
  textAlign(LEFT, BASELINE);
//sun
stroke(46, 44, 44)
strokeWeight(4)
fill(255, 246, 115)
circle(0, 0, 280)


//sun light
stroke(46, 44, 44)
strokeWeight(4)
fill(255, 246, 115)
triangle(20, 165, 80, 152, 50, 220)
triangle(120, 125, 157, 86, 210, 150)
triangle(173, 50, 178, 0, 250, 40)


//ground
  fill(196, 227, 143)
  rect(0, 405, 700, 100)


//teacher image

 line(opengameThx, 300, opengameThx + 70, 300)
 line(lineX, 350, lineX + 70, 350)
 line(opengameTfx, 380, opengameTfx + 70, 380)
  image(svg3, opengameTfx, 260, 190, 170)
 image(svg2, opengameThx, 260, 190, 170)

 opengameThx = opengameThx + 7.6
 opengameTfx = opengameTfx + 8
 lineX = lineX + 7

 strokeWeight(3)
textSize(10)
text("Oh no, I'm going to be late! Oh, and if you're late, I'll treat it as a truancy!", message, 330)
if(message < 160){message = message + 3.5}

//Tittle of Game
textSize(20)
stroke(35, 35, 35)
strokeWeight(4)
fill(158, 40, 51)
textFont('Georgia')
text("Did you give your", 350, 185)
text("back to your teacher?!", 125, 280)


strokeWeight(10)
textSize(70)
text("-----Knowledge-----", 15, 250)


//Game star button


textSize(25)
fill(250, 247, 235)
stroke(35, 35, 35)
strokeWeight(5)
rect(200, 385, 200, 40)


strokeWeight(1)
stroke(35, 35, 35)
fill(35, 35, 35)
textSize(23)
text("Going to Class!", 225, 413)
textSize(15)
text("--Click to start--", 245, 445)
}


function Q2(){

  background(255,140,80)
  
  //sun 
stroke(46, 44, 44)
strokeWeight(4)
fill(255, 204, 36)
circle(315, 0, 280)

//sun light
stroke(46, 44, 44)
strokeWeight(4)
fill(255, 204, 36)
triangle(315, 165, 365, 158, 345, 240)
triangle(265, 160, 192, 210, 205, 120)
triangle(575, 50, 485, 0, 465, 70)
triangle(475, 200, 415, 150, 445, 110)
triangle(155, 10, 170, 80, 65, 60)

//ground
 fill(238, 214, 175)
 rect(0, 405, 700, 100)

 image(snailImg, snail, 400, 20, 20)
  image(snailImg, snail2, 400, 20, 20)

 image(crabImg, crab, 400, 40, 40)
 snail = snail - 0.2
 snail2 = snail2 - 0.5
 crab = crab + 1
blackboard()

//Question and answer options on the whiteboard
fill(158, 40, 51)
strokeWeight(1)
textSize(18)
textFont('Georgia')
text("Q2:What is the Nineteenth Amendment about?", 130, 180)

fill(46, 44, 44)
textSize(15)
text("A. Women's suffrage", 110, 220)
text("B. Prohibition", 110, 250)
text("C. Freedom of speech and freedom of the press", 110, 280)


text("A",140, 470)
text("B",320, 470)
text("C",500, 470)

//cat
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

function Win(){
  background(252, 217, 255);

  
   //ground
  stroke(47, 47, 47)
  strokeWeight(4)
  fill(245, 184, 228)
  rect(0, 405, 700, 100)

  //teacher image
image(c2, 20, 210, 200, 200)
 line(opengameThx3, 300, opengameThx3 + 70, 300)
 line(lineX2, 350, lineX2 + 70, 350)
 line(opengameTfx4, 380, opengameTfx4 + 70, 380)
  image(svg3, opengameTfx4, 260, 190, 170)
 image(svg2, opengameThx3, 260, 190, 170)
 if (opengameThx3 <= 40){opengameThx3 = opengameThx3 + 2.6}
if (opengameTfx4 <= 40){opengameTfx4 = opengameTfx4 + 3}
if (lineX2 <= 0){lineX2 = lineX2 + 2}

image(c1, -300, -320, 900, 900)
image(c1, 20, -320, 900, 900)
image(c2, 400, 210, 200, 200)


fill(250, 247, 235)
rect(220, 170, 350, 110)
//rect(220, 170, 350, 110)

triangle(200, 300, 221, 260, 395, 280)

  stroke(47, 47, 47)
  strokeWeight(1)
  fill(0);
   textFont('Georgia');
  textSize(17);
  textAlign(CENTER);
  text("Congratulations!Keep up the good work", 380, 200);
  text("and don't let your guard down! Keep it up!", 400, 240)

  strokeWeight(3)
  fill(250, 247, 235)
  rect(380, 320, 100, 30);
  textAlign(CENTER);
  textSize(15);
  strokeWeight(1)
  fill(47, 47, 47)
  textFont('Georgia');
  text("Restart", 430, 340);


}

function Failed(){
  background(0);
  fill(225)
  rect(70, 90, 500, 300)
  textAlign(CENTER);
  textSize(30);
  fill(0)
  textFont('Georgia');
  text(message0, width / 2, height / 2);
  text("-Press anywhere to return-", width / 2, height / 2 + 50);

  image(gameoverImg,265, 100, 100, 100);
    strokeWeight(3)
  fill(225)
  rect(380, 320, 100, 30);
  textAlign(CENTER);
  textSize(15);
  strokeWeight(1)
  fill(47, 47, 47)
  textFont('Georgia');
  text("Restart", 430, 340);
}


function blackboard(){
  stroke(46, 44, 44)
  strokeWeight(4)
  fill(74, 74, 74)

  rect(110, 0, 15, 130)
  rect(515, 0, 15, 130)

  //黑板框
  fill(74, 74, 74)
  rect(70, 130, 500, 200)
  //rect(40, 140, 500, 200)


  //白板
  fill(250, 247, 235)
  rect(88, 145, 465, 170)

stroke(46, 44, 44)
strokeWeight(4)
fill(250, 247, 235)
rect(65, 450, 160, 30)
rect(245, 450, 160, 30)
rect(425, 450, 160, 30)
}



function mousePressed() {

  
  if (game === 0) {

    choice = "";


    if (mouseX > 200 && mouseX < 400 &&mouseY > 385 && mouseY < 425) {
      choice = "Start";}
    // 判断答案
    if (choice === "Start") {
      game = 1;
    }
  }

  else if (game === 1) {

    choice = "";

    if (mouseX > 360 && mouseX < 510 &&mouseY > 300 && mouseY < 330) {
      choice = "go";}

    else if (mouseX > 360 && mouseX < 510 &&mouseY > 360 && mouseY < 390) {
      choice = "no";}
    // 判断答案
    if (choice === "go") {
      game = 2;
    }
    else if (choice === "no") {
      game = 6;
    }
  }
  else if (game === 2) {

    choice = "";

    if (mouseX > 65 && mouseX < 225 &&mouseY > 450 && mouseY < 480) {
      choice = "A";}

    else if (mouseX > 245 && mouseX < 405 && mouseY > 450 && mouseY < 480) {
      choice = "B";
    }

    // C
    else if (mouseX > 425 && mouseX < 585 && mouseY > 450 && mouseY < 480) {
      choice = "C";
    }

    // 判断答案
    if (choice === "C") {
      game = 3;
    }
    else if (choice === "A" || choice === "B") {
      game = 6;
    }
  }

  
  else if (game === 3) {

    choice = "";

    if (mouseX > 65 && mouseX < 225 &&mouseY > 450 && mouseY < 480) {
      choice = "A";}

    else if (mouseX > 245 && mouseX < 405 && mouseY > 450 && mouseY < 480) {
      choice = "B";
    }

    // C
    else if (mouseX > 425 && mouseX < 585 && mouseY > 450 && mouseY < 480) {
      choice = "C";
    }

    // 判断答案
    if (choice === "A") {
      game = 4;
    }
    else if (choice === "B" || choice === "C") {
      game = 6;
    }
  }

  else if (game === 4) {

    choice = "";

    if (mouseX > 65 && mouseX < 225 &&mouseY > 450 && mouseY < 480) {
      choice = "A";}

    else if (mouseX > 245 && mouseX < 405 && mouseY > 450 && mouseY < 480) {
      choice = "B";
    }

    // C
    else if (mouseX > 425 && mouseX < 585 && mouseY > 450 && mouseY < 480) {
      choice = "C";
    }

    // 判断答案
    if (choice === "B") {
      game = 5;
    }
    else if (choice === "A" || choice === "B") {
      game = 6;
    }
  }

  else if (game === 5 || game === 6) {

    restartGame();

    choice = "";

    if (mouseX >= 300 && mouseX <= 480 && mouseY >= 320 && mouseY <= 360) {
      choice = "Restart";
    }

    // 判断答案
    if (choice === "Restart") {
      game = 0;
    }
  }
  
}

function keyPressed() {
  message0 = random(message2);
}
// end of code
/*
Design Process: Since the theme was SS4, 
I planned to create a website-based quiz game, 
so I started with SS4 and made further extensions and modifications.
 I first designed the appearance of each page and then added switching and other features, 
 such as a random Easter egg.
*/
