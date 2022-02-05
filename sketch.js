function setup() {
  createCanvas(600, 400);
}
  //variáveis da bolinha
  let xBolinha= 300;
  let yBolinha= 200;
  let dBolinha= 20;
  let raio = dBolinha /2;

// variáveis da velocidade
  let velocidadeXBolinha= 6;
  let velocidadeYBolinha= 6;
  
// variáves da raquete
  let xRaquete= 5;
  let yRaquete=150
  let AlturaRaquete=10;
  let larguraRaquete=90;

  let colidiu = false;

// variáves da raquete do oponente

  let xRaqueteOponente=585;
  let yRaqueteOponente=150;
  let velocidadeYOponente;

function draw() {
  background(0);
 criaBolinha();
 criaRaquete(xRaquete, yRaquete);
 criaRaquete(xRaqueteOponente, yRaqueteOponente);
 movimentaBolinha();
 tocaNaBorda();
 movimentaMinhaRaquete();
 verificaColisaoRaquete();
 colisaoMinhaRaqueteBiblioteca();
 movimentaRaqueteOponente();
 
}
 
function criaBolinha(){
   circle(xBolinha,yBolinha,dBolinha);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function tocaNaBorda(){
  
 if(xBolinha+raio> width || xBolinha-raio<0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha+raio> height || yBolinha-raio<0){
    velocidadeYBolinha *= -1;
  }

}

function criaRaquete(x, y){
   rect(x,y,AlturaRaquete,larguraRaquete);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
  
}

function movimentaRaqueteOponente(){
  velocidadeYOponente= yBolinha- yRaqueteOponente - AlturaRaquete/2 -30;
  yRaqueteOponente += velocidadeYOponente;
}

function verificaColisaoRaquete(){
  if(xBolinha-raio< xRaquete+AlturaRaquete && yBolinha-raio<yRaquete+AlturaRaquete && yBolinha+raio> yRaquete){
     velocidadeXBolinha*= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca(){
  colidiu= collideRectCircle(xRaquete, yRaquete, larguraRaquete, AlturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha*= -1;
  }
}

