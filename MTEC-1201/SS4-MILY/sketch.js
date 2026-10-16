// MTEC-1201
// SS4-MILY


//note: 
//let img
//function preload(){
//img = loadImage('images/filename.png')}
//textAlign(CENTER) is used to center the text in the middle of the canvas
//textFont('fontname/ EX. TIME NEW ROMAN') is used to change the font of the text
//millis() is used to get the current time in milliseconds since the program started
//


// SS4-code

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

  //ground
  fill(196, 227, 143)
  rect(0, 405, 700, 100)



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

//image of cats
if (millis() >= imgms2){
    image(img2, 80, 180, 120, 120)
  }

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

 }

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
    text("Did you get this question right? =)", 215, 240)

  }


 
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


// end of code

//NOTE：
// let name 用于声明变量
// let name = ["?", "??", "???"] 用于声明一个数组变量
// 数组变量用于储存多个值当使用 random() 函数时，可以从数组中随机选择一个值
// 随机选择消息时，使用random（） 函数从数组中随机选择一个值
// if (mouseX > 525 && mouseX < 555 && mouseY > 110 && mouseY < 140){ fill(153, 22, 20)}用于限制鼠标悬停区域改变颜色当鼠标悬停在该区域时，执行fill（153，22，20）
// strokeWeight用于设置描边宽度，但会影响到所有使用strokeWeight（）的图形所以在使用时需要在每个图形前单独设置strokeWeight（）
// function mousePressed() 用于处理鼠标点击事件 以及需要注意需要在draw（）函数中调用该函数及该function需在function setup和function draw（）之外定义
//else 用于在if条件不满足时执行相应的代码块
// && 用于在条件判断中同时满足多个条件
// || 用于在条件判断中只要满足其中一条条件即可

