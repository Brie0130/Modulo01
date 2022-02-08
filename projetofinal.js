const prompt = require("prompt-sync")();
console.clear();

var dia = 1;
var hora = 6;
var contagemmanhã = 0;
let aleat = 0;
let nome = "";
let parar = true;
let rolagem1d6 = 0;

let status = {
  nome: "",
  vida: 0,
  sanidade: 0,
  forca: 0,
  pontaria: 0,
  energia: 0,
  hora: 6,
  dia: 1,
  minutos: 00,

  ganharVida: function (valor) {
    this.vida += valor;
  },

  perderVida: function (valor) {
    this.vida -= valor;
  },

  ganharEnergia: function (valor) {
    this.energia += valor;
  },

  perderEnergia: function (valor) {
    this.energia -= valor;
  },

  ganharSanidade: function (valor) {
    this.sanidade += valor;
  },

  perderSanidade: function (valor) {
    this.sanidade -= valor;
  },

  ganharForca: function (valor) {
    this.forca += valor;
  },

  AumentarHora: function (valor) {
    this.hora += valor;
    if (this.hora) {
    }
  },
};

function tempo() {
  if (hora > 23) {
    let time = hora - 24;
    hora = 0 + time;
    dia++;
  }
}

function sorteio() {
  let dados1d6 = Math.floor(1 + 6 * Math.random());
  let rolagem1d6 = dados1d6 * 3 * 5;
  return rolagem1d6;
}

console.log(
  `Existem dois mundos:  o Normal e o Paranormal. O normal é o que a maioria dos humanos tem acesso,  o Paranormal é um lugar onde o ímpossivel pode acontecer. No Paranormal existem criaturas indescritíveis, só de olhar-lás um humano comum pode enlouquecer completamente.`
);
console.log();
enter = prompt();

console.log(
  `Os dois mundos são divididos por uma camada chamada de Membrana, que impede que o Normal e o Paranormal entrem em contato. No entanto, essa Membrana pode se enfraquecer com o aumento do medo do sobrenatural, levando monstros horrendos e muito perigosos a invadirem nossa realidade. Esse fenômeno geralmente ocorre em locais bem específicos, propensos à percepção de medo, como hospitais abandonados, casas antigas e sanatórios desativados.`
);
console.log();
enter = prompt();

console.log(
  `Ao redor do mundo inteiro diversos grupos se formaram, buscando enfraquecer a Membrana o máximo possível, a fim de destruí-la e levar à fusão das dimensões, com o objetivo de buscar seus próprios desejos ou, quem sabe, cumprindo um propósito maior. Os membros desses grupos são chamados de Ocultistas.`
);
console.log();
enter = prompt();

console.log(
  `Para impedir que o caos se instale, uma organização global secreta foi criada: a Ordo Realitas. Pessoas comuns que vivem vidas duplas para impedir os atos Ocultistas, que têm como objetivo o aumento do contato entre a população com o paranormal, aumentando seu medo e, consequentemente, enfraquecendo a membrana e permitindo a interferência do paranormal.`
);
console.log();
enter = prompt();

console.log(
  `Agora que você tem todas essas informações, está na hora de você proteger a menbrana! Pressione enter para continuar. `
);
console.log();
enter = prompt();

console.clear();

console.log("Vamos definir seus atributos como agente da Ordem");
console.log();

enter = prompt("Vamos fazer a primeira rolagem, para determinar a Força...");
let rolagem1d6 = sorteio();
status.forca = rolagem1d6;
console.log(`A sua força será: ${rolagem1d6}`);

enter = prompt("Vamos fazer a segunda rolagem, para determinar a Sanidade...");
rolagem1d6 = sorteio();
status.sanidade = rolagem1d6;
console.log(`A sua sanidade será: ${rolagem1d6}`);

enter = prompt("Vamos fazer a terceira rolagem, para determinar a pontaria...");
rolagem1d6 = sorteio();
status.pontaria = rolagem1d6;
console.log(`A sua pontaria será: ${rolagem1d6}`);

enter = prompt("Agora a quarta rolagem, para determinar a sua vida...");
rolagem1d6 = sorteio();
status.vida = rolagem1d6;
console.log(`A sua vida será: ${rolagem1d6}`);

enter = prompt("A quinta rolagem, para determinar a sua Energia...");
rolagem1d6 = sorteio();
status.energia = rolagem1d6;
console.log(`A sua energia será: ${rolagem1d6}`);

//usar console log separadente aqui nesse objeto
console.log(`Os seus atributos inicias são`, status.nome, status.energia);
enter = prompt();

let nomedefinido = prompt("Agora, só falta me dizer seu nome: ");
status.nome = nomedefinido;

console.clear();

