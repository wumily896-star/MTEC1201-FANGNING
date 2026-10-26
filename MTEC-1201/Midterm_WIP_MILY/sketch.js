// MTEC-1201
// SS5-MILY
//note:设function myFunction(更改内容){内容}在function draw（）{用它}


//ideas:
//Q2:What is the Nineteenth Amendment about?
//Answer:A
//A. Women's suffrage
//B. Prohibition
//C. Freedom of speech and freedom of the press
//---------------
//Q3: tan 45° in radians is?
//Answer:C
//A. 0
//B. π/4
//C. 1
//-----------answer boxs
//stroke(46, 44, 44)
//strokeWeight(4)
//fill(250, 247, 235)
//rect(40, 450, 160, 30)
//rect(220, 450, 160, 30)
//rect(400, 450, 160, 30)

let game = 0
let choice = ""


//
let img;
let svg;
let ms = 6000
let bbY = -300
let bb2Y = -300
let bb3Y = -300
let bb4Y = -287
let textY = -267
let img1Y = -285
let img2Y = -280
let teacherX = -200
let answer = 10000
let ms2 = 10000


//image 2
let img2
let imgms2 = 10000

//
let gameoverg = 405




// functions before setup, to load images & assets
function preload(){
  img = loadImage('images/Chem.png')
  svg = loadImage('images/teacher.svg')
  img2 = loadImage('Images/fish.jpg')
}


function setup() {
  createCanvas(700, 500);

}




function draw() {
  background(145, 198, 255);

 if (game === 0) {
    startpage();
  } else if (game === 1) {
    opengame();
  } else if (game === 2) {
    gameover();
  }

  if (choice === "a"){gameline4();

  }else if (choice === "b"){gameline3();

  }else if (choice === "c"){gameline2();}


}

//------------------------------------
function gameline3(){
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


//back board
  stroke(46, 44, 44)
  strokeWeight(4)
  fill(74, 74, 74)

  rect(90, bb2Y, 15, 130)
  rect(495, bb3Y, 15, 130)

  if (bb2Y <= 0){bb2Y = bb2Y + 1.5}
  if (bb3Y <= 0){bb3Y = bb3Y + 1.5}

  //黑板框
  fill(74, 74, 74)
  rect(50, bbY, 500, 200)
  //rect(40, 140, 500, 200)

  if (bbY <= 130){bbY = bbY + 1.5}

  //白板
  fill(250, 247, 235)
  rect(68, bb4Y, 465, 170)
  if (bb4Y <= 145){bb4Y = bb4Y + 1.5}

  
//image of fish
if (millis() >= imgms2){
    image(img2, 80, 180, 120, 120)
  }

      //answer box
 
    stroke(46, 44, 44)
    strokeWeight(4)
    fill(250, 247, 235)
    rect(40, 450, 160, 30)
    rect(220, 450, 160, 30)
    rect(400, 450, 160, 30)


  if (millis() >= answer){
    fill(173, 255, 125)
   rect(400, 450, 160, 30)




   fill(255, 115, 122)
   rect(40, 450, 160, 30)
    rect(220, 450, 160, 30)
  }
 
  if (millis() > ms) {
    textFont('Georgia');
    textSize(18);
    fill(46, 44, 44);

    stroke(1)
    strokeWeight(1)
    strokeWeight(1)
    fill(46, 44, 44)
    textSize(15)
    text("Cellular Respiration", 55, 470)
    text("Transpiration", 250, 470)
    text("Photosynthesis", 430, 470)
  }
 


  if (millis() >= ms2){
    noStroke(0)
    fill(250, 247, 235)
    rect(215, 175, 314, 120)
 
    stroke(46, 44, 44)
    strokeWeight(2)
    textFont('Georgia');
    textSize(20);
    fill(46, 44, 44);
    text("Uh-oh, it looks like you've actually forgotten this point.", 215, 240)
}
}

