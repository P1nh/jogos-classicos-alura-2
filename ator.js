//variaveis do ator

let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos =0;

function mostraAtor (){
    image(imagemAtor,xAtor,yAtor,30,30);
  }

  function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
        if(podeSeMover())
      yAtor += 3;
    }
  }

  function verificaColisao(){
    for (let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro,
        alturaCarro, xAtor,yAtor,15);
        if(colisao){
            voltaAtorParaInicio();
            somColisao.play();
            if(pontosMaiorQueZero()){
                meusPontos -= 1;
            }
        }
    }
  }

  function voltaAtorParaInicio(){
    return yAtor = 370;
  }

  function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255,255,0))
    text(meusPontos, width/5, 27);
  }

  function marcaPonto(){
    if(yAtor<15){
        meusPontos +=1;
        somPonto.play();
        voltaAtorParaInicio();
    }
  }

  function pontosMaiorQueZero(){
    return meusPontos > 0;
  }

  function podeSeMover(){
    return yAtor < 370;
  }