function manha() {
  while (parar) {
    console.log(
      `Você ouve o alarme do seu celular tocar, são ${hora} da manhã de ${dia} de março de 2019 e é seu dia de folga do trabalho. O que você quer fazer?`
    );
    console.log();
    console.log(`   1 - Desligar o celular e dormir mais um pouco 
    2 - Levantar da cama e tomar seu café da manhã 
    3 - Se levantar e se exercitar`);
    console.log();
    let manha1 = +prompt();

    if (manha1 == 1) {
      console.log(
        `${nome}, você dormiu até mais tarde e recebou um adendo de 5 na energia.`
      );
      hora += 2;
      tempo();
      valor = 5;
      status.ganharEnergia(valor);
    } else if (manha1 == 2) {
      console.log(
        `Você acordou as ${hora} horas e fez um café da manhã reforçado, você ganhou mais 10 de energia.`
      );
      hora += 1;
      tempo();
      valor = 10;
      status.ganharEnergia(valor);
    } else if (manha1 == 3) {
      console.log(
        `Você acordou as ${hora} horas e foi se exercitar antes do café da manhã, isso lhe rendeu um acressímo de 2 na força.`
      );
      hora += 1;
      tempo();
      valor = 2;
      status.ganharForca(valor);
    } else {
      console.log("Você não inseriu uma escolha válida, vamos tentar de novo");
      continue;
    }
    while (hora < 10) {
      console.log(
        "Você ainda tem um tempo livre, o que você gostaria de fazer?"
      );
      console.log(
        "1 - Ler um livro 2 - Ligar para um amigo e conversar 3 - Jogar League of Legends"
      );
      let escolha1 = +prompt("Sua escolha: ");

      if (escolha1 == 1) {
        aleat = Math.floor(Math.random() * (1 + 1) + 1);
        if (aleat == 1) {
          console.log(
            "Você leu um livro mas infelizmente o plot era horrível. Tempo definitivamente mal gasto"
          );
          hora += 2;
          tempo();
        } else {
          console.log(
            "Você acabou lendo um livro que parece ser íncrivel, você ganhou mais 1 de sanidade"
          );
        }
        hora += 2;
        tempo();
        valor = 1;
        status.ganharSanidade(valor);
      } else if (escolha1 == 2) {
        aleat = Math.floor(Math.random() * (1 + 1) + 1);
        if (aleat == 1) {
          console.log(
            "Você tenta falar com um amigo mas ele não atende. Deve estar ocupado.."
          );
          hora += 0.15;
          tempo();
        } else {
          console.log(
            "Você conversa com um amigo com quem você não falava a tempos! Você se lembra de como essa amizade era boa e ganha mais 2 pontos de sanidade"
          );
        }
        hora += 2;
        tempo();
        valor = 2;
        status.ganharSanidade(valor);
      } else if (escolha1 == 3) {
        aleat = Math.floor(Math.random() * (1 + 1) + 1);
        if (aleat == 1) {
          console.log(
            "Você jogou algumas partidas super estressantes de LOL, os jogadores do seu time eram ruins e ainda te xingavam. Você perdeu 1 de sanidade"
          );
          hora += 3;
          tempo();
          valor = 1;
          status.perderSanidade(valor);
        } else {
          console.log(
            "Você jogou algumas partidas bem mais ou menos de LOL. Nada muito ruim mas também nada expecional"
          );
          hora += 3;
          tempo();
        }
      } else {
        console.log(
          "Você não inseriu uma escolha válida, vamos tentar de novo"
        );
        continue;
      }
    }

    if (hora > 10) {
      parar = false;
      console.log(`Já são ${hora} horas.`);
      enter = prompt();
      console.clear();
      if (contagemmanhã == 0) {
        console.log(
          "Seu telfone começa a tocar e você o atende. Uma voz do outro lado diz 'Sr. Verrissímo, ocorreu uma aparição paranormal na Escola Nostradamus de Ensino Médio, temos conhecimento de que o incêndio ocorrido lá tem forte presença paranormal. Dirija-se para lá imediatamente e, lembre-se, pessoas comuns não devem ter real conhecimento do que você investiga.  '"
        );
      } else if (contagemmanhã == 1)
        console.log(
          `Seu telefone toca, ao atendê-lo você ouve: "Sr. Vérissimo, temos conhecimento de atividades paranormais no Hotel Sem Saída, diriga-se para lá e derrote os seres paranormais".`
        );
      else if (contagemmanhã > 1) {
        // colocar um for aqui para aleatorizar montros nos dias seguintes
      }
      contagemmanhã++;
    }
  }
}

function manhaENEM() {
  hora += 2;
  console.log(
    `Você se dirige até a Escola Nostradamus de Ensino Médio, abreviada para ENEM. Se passam duas horas.`
  );
  console.log();
  console.clear();
  console.log(`São ${hora} horas de ${dia} de março de 2019`);
  console.log();
  console.log(
    "Você se vê diante de uma escola que foi carbonizada. Há alguns policiais na frente, o que você quer fazer?"
  );
  console.log(" 1 - Vá falar com os policiais");
  console.log("2 - Tente entrar no escondido");
  console.log("3 - Ligue para a Ordem e pergunte sobre mais informações");
  let escolha2 = prompt('Sua escolha: ');
  if (escolha2 == 1) {
    console.log('Você se dirige aos policiais, o que você de')
  }

}

manha();
//manhaENEM();

//console.log(hora);
