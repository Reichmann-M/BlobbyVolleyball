function scored(){
  if(ball.y>=player1.defaultpos.y+player1.size*1.5/2){
    return true;
  }else{
    return false;
  }
}
function reset(side){
  hitcountleft=0;
  hitcountright=0;
  ball=new Ball(side);
  player1.vel.mult(0);
  player2.vel.mult(0);
  player1.x=player1.defaultpos.x;
  player1.y=player1.defaultpos.y;
  player2.x=player2.defaultpos.x;
  player2.y=player2.defaultpos.y;
  if(side=="left"){
    player1.score++;
  }else if(side=="right"){
    player2.score++;
  }
}
function game(){
  if(scored()){
    scoresound.play();
    if(ball.side=="left"){
      reset("right");
    }else{
      reset("left");
    }
  }
  endscreen();
  disableOptions();
}
function counthits(player){
  if(player.side=="left"){
    hitcountright=0;
    hitcountleft++;
    if(hitcountleft>3){
      reset("right");
    }
  }else{
    hitcountleft=0;
    hitcountright++;
    if(hitcountright>3){
      reset("left");
    }
  }
}
function gamelength(){
  return document.getElementById("rounds").value;
}

function disableOptions(){
  var options=document.getElementById("rounds").getElementsByTagName("option");
  for(var i=0;i<options.length;i++){
    if(player1.score>=options[i].value||player2.score>=options[i].value){
      options[i].disabled=true;
    }else{
      options[i].disabled=false;
    }
  }
}
function endgame(){
  if(gamelength()<=player1.score){
    return "Player 1"
  }else if(gamelength()<=player2.score){
    return "Player 2"
  }else{
    return false;
  }
}

function restart(){
  player1.score=0;
  player2.score=0;
  reset();
}

function endscreen(){
  if(endgame()){
    push();
    textSize(50);
    text("Victory Royale: "+endgame(),width/4,height/8);
    text("Press mouse to continue", 10,height/2-60);
    pop();
    noLoop();
  }
}
