let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r= 15   //增加上下幅度
let angle =0
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
  //為載入在fonts資料夾內的NotoSansTC-Medium.ttf字型
  font = loadFont("fonts/ChocolateClassicalSans-Regular.ttf") 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#219ebc")
  rectMode(CENTER)//畫方形以中心點為座標
  noFill()  //方形不填入顏色
  angleMode(DEGREES) //設定角度單位0~360
  //frameRate(60) //設定每秒進入draw 函數次數
  points = font.textToPoints("Gino", -300, 80  , 200, {
    sampleFactor:0.06
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小(點數密度，數字越小點數越少)
  angleMode(DEGREES)
  
}

function draw(){
  background("#219ebc"); //背景顏色為膚色
  //translate(width/2,height/2) //把原點由視窗的昨上一道視窗的中心點
 
for(let y=0;y<height;y = y +120){
  for(let x=0;x<width;x = x +120){
    push() // 重新設定格式
      translate(x,y) //
      stroke(255) // 線條顏色
      for(let i=0;i<10;i= i+1){
        let r = map(sin(frameCount),-1,1,100,255)
        let g = map(cos(frameCount/2),-1,1,100,255)
        let b = map(sin(frameCount/4),-1,1,50,255)
        stroke(r,g,b)
        rotate(angle) //把物件旋轉10度
        rect(0,0,100-i*3,100-i*3,20) // 劃一個方形，在視窗的中間，寬與高都為600
        angle = sin(frameCount)*10 //讓方形旋轉-100~+100

      }

    pop() //取消所有設定格式
  }
  
}

 
  noFill()    //以下畫圓或畫方形都不要填滿顏色
  stroke("#d4a373")  //線條顏色
  strokeWeight(3)    //線條粗細
  //---------宣告變數
  var rect_width= 50
  var bc_w = 50  //大圓的寬度
  var sc_w = 25  //小圓的寬度

  
 
for(let j=0;j<400;j=j+1){//負責幾排
  for(let i=0;i<40;i=i+1){   //i=0；初始值，i從0開始，i<30；條件判斷
    ellipse(25+bc_w*i,25+50*j,bc_w)  //劃橢圓 (正圓)，25為起始點的座標
    rect(rect_width*i,0+50*j,rect_width)   //畫方形
    ellipse(rect_width*(i+1),50+50*j,sc_w) //小圓
  
  }
  (mouseX,mouseY)
  }
  
 textSize(250)
 textAlign(CENTER,CENTER)
push()
translate(mouseX,mouseY)
  rotate(angle/2)
  strokeWeight(3)
  stroke("#c1121f")
  fill("#a2d2ff")
  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y)
    
    ellipse(points[i].x+r*sin(angle+i*10),points[i].y,30)
    //rect(points[i].x,points[i].y,10)
   line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
 } 
 angle=angle+30 //每畫圖一次就要調整角度+
}
pop()