function gameline4(){
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


//back board
  stroke(46, 44, 44)
  strokeWeight(4)
  fill(74, 74, 74)

  rect(90, bb2Y, 15, 130)
  rect(495, bb3Y, 15, 130)

  if (bb2Y <= 0){bb2Y = bb2Y + 1.5}
  if (bb3Y <= 0){bb3Y = bb3Y + 1.5}

  //黑板框
  fill(74, 74, 74)
  rect(50, bbY, 500, 200)
  //rect(40, 140, 500, 200)

  if (bbY <= 130){bbY = bbY + 1.5}

  //白板
  fill(250, 247, 235)
  rect(68, bb4Y, 465, 170)
  if (bb4Y <= 145){bb4Y = bb4Y + 1.5}

  
//image of fish
if (millis() >= imgms2){
    image(img2, 80, 180, 120, 120)
  }

      //answer box
 
    stroke(46, 44, 44)
    strokeWeight(4)
    fill(250, 247, 235)
    rect(40, 450, 160, 30)
    rect(220, 450, 160, 30)
    rect(400, 450, 160, 30)


  if (millis() >= answer){
    fill(173, 255, 125)
   rect(400, 450, 160, 30)




   fill(255, 115, 122)
   rect(40, 450, 160, 30)
    rect(220, 450, 160, 30)
  }
 
  if (millis() > ms) {
    textFont('Georgia');
    textSize(18);
    fill(46, 44, 44);

    stroke(1)
    strokeWeight(1)
    strokeWeight(1)
    fill(46, 44, 44)
    textSize(15)
    text("Cellular Respiration", 55, 470)
    text("Transpiration", 250, 470)
    text("Photosynthesis", 430, 470)
  }
 

  if (millis() >= ms2){
    noStroke(0)
    fill(250, 247, 235)
    rect(215, 175, 314, 120)
 
    stroke(46, 44, 44)
    strokeWeight(2)
    textFont('Georgia');
    textSize(20);
    fill(46, 44, 44);
    text("Uh-oh—congratulations, but I'm afraid you've remembered it incorrectly!", 215, 240)
}
}
//------------------
function startpage(){
 
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



//Tittle of Game
textSize(20)
stroke(35, 35, 35)
strokeWeight(4)
fill(158, 40, 51)
textFont('Georgia')
text("Did you give your", 260, 185)
text("back to your teacher?!", 125, 280)


strokeWeight(10)
textSize(70)
text("----MEMORIES----", 10, 250)


//Game star button


textSize(25)
fill(250, 247, 235)
stroke(35, 35, 35)
strokeWeight(5)
rect(210, 385, 200, 40)


strokeWeight(1)
stroke(35, 35, 35)
fill(35, 35, 35)
text("!Game start!", 245, 413)
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


//back board
  stroke(46, 44, 44)
  strokeWeight(4)
  fill(74, 74, 74)

  rect(90, bb2Y, 15, 130)
  rect(495, bb3Y, 15, 130)

  if (bb2Y <= 0){bb2Y = bb2Y + 1.5}
  if (bb3Y <= 0){bb3Y = bb3Y + 1.5}

  //黑板框
  fill(74, 74, 74)
  rect(50, bbY, 500, 200)
  //rect(40, 140, 500, 200)

  if (bbY <= 130){bbY = bbY + 1.5}

  //白板
  fill(250, 247, 235)
  rect(68, bb4Y, 465, 170)
  if (bb4Y <= 145){bb4Y = bb4Y + 1.5}


//note of backboard
  fill(46, 44, 44)
  strokeWeight(1)
  textFont('Georgia')
  textSize(20)
  text("!Do Now!", 90, textY)
  if(textY <= 168) {textY = textY + 1.5}

// note of image on the backboard
  stroke(1)
  strokeWeight(2)
  rect(75, img1Y, 130, 130)
 image(img, 80, img2Y, 120, 120)

  if(img1Y <= 175) {img1Y = img1Y + 1.6}
  if(img2Y <= 180) {img2Y = img2Y + 1.6}


//teacher image
  image(svg, teacherX, 260, 190, 170)
  if (teacherX <= 40){teacherX = teacherX + 1.5}

//test

 if (millis() > ms) {
    textFont('Georgia');
    textSize(18);
    fill(46, 44, 44);

    stroke(1)
    strokeWeight(1)


    text("1. What is the name of this process?", 215, 190);

    stroke(120, 17, 24)
    fill(120, 17, 24)
    textSize(18)
    text("6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", 225, 248)
    textSize(13)
    text("Carbon dioxide + Water + Light → Glucose + Oxygen", 215, 290)
   
   //answer box
 
    stroke(46, 44, 44)
    strokeWeight(4)
    fill(250, 247, 235)
    rect(40, 450, 160, 30)
    rect(220, 450, 160, 30)
    rect(400, 450, 160, 30)

      if (millis() > ms) {
    textFont('Georgia');
    textSize(18);
    fill(46, 44, 44);

    stroke(1)
    strokeWeight(1)
    strokeWeight(1)
    fill(46, 44, 44)
    textSize(15)
    text("Cellular Respiration", 55, 470)
    text("Transpiration", 250, 470)
    text("Photosynthesis", 430, 470)
  }
 }


}

function gameline2(){

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


//back board
  stroke(46, 44, 44)
  strokeWeight(4)
  fill(74, 74, 74)

  rect(90, bb2Y, 15, 130)
  rect(495, bb3Y, 15, 130)

  if (bb2Y <= 0){bb2Y = bb2Y + 1.5}
  if (bb3Y <= 0){bb3Y = bb3Y + 1.5}

  //黑板框
  fill(74, 74, 74)
  rect(50, bbY, 500, 200)
  //rect(40, 140, 500, 200)

  if (bbY <= 130){bbY = bbY + 1.5}

  //白板
  fill(250, 247, 235)
  rect(68, bb4Y, 465, 170)
  if (bb4Y <= 145){bb4Y = bb4Y + 1.5}

  
//image of fish
if (millis() >= imgms2){
    image(img2, 80, 180, 120, 120)
  }

      //answer box
 
    stroke(46, 44, 44)
    strokeWeight(4)
    fill(250, 247, 235)
    rect(40, 450, 160, 30)
    rect(220, 450, 160, 30)
    rect(400, 450, 160, 30)


  if (millis() >= answer){
    fill(173, 255, 125)
   rect(400, 450, 160, 30)




   fill(255, 115, 122)
   rect(40, 450, 160, 30)
    rect(220, 450, 160, 30)
  }
 
  if (millis() > ms) {
    textFont('Georgia');
    textSize(18);
    fill(46, 44, 44);

    stroke(1)
    strokeWeight(1)
    strokeWeight(1)
    fill(46, 44, 44)
    textSize(15)
    text("Cellular Respiration", 55, 470)
    text("Transpiration", 250, 470)
    text("Photosynthesis", 430, 470)
  }
 


  if (millis() >= ms2){
    noStroke(0)
    fill(250, 247, 235)
    rect(215, 175, 314, 120)
 
    stroke(46, 44, 44)
    strokeWeight(2)
    textFont('Georgia');
    textSize(20);
    fill(46, 44, 44);
    text("Congratulations! You no longer have to avoid eye contact with your high school chemistry teacher!", 215, 240)
}
}



function gameover(){
  background(145, 198, 255)

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
  rect(0, gameoverg, 700, 700)
  
  if(gameoverg >= 0){ gameoverg = gameoverg - 1}

  stroke(1)
  strokeWeight(4)
  textSize(90)
  fill(158, 40, 51)
  textFont('Georgia')
  text("!Game over!", 80, 300)

}




function mousePressed(){
bbY = -300
bb2Y = -300
bb3Y = -300
bb4Y = -287
textY = -267
img1Y = -285
img2Y = -280
teacherX = -200
 
ms = millis() + 6000
answer =  millis() + 10000
ms2 = millis() + 10000
imgms2 = millis() + 10000
}


function keyPressed() {
  if (key === " ") {
    game = game + 1;

    if (game > 2) {
      game = 0;
    }
  

  choice = "";
  }

  if (game === 1){
  if (key === "a"){
  }else if (key === "b"){
}else if (key === "c"){}
  }
}