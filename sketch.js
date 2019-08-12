function preload(){
  bgImage=loadImage('bg.jpg')
  player1Img=loadImage("player1.png");
  player2Img=loadImage("player2.png");
  ballImg=loadImage("ball.png");
  winImg=loadImage("winImg.png")
  splashsound=loadSound("hitball.mp3");
  scoresound=loadSound("score.mp3");
  schmettern=loadSound("schmettern.mp3");
  win=loadSound("win.mp3");
}
function setup() {
  createCanvas(1200,800);
  bgsetup();
  net=new Net();
  player1=new Player('left');
  player2=new Player('right');
  ball= new Ball();
}

function draw() {
  background(bg);
  changeBG();
  game();
  player1.show();
  player2.show();
  player1.update();
  player2.update();
  player1.hitball();
  player2.hitball();
  net.show();
  changeVel();
  ball.hitnet();
  ball.show();
  ball.update();
  ball.hitscreenedge();
}

function changeBG(){
  if(document.getElementById('greenscreen').checked){
    bg='#088A08';
  }else{
    bg=bgImage;
  }
}
