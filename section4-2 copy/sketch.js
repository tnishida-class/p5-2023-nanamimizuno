//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let shapes=[];

function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  background(25, 25, 112);//背景色をMidnightBlueに

  for(let i = 0; i < shapes.length; i++){
    let s = shapes[i];
    fill(s.color)
    if(s.type === 'star'){
    star(s.x, s.y, s.size);}

    else if(s.type === 'heart'){
      heart(s.x,s.y,s.size);
    }
    s.x += s.vx;
    s.y += s.vy; 
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

//♡をかく関数
function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;


  const s ={
    x: mouseX,
    y: mouseY,
    size: random(10, 100),
    vx: dx+5,
    vy: dy+5,
  };

  if (keyIsDown("A".charCodeAt(0))) {//Aを押しているときはハートに
    s.type = 'heart';
    s.color = color(255, 192, 203); // ピンクに
  } else {
    s.type = 'star';
    s.color = color(255, 204, 0); // 黄色に
  }

  shapes.push(s);
} 



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}