let xAtor=85;
let yAtor= 366;
let colisao=false;
let meusPontos=0;


function mostraAtor (){
    image(ator, xAtor, yAtor, 30, 30);
 }

function movimentaAtor (){
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
 if(keyIsDown (DOWN_ARROW)) {
   if(yAtor<366){
          yAtor += 3;   

    }
}  
  
}
function verificaColisao (){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      voltaAtor ();
      somDaColisao.play()
;      if(pontosMaiorQueZero()){
      meusPontos -=1;
      }
      
    }
  }
  
}
function voltaAtor (){
  yAtor=366;
}

function incluiPontos(){
  textAlign(CENTER); 
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width/5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDosPontos.play();
    voltaAtor();
  }
}

function pontosMaiorQueZero (){
  return meusPontos>0;
}













