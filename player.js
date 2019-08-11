class Player{
  constructor(side){
    this.side=side;
    if(this.side=="left"){
      this.defaultpos=createVector(width/4,height-height/8);
    }else{
      this.defaultpos=createVector(width*3/4,height-height/8);;
    }
    this.x=this.defaultpos.x;
    this.y=this.defaultpos.y;
    this.start_y=this.y;
    this.vel=createVector(0,0);
    this.size=70;
    this.grav=0.2;
    this.latestkey=null;
    this.grounded=true;
    if(this.side=="left"){
      this.border_x=net.x-net.w/2-this.size/2;
    }else{
      this.border_x=net.x+net.w/2+this.size/2;
    }
    this.score=0;
    if(side=="left"){
      this.img=player1Img;
    }else{
      this.img=player2Img;
    }
  }
  show(){
    push();
    fill(0);
    noStroke();
    imageMode(CENTER);
    image(this.img,this.x,this.y,this.size,this.size*1.5)
    // rect(this.x,this.y,this.size,this.size*1.5);
    pop();
    textSize(30);
    if(this.side=="left"){
      text(this.score,width/20,height/15);
    }else{
      text(this.score,width-width/20-30,height/15);
    }
  }
  update(){
    this.x+=this.vel.x;
    this.y+=this.vel.y;
    if(!this.grounded){
      this.vel.y+=this.grav;
    }
    if(this.y>this.start_y){
      this.grounded=true;
      this.y=this.start_y;
      this.vel.y=0;
    }
    if(this.side=="left"&&this.x>this.border_x){
      this.x=this.border_x;
    }else if(this.side!="left"&&this.x<this.border_x){
      this.x=this.border_x;
    }
    if(this.x-this.size/2<0){
      this.x=this.size/2;
    }
    if(this.x+this.size/2>width){
      this.x=width-this.size/2;
    }
  }
  hitball(){
    if(this.y-this.size*1.5/2<=ball.y+ball.size/2&&this.y+this.size*1.5/2>=ball.y-ball.size/2){
      if(this.x-this.size/2<=ball.x+ball.size/2&&this.x+this.size/2>=ball.x-ball.size/2){
        ball.x-=ball.vel.x;
        ball.y-=ball.vel.y;
        ball.vel.x=(ball.x-this.x)/8;
        ball.vel.y=(ball.y-this.y)/7;
        if(this.y<ball.y){
          ball.vel.mult(2.8);
        }
        ball.x+=ball.vel.x;
        ball.y+=ball.vel.y;
        ball.inair=true;
        counthits(this);
        splashsound.play();
      }
    }
  }
}