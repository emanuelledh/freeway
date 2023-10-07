function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(estrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicial ();
  verificaColisao ();
  incluiPontos();
  marcaPonto();
}



