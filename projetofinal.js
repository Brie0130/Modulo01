const prompt = require("prompt-sync")();
console.clear();

var dia = 1;
var hora = 7;

console.log(`Bem vinde ao jogo de RPG baseado no RPG Ordem Paranormal`);
console.log();
console.log(`Vamos começar, qual é o seu nome? `);
let nome = prompt();
console.log();
/*
console.log(`Quais são os seus pronomes     
           1 - Ela/Dela 2 - Ele/dele`);
    let pronomes = +prompt();
    if (pronomes == 1) {
    let pronome = "ela";
    }
*/

let status = {
  nome: nome,
  vida: 35,
  forca: 0,
  atirar: 6,
};

function tempo() {
  if (hora > 23) {
    let time = hora - 24;
    hora = 0 + time;
    dia++;
    if (hora <= 9) {
      console.log("Horário: 0", hora);
      console.log("Dia", dia);
    }
  }
}

console.log(
  `Existem dois mundos:  o Normal e o Paranormal. O normal é o que a maioria dos humanos tem acesso,  o Paranormal é um lugar onde o ímpossivel pode acontecer. No Paranormal existem criaturas indescritíveis, só de olhar-lás um humano comum pode enlouquecer completamente.`
);
let enter = prompt();
console.log(
  `Os dois mundos são divididos por uma camada chamada de Membrana, que impede que o Normal e o Paranormal entrem em contato. No entanto, essa Membrana pode se enfraquecer com o aumento do medo do sobrenatural, levando monstros horrendos e muito perigosos a invadirem nossa realidade. Esse fenômeno geralmente ocorre em locais bem específicos, propensos à percepção de medo, como hospitais abandonados, casas antigas e sanatórios desativados.`
);
console.log();
console.log(
  `Ao redor do mundo inteiro diversos grupos se formaram, buscando enfraquecer a Membrana o máximo possível, a fim de destruí-la e levar à fusão das dimensões, com o objetivo de buscar seus próprios desejos ou, quem sabe, cumprindo um propósito maior. Os membros desses grupos são chamados de Ocultistas.`
);
enter = prompt();
console.log(
  `Para impedir que o caos se instale, uma organização global secreta foi criada: a Ordo Realitas. Pessoas comuns que vivem vidas duplas para impedir os atos Ocultistas, que têm como objetivo o aumento do contato entre a população com o paranormal, aumentando seu medo e, consequentemente, enfraquecendo a membrana e permitindo a interferência do paranormal.`
);

enter = prompt();
console.log(
  `Para impedir que o caos se instale, uma organização global secreta foi criada: a Ordo Realitas. Pessoas comuns que vivem vidas duplas para impedir os atos Ocultistas, que têm como objetivo o aumento do contato entre a população com o paranormal, aumentando seu medo e, consequentemente, enfraquecendo a membrana e permitindo a interferência do paranormal.`
);

enter = prompt();
console.log(
  `Agora que você tem todas essas informações, está na hora de você proteger a menbrana! Pressione enter para continuar. `
);

enter = prompt();

console.clear();

function manha() {
  console.log(
    `Você ouve o alarme do seu celular tocar, são ${hora} da manhã de ${dia} de março de 2019 e é seu dia de folga do trabalho. O que você quer fazer?`
  );
  console.log();
  console.log(`   1 - Desligar o celular e dormir mais um pouco 
    2 - Levantar da cama e tomar seu café da manhã 
    3 - Se levantar e se exercitar`);

  let manha1 = +prompt();

  if (manha1 == 1) {
    console.log(
      `${nome}, você dormiu até mais tarde e recebou um adendo de 5 na energia`
    );
    hora+=1
    tempo();

  } else if (manha1 == 2) {

  } else if (manha1 == 3) {

  } else {
      
  }
}

manha()
console.log (hora)