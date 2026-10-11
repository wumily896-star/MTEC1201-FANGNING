//MTEC-1201
//SS3-Fang Ning W
//Error pop-up

//I explored randomness and interactivity through programming, using code to create a retro-style computer error pop-up window.


//Instructions:
//1. Press the Space bar to generate a random color.
//2. Hover the mouse over the "NO", "YES", or "x" (cancel) buttons to turn them red.
//3. Click anywhere on the screen to randomly change the content of the pop-up window.
//4. Click the box on the right side of the screen to reset to the starting point and begin moving to the right while displaying text.



let num = 1// 随机的初始数字
let message = "An unexpected error has occurred. Please try again."// 默认消息
let messages = ["system error", "File not found", "An unexpected error has occurred.", "Please try again."]// 可选消息列表
let value = 0
let value1 = 0
let value2 = 0
let r = 0, g = 0, b = 0
let rectX = 290


function setup() {

  createCanvas(700, 500);


}


function draw() {
  background(50, 192, 227);

  r = random(255)
  g = random(255)
  b = random(255)


  
//background design-rect 1 top of left
  
  stroke(1)
  strokeWeight(2)
  fill(200, 200, 200)
  rect(5, 0, 500, 200)


  fill(230, 230, 230)
  rect(20, 10, 465, 170)

//------------rect 2 bottom of left
  stroke(1)
  strokeWeight(2)
  fill(200, 200, 200)
  rect(20, 300, 500, 200)

  
  fill(230, 230, 230)
  rect(40, 320, 465, 170)

//------------rect 3

  rect(48, 410, 450, 20)

//--------------rect 4 top of right
  stroke(1)
  strokeWeight(2)
  fill(200, 200, 200)
  rect(270, 200, 500, 200)

  
  fill(230, 230, 230)
  rect(285, 215, 465, 170)


  stroke(50, 192, 227)
  strokeWeight(1)
  textSize(33)
  text("H", 590, 250)
  text("E", 590, 279)
  text("L", 590, 309)
  text("L", 590, 339)
  text("O", 590, 372)

  strokeWeight(1)
  fill(50, 192, 227)
  rect(300, 225, 270, 150)


  stroke(0)
  noStroke()
  fill(230, 230, 230)
  rect(rectX, 224, 319, 153)

  
  if(rectX < 800){
    rectX = rectX + 2
  }


// random color


  fill(r, g, b)
  noStroke()
   ellipse(250, 100, 100)
   stroke(r, g, b)
   textSize(20)
    text("random color", 30, 35)

  
//弹窗背景
  stroke(1)
  strokeWeight(2)
  fill(199, 199, 199)
  rect(65, 100, 500, 250)

  //弹窗标题栏
  stroke(1)
  strokeWeight(2)
  fill(21, 24, 115)
  rect(70, 105, 490, 40)

  //弹窗cancel按钮
  stroke(1)
  strokeWeight(2)

  if (mouseX > 525 && mouseX < 555 && mouseY > 110 && mouseY < 140){
    fill(153, 22, 20)
  }// 限制鼠标悬停区域
  rect(525, 110, 30, 30)

  //弹窗标题栏内容
  stroke(1)
  strokeWeight(2)
  fill(230, 230, 230)
  textSize(20)
  text("system error", 80, 132)

  //cancel X
  stroke(1)
  strokeWeight(2)
  fill(255)
  textSize(20)
  text("X", 535, 132)

  //弹窗内容
  stroke(1)
  strokeWeight(1)
  fill(0)
  textSize(15)
  text(message, 180, 200)// message= 随机消息
  

  //弹窗NO
  stroke(1)
  strokeWeight(2)
  if (mouseX > 185 && mouseX < 305 && mouseY > 285 && mouseY < 315){
  fill(153, 22, 20) }
 
  rect(185, 285, 120, 30)
  fill(255)
  textSize(20)
  text("NO", 235, 308)

  //弹窗yes
  stroke(1)
  strokeWeight(2) 
  fill(0)
  if (mouseX > 320 && mouseX < 440 && mouseY > 285 && mouseY < 315){
  fill(153, 22, 20)}

 
  rect(320, 285, 120, 30)

  fill(255)
  strokeWeight(2)
  textSize(20)
  text("YES", 365, 308)

  //弹窗内容下滑线
  fill(230, 230, 230)
  stroke(0)
  strokeWeight(2)
  rect(555, 160, 5, 180)

  //弹窗内容
  stroke(1)
  strokeWeight(1)
  fill(0)
  textSize(16)
  text("Please wait        minutes", 240, 250)

  //随机数字
  textSize(16)
  text(num, 333, 250)
   
  // 警告
  stroke(1)
  strokeWeight(6)
  fill(255, 211, 33)
  triangle(130, 170, 180, 260, 80, 260)
  // !
  stroke(1)
  strokeWeight(4)
  fill(0)
  textSize(50)
  text("!", 122, 247)

  
  // guess color section
  stroke(1)
  strokeWeight(2)
  textSize(20)
  text("!guess color!", 210, 470)  

  // ?- color
    stroke(1)
    strokeWeight(2)
    fill(value)
    rect(48, 410, 166, 20)

    fill(value1)  
    rect(214, 410, 118, 20)

    fill(value2)
    rect(332, 410, 166, 20)

  


}

 function mousePressed(){
  num = int(random(1, 10))// 随机生成1到10之间的整数 int（）将浮点数转化为整数

  message = random(messages)// 从可选消息列表中随机选择一个消息

  rectX = 290
}

function keyPressed(){
  if (value === 0){
    value = color(r, g, b);
  }else{
    value = 0;
  }

  if (value1 === 0){
    value1 = color(r, g, b)
  }else{
    value1 = 0
  }
  
  if (value2 === 0){
    value2 = color(r, g, b)
  }else{
    value2 = 0 
  }

  if (key === "r"){
    r = random(255)
    g = random(255)
    b = random(255)
  }
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