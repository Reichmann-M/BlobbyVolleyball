class Ball{
  constructor(side){
    if(side){
      if(side=="left"){
        this.x=width/4;
        hitcountleft=2;
      }else{
        this.x=width*3/4;
        hitcountright=2;
      }
    }else{
      this.side=random(1);
      if(this.side<0.5){
        this.x=width/4;
        hitcountleft=2;
      }else{
        this.x=width*3/4;
        hitcountright=2;
      }
    }

    this.y=height/1.9;
    this.size=60;
    this.vel=createVector(0,0);
    this.inair=false;
    this.grav=0.2;
    this.airres=0.01;
    this.side;
    this.img=ballImg;
  }
  show(){
    push();
    imageMode(CENTER);
    image(this.img,this.x,this.y,this.size,this.size);
    // ellipse(this.x,this.y,this.size);
    pop();
    if(this.y+this.size/2<0){
      push();
      fill(200,100,100)
      stroke(0);
      strokeWeight(10);
      ellipse(this.x,50,25,25);
      pop();
    }

  }
  update(){
    this.x+=this.vel.x;
    this.y+=this.vel.y;
    if(this.inair){
      this.vel.y+=this.grav;
      if(this.vel.x<0){
        this.vel.x+=this.airres;
      }else if(this.vel.x>0){
        this.vel.x-=this.airres
      }
      if(this.x<width/2){
        this.side="left";
      }else if(this.x>width/2){
        this.side="right";
      }
    }
    // if(this.side=="right"){
    //   if(this.y+this.size/2+this.vel.y>=height-net.h&&this.x+this.vel.x-this.size/2<net.x){
    //     this.x=net.x+net.w-1;
    //   }
    // }else{
    //   if(this.y+this.size/2+this.vel.y>=height-net.h&&this.x+this.vel.x+this.size/2>net.x){
    //     this.x=net.x-net.w+1;
    //   }
    // }
  }
  hitscreenedge(){
    if(this.x-this.size/2<0||this.x+this.size/2>width){
      this.vel.x=-this.vel.x;
      if(this.side=="left"){
        this.x=this.size/2;
      }else{
        this.x=width-this.size/2;
      }
    }
  }
  hitnet(){
    if(this.x+this.size/2>net.x-net.w/2&&this.x-this.size/2<net.x+net.w/2){
      if(this.y>height-net.h+net.w){
        splashsound.play();
        this.vel.x=-this.vel.x;
        if(this.x<net.x){
          this.x=net.x-net.w/2-this.size/2;
        }else{
          this.x=net.x+net.w/2+this.size/2
        }
      }
    }

    if(this.x+this.size/2>net.x-net.w/2&&this.x-this.size/2<net.x+net.w/2){
      if(this.y<height-net.h+net.w&&this.y>height-net.h){
        this.x-=this.vel.x;
        this.y-=this.vel.y;
        var l=this.vel.x*this.vel.x+this.vel.y*this.vel.y;
        this.vel.x=this.x-net.x;
        this.vel.y=this.y-net.h-net.w;
        var x=(this.vel.x*this.vel.x+this.vel.y*this.vel.y)/l;
        x=Math.sqrt(x);
        this.vel.x/=x;
        this.vel.y/=x;
        splashsound.play();
      }
    }
  }
}
