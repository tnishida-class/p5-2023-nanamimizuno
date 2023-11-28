// テキスト「キーボード操作に反応する」
let x, y,vy;
//mizuno
const g=1 ;
const jump=20;
const ground=20;
const size=20;


function setup(){
  createCanvas(windowWidth, windowHeight); 
  x = width / 2;
  y = height-ground-size / 2;
  vy=0;
}

function draw(){
  background(160, 192, 255);

  let gy=height-ground;
  line(0,gy,width,gy)//zimennno senn

  ellipse(x, y, size,size);

  y +=vy;

  if(y<height-ground-size/2){
    vy +=g;
  }
  else{
    vy=0;
    y=height-ground-size/2;
  }


  
  if(keyIsDown(LEFT_ARROW)){ 
    x -= 5;
    if(keyIsDown("B".charCodeAt(0) )){ x-=5 ; }
   }
  if(keyIsDown(RIGHT_ARROW)){
     x += 5; 
     if(keyIsDown("B".charCodeAt(0) )){ x+=5; } 
    }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown(" ".charCodeAt(0))){ y-=30; }
}
 

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
