/* Inicio Supertrunfo */
var cartaRobert = {
    nome: "Carambom",
    imagem: "./img/Carambom.png",
    atributos: {
        ataque: 85,
        defesa: 90,
        magia: 20
    }
}

var cartaSara = {
    nome: "Sara",
    imagem: "./img/sara.jpeg",
    atributos:{
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaSophia = {
    nome: "S.M. Silveira",
    imagem: "./img/s_m_silveira.png",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaSonic= {
    nome: "Sonic",
    imagem: "https://i.pinimg.com/originals/61/87/d1/6187d14bb4549417ddef155e3bf9715a.jpg",
    atributos: {
        ataque: 50,
        defesa: 45,
        magia: 100
    }
}

var cartaIvy = {
    nome: "Ivy Valentine",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcilzl_YxgYdwSmUtS-IFHe92svvg0tQ7qw&usqp=CAU",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaVarric = {
    nome: "Varric",
    imagem: "https://pbs.twimg.com/profile_images/1722976969/varric.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 40
    }
}

var cartaShepard = {
    nome: "Com. Shepard",
    imagem: "https://cdn.suwalls.com/wallpapers/games/commander-shepard-mass-effect-41785-1920x1200.jpg",
    atributos: {
        ataque: 85,
        defesa: 80,
        magia: 30
    }
}

var cartaFortune = {
    nome: "Miss Fortune",
    imagem: "https://i.pinimg.com/originals/18/08/c4/1808c427f3452f3c873e899756848fb4.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

var cartaKatarina = {
    nome: "Katarina",
    imagem: "https://static.wikia.nocookie.net/leagueoflegends/images/4/4b/Katarina_OriginalCentered.jpg/revision/latest/scale-to-width-down/1280?cb=20180414203326",
    atributos: {
        ataque: 60,
        defesa: 70,
        magia: 20
    }
}

var cartaSuper = {
    nome: "Super Trunfo",
    imagem: "./img/supertrunfo.png",
    atributos: {
        ataque: 100,
        defesa: 100,
        magia: 100
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaRobert, cartaSara, cartaSophia, cartaSonic, cartaIvy, cartaVarric, cartaShepard, cartaFortune, cartaKatarina, cartaSuper]
//                0           1           2          3         4            5            6             7              8            9

var pontosJogador = 0;
var pontosMaquina = 0;

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar');
  var html = 'Jogador: '+pontosJogador+' / '+pontosMaquina+' :Máquina'
  
  divPlacar.innerHTML = html;
}

atualizaPlacar();
atualizaQuantidadeDeCartas();

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas');
  var html = 'Quantidades de cartas no jogo: '+cartas.length;
  
  divQuantidadeCartas.innerHTML = html;
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
  
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador();
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    document.getElementById('btnJogar').disabled = true

  if(cartas.length == 0) {
      alert('Fim de jogo.')
      if(pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">Parabéns, você venceu a máquina</p>'
      } else if (pontosJogador == pontosMaquina) {
        htmlResultado = '<p class="resultado-final">Empataram</p>'
      } else {
        htmlResultado = '<p class="resultado-final">Que pena, você perdeu o jodo</p>'
      }
    } else {
      document.getElementById('btnProximaRodada').disabled = false
    }
  
    divResultado.innerHTML = htmlResultado

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas');
  divCartas.innerHTML = `<div id='carta-jogador' class="carta"></div> <div id="carta-maquina" class="carta" ></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnProximaRodada').disabled = true
  var divResultado = document.getElementById('resultado')
  
  divResultado.innerHTML = '';

}
/* Fim Supertrunfo */

/* inicio modal */
function abrirModal() {
    document.getElementById('cortina').style.backgroundColor = "rgba(0,0,0,0.7)";
    document.getElementById('modal').style.marginTop = "80px";
}

function fecharModal() {
    document.getElementById('cortina').style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById('modal').style.marginTop = "-500px";
}
/* fim modal */

/* inicio validação */
function cadastrar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    

    document.getElementById('resultado').innerHTML = "Cadastro feito com sucesso, fique atento ao seu e-mail ";
    document.getElementById('resultado').style.color = 'green';
    document.getElementById('nome').style.border = "none";
    document.getElementById('email').style.border = "none";

}


function validar(){

    if(document.getElementById('nome').value == "" || document.getElementById('email').value == ""){


        if(document.getElementById('nome').value == "" && document.getElementById('email').value == ""){
            document.getElementById('resultado').innerHTML = "Preencha os campos nome e e-mail!";
            document.getElementById('resultado').style.color = 'red';
            document.getElementById('nome').style.border = "solid 0.5px red";
            document.getElementById('email').style.border = "solid 0.5px red";
            document.getElementById('nome').style.backgroundColor = "rgba(255,0,0,0.2)";
            document.getElementById('email').style.backgroundColor = "rgba(255,0,0,0.2)";
        }else if(document.getElementById('nome').value == ""){
            document.getElementById('resultado').innerHTML = "Preencha o campo com o seu nome!";
            document.getElementById('resultado').style.color = 'red';
            document.getElementById('nome').style.border = "solid 0.5px red";
            document.getElementById('email').style.border = "none";
            document.getElementById('nome').focus;
        }else{
            document.getElementById('resultado').innerHTML = "Preencha o campo o seu e-mail!";
            document.getElementById('resultado').style.color = 'red';
            document.getElementById('email').style.border = "solid 0.5px red";
            document.getElementById('nome').style.border = "none";
            document.getElementById('email').focus;
        }

    }else{
        cadastrar();
    }

}

function desfazerNome(){
        document.getElementById('nome').style.border = "none";
        document.getElementById('nome').style.background= "white";
}

function desfazerEmail(){
        document.getElementById('email').style.border = "none";
        document.getElementById('email').style.background= "white";
}
/* Fim validação */