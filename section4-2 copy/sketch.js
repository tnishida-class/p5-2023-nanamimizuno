//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
 

}

function draw(){
  background(25, 25, 112);
  noStroke();
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(255,204,0);
    if(keyIsDown("A".charCodeAt(0))){  fill(255,105,180); } 
    star(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  //月
  fill(240,230,140)
  ellipse(width/2 , height/2,500);
  //白目
  fill(255)
  ellipse(width/2-100 , height/2-50,70);
  ellipse(width/2+100 , height/2-50,70);
  //黒目
  fill(0)
  ellipse(width/2-100 , height/2-50,30);
  ellipse(width/2+100 , height/2-50,30);
  //口
  fill(240,144,141)
  arc(width/2 , height/2+30,300,300,0,PI)

}



function star(cx, cy, r){
  noStroke();
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

//ハートを描く
function love(cx,cy,r){
  noStroke();
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    let b = { x: mouseX, y: mouseY, size: random(20,100), vx: dx, vy: dy };//sizeを20→random(20,100)へ
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
