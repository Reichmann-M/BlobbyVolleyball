function changeVel(){
  //Spieler1 Änderung vx
  if(player1.latestkey==68){
    if(keys[65]){
      player1.vel.x=-6;
    }
    if(keys[68]){
      player1.vel.x=6;
    }
  }else{
    if(keys[68]){
      player1.vel.x=6;
    }
    if(keys[65]){
      player1.vel.x=-6;
    }
  }
  if(!keys[65]&&!keys[68]){
    player1.vel.x=0;
  }
  if(keys[87]){
    if(player1.grounded){
      player1.vel.y=-12.5;
      player1.grounded=false;
    }
  }

  //Spieler2 Änderung vx
  if(player2.latestkey==39){
    if(keys[37]){
      player2.vel.x=-6;
    }
    if(keys[39]){
      player2.vel.x=6;
    }
  }else{
    if(keys[39]){
      player2.vel.x=6;
    }
    if(keys[37]){
      player2.vel.x=-6;
    }
  }
  if(!keys[37]&&!keys[39]){
    player2.vel.x=0;
  }
  if(keys[38]){
    if(player2.grounded){
      player2.vel.y=-12.5;
      player2.grounded=false;
    }
  }
}

window.onkeydown=function(e){
  keys[e.keyCode]=true;
  if(e.keyCode==65||e.keyCode==68){
    player1.latestkey=e.keyCode;
  }else if(e.keyCode==37||e.keyCode==39){
    player2.latestkey=e.keyCode;
  }
}
window.onkeyup=function(e){
  keys[e.keyCode]=false;
}
function mousePressed(){
  loop();
  if(endgame()){
    restart();
  }
}

window.addEventListener("keydown", function(e) {
    //space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
