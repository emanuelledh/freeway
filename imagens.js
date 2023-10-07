let estrada;
let ator;
let carros = [1, 2, 3];

//sons
let somDaTrilha;
let somDaColisao;
let somDosPontos;

function preload(){
  estrada = loadImage ("imagens/estrada.png");
  ator = loadImage ("imagens/ator-1.png");
  carros[0] = loadImage ("imagens/carro-1.png");
  carros[1] = loadImage ("imagens/carro-2.png");
  carros[2] = loadImage ("imagens/carro-3.png");
  imagemCarros = [carros[0], carros[1], carros[2], carros[0], carros[1], carros[2]];

  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDosPontos = loadSound("sons/pontos.wav");


}