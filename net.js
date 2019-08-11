class Net{
  constructor(){
    this.w=20;
    this.h=height/2;
    this.x=width/2;
    this.y=height;
  }
  show(){
    push();
    noStroke();
    fill(55);
    ellipse(this.x,this.h+this.w,this.w);
    rect(this.x-net.w/2,this.y,this.w,-this.h+this.w);
    pop();
  }
}
