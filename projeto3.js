const prompt = require("prompt-sync")();
console.clear();
let parar = true
let valor = 0
let status = {
  nome: "",
  vida: 0,
  sorte: 0,
  sanidadde: 0,
  carisma: 0,
  força: 0,
  hora: 6,
  min: 0,
    dia: 1,

    ganharForça: function (valor) {
        this.força += valor
        return this.forca

    },
    //PQ EU COLOQUEI RETURN?????

  ganharVida: function (valor) {
    this.vida += valor;
    return this.vida;
  },

    perderVida: function (valor) {
        this.vida -= valor;
        if (this.vida == 0) {
            console.log("Você morreu :(");
            return true
        } else {
            return false
        }
    },

  ganharSanidade: function (valor) {
    this.sanidade += valor;
  },

  perderSanidade: function (valor) {
    this.sanidade -= valor;
  },

  maisHora: function (valor) {
    this.hora = this.hora + valor;
    if (this.hora >= 24) {
      this.hora = this.hora - 24;
      this.dia++;
    }
  },

  maisMinutos: function (valor) {
    this.min = this.min + valor;
    if (this.min >= 60) {
      this.hora++;
      this.min = this.min - 60;
    }
    },

  mostrarRelogio: function () {
      console.log(`Hoje é dia ${this.dia} de Março de 2019`);
      console.log(`São ${this.hora} horas e ${this.min} minutos.`)
    },
  
};

//vida, força
function rolagemdedados() {
  let dados1d6 = Math.floor(1 + 6 * Math.random());
  let rolagem1d6 = dados1d6 * 3 * 5;
  return rolagem1d6;
}

function rolagem1d6() {
  let dados1d6 = Math.floor(1 + 6 * Math.random());
  return dados1d6;
}

function umEnem() {
  console.log("Você se dirige aos policiais e tenta usar seu charme e simpatia para obter informações, você precisa de 10 pontos de carisma para passar.");
  rolagem = rolagem1d6()
  console.log(`O dado rolou: ${rolagem}`)
  let rolagemPC = rolagem + status.carisma
  console.log(`Juntando com o seu carisma o valor é ${rolagemPC}`);
  if (rolagem >= 10) {
    console.log('Os policiais caem no seu papo e falam ')
  } else {
    console.log('Os policiais não caem')
  }
  console.log()
  status.maisMinutos(20)
}
function tresEnem(escolha) {
  

  console.log(
    "A Ordem é ocupada, você vai precisar tirar 7 de sorte para conseguir falar com eles."
  );
  rolagem = rolagem1d6();
  console.log(`O dado rolou: ${rolagem}`);
  rolagemPC = rolagem + status.sorte;
  console.log(`Juntando com a sua sorte o valor é ${rolagemPC}`);
  if (rolagemPC >= 7) {
    //talvez aleatorizar as dicas?
    console.log("Dica sobre algo");
  } else {
    console.log("Ninguêm atende");
  }
  console.log();
  status.maisMinutos(5);
}
/*

//1d6, para passar precisa completar 10 (dif), 8 (méd), 7 (fácil)
// Isso funciona: console.log(rolagem1d6())

console.log(
  `Existem dois mundos:  o Normal e o Paranormal. O normal é o que a maioria dos humanos tem acesso,  o Paranormal é um lugar onde o ímpossivel pode acontecer. No Paranormal existem criaturas indescritíveis, só de olhar-lás um humano comum pode enlouquecer completamente.`
);
console.log();
let enter = prompt();

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

enter = prompt("Vamos fazer a primeira rolagem, para determinar a sua Força...");
let rolagem2 = rolagem1d6();
status.força = rolagem2;
console.log(`A sua força será: ${rolagem2}`);

enter = prompt("Vamos fazer a segunda rolagem, para determinar a sua Sanidade...");
let rolagem = rolagemdedados()
status.sanidadde = rolagem;
console.log(`A sua sanidade será: ${rolagem}`);

enter = prompt("Vamos fazer a terceira rolagem, para determinar a sua Sorte...");
rolagem2 = rolagem1d6()
status.sorte = rolagem2;
console.log(`A sua sorte será: ${rolagem2}`);

enter = prompt("Agora a quarta rolagem, para determinar a sua Vida...");
rolagem = rolagemdedados();
//Fazer essa a vida máxima quando o agente dormir
let vidaMax = rolagem
status.vida = rolagem
console.log(`A sua vida será: ${rolagem}`);

enter = prompt("A última rolagem, para determinar seu Carisma...");
rolagem2 = rolagem1d6();
status.carisma = rolagem2;
console.log(`O seu carisma será: ${rolagem2}`);
enter = prompt()
console.clear()
console.log(`Os seus atributos inicias são: `);
console.log(`Sua força: ${status.força}. Ela é necessária para realizar ataques.`);
console.log(`Sua sanidade: ${status.sanidadde}. Ela diminui conforme você avista seres paranormais e aumenta com bons acontecimentos`);
console.log(`Sua sorte: ${status.sorte}. Sua sorte pode te ajudar em situações arriscadas `);
console.log(`Sua vida: ${status.vida}. Se sua vida zerar, você morre. Você restaura vida ao dormir`);
console.log(`Seu carisma: ${status.carisma}. Seu carisma te ajuda a enganar e encantar pessoas.`);
enter = prompt();

let nomedefinido = prompt("Agora, só falta me dizer o nome do seu agente: ");
status.nome = nomedefinido;
console.clear()
*/
/*
function manha() {
    let pausa = 0
    while (pausa == 0) {
        status.mostrarRelogio()
        console.log(
            `Você ouve o alarme do seu celular tocar, é seu dia de folga do trabalho. O que você quer fazer?`);
      
        console.log();
        console.log(`   1 - Desligar o celular e dormir mais um pouco 
    2 - Levantar da cama e tomar seu café da manhã 
    3 - Se levantar e se exercitar`);
        console.log();
        let manha1 = +prompt("Sua escolha: ");

        if (manha1 == 1) {
            console.log(
                `${status.nome}, você dormiu até mais tarde e recebou um adendo de 2 na vida por ter descansado mais.`
            );
            status.maisHora(2)
            //valor = 5;
            status.ganharVida(5);
        } else if (manha1 == 2) {
            console.log(
                `Você acordou as ${status.hora} horas e fez um café da manhã reforçado, você ganhou mais 5 de vida.`
            );
            status.maisHora(2)
            //valor = 10;
            status.ganharVida(10);
        } else if (manha1 == 3) {
            console.log(
                `Você acordou as ${status.hora} horas e foi se exercitar antes do café da manhã, isso lhe rendeu um acressímo de 2 na força.`
            );
            status.maisHora(2);
            status.ganharForça(2)
    
        } else {
            console.log("Você não inseriu uma escolha válida, vamos tentar de novo");
            continue;
        }
        pausa = +1
    }
        
    while (status.hora < 10) {
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
          status.maisHora(2)
        } else {
          console.log(
            "Você acabou lendo um livro que parece ser íncrivel, você ganhou mais 1 de sanidade"
          );
        }
status.maisHora(2);
        valor = 1;
        status.ganharSanidade(valor);
      } else if (escolha1 == 2) {
                aleat = Math.floor(Math.random() * (1 + 1) + 1);
                if (aleat == 1) {
                console.log(
                    "Você tenta falar com um amigo mas ele não atende. Deve estar ocupado.."
                );
                status.maisMinutos(15)
                } else {
                console.log(
                    "Você conversa com um amigo com quem você não falava a tempos! Você se lembra de como essa amizade era boa e ganha mais 2 pontos de sanidade"
                    );
                status.maisHora(2);
                valor = 2;
                status.ganharSanidade(valor);
                }
            } else if (escolha1 == 3) {
        aleat = Math.floor(Math.random() * (1 + 1) + 1);
        if (aleat == 1) {
          console.log(
            "Você jogou algumas partidas super estressantes de LOL, os jogadores do seu time eram ruins e ainda te xingavam. Você perdeu 1 de sanidade"
          );
          status.maisHora(3)
          valor = 1;
          status.perderSanidade(valor);
        } else {
          console.log(
            "Você jogou algumas partidas bem mais ou menos de LOL. Nada muito ruim mas também nada expecional"
          );
         status.maisHora(2);
        }
      } else {
        console.log(
          "Você não inseriu uma escolha válida, vamos tentar de novo"
        );
        continue;
      }
    }
    if (status.hora >= 10) {
        console.log(`Já são ${status.hora} horas.`);
      console.log();
        var contagemmanhã = 0
        console.clear();
      if (contagemmanhã == 0) {
        console.log(
          "Seu telfone começa a tocar e você o atende. Uma voz do outro lado diz 'Sr. Verrissímo, ocorreu uma aparição paranormal na Escola Nostradamus de Ensino Médio, temos conhecimento de que o incêndio ocorrido lá tem forte presença paranormal. Dirija-se para lá imediatamente e, lembre-se, pessoas comuns não devem ter real conhecimento do que você investiga.  '"
        );
        enter = prompt();
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

*/
function TardeEnem() {
      status.maisHora(2)
      console.log(
        `Você se dirige até a Escola Nostradamus de Ensino Médio, abreviada para ENEM. Se passam duas horas.`
      );
    console.log();
    enter = prompt()
      console.clear();
      status.mostrarRelogio()
      console.log();
      console.log(
        "Você se vê diante de uma escola que foi carbonizada. Há alguns policiais na frente, o que você quer fazer?"
      );
    console.log("1 - Vá falar com os policiais");
      console.log("2 - Tente entrar no escondido");
    console.log("3 - Ligue para a Ordem e pergunte sobre mais informações");
    console.log()
    let escolha = prompt("Sua escolha: ");
    while (escolha != 1 && escolha != 2 && escolha != 3){
        console.log('A escolha não é válida, digite novamente.')
        escolha = +prompt("Sua escolha: ");
  } 
  
  if (escolha == 1) {
    umEnem()
    console.log("O que vai fazer agora? ");
    console.log("2 - Tente entrar no escondido");
    console.log("3 - Ligue para a Ordem e pergunte sobre mais informações");
    let escolha2 = +prompt("Sua escolha: ");
    while (escolha2 != 2 && escolha2 != 3) {
      console.log("A escolha não é válida, digite novamente.");
      escolha2 = +prompt("Sua escolha: ");
    }
    //else se entrar direto, n colocar dentro de um if
    if (escolha2 == 3) {
      tresEnem()
      console.log("O que vai fazer agora? ");
      console.log("2 - Tente entrar no escondido")
      console.log()
      escolha3 = +prompt("Sua escolha: ");
      while (escolha3 != 2) {
        console.log("A escolha não é válida, digite novamente.");
        escolha3 = +prompt("Sua escolha: ");
      }
    }
  } else if (escolha == 3) {
    tresEnem()
    console.log("O que vai fazer agora? ");
    console.log("1 - Vá falar com os policiais");
    console.log("2 - Tente entrar no escondido");
    escolha2 = +prompt("Sua escolha: ");
    while (escolha2 != 2 && escolha2 != 1) {
      console.log("A escolha não é válida, digite novamente.");
      escolha2 = +prompt("Sua escolha: ");
    }
    if (escolha2 == 1) {
      umEnem()
      console.log("O que vai fazer agora? ");
      console.log("2 - Tente entrar no escondido")
      console.log()
      escolha3 = +prompt("Sua escolha: ");
      while (escolha3 != 2) {
        console.log("A escolha não é válida, digite novamente.");
        escolha3 = +prompt("Sua escolha: ");
      }

    }
  } 

    console.log('Você entra na escola atravês de uma cerca quebrada, ao adentrar o espaço você percebe um barulho estranho vindo de uma das salas de aula');
    console.log();
    console.log('Você prefere seguir o som ou investigar o local?');
    console.log('[1] - Seguir o som');
    console.log('[2] - Investigar o local')
    let escol = prompt('Sua escolha: ');
    while (escol != 1 && escol != 2) {
        console.log("A escolha não é válida, digite novamente.");
        escol = +prompt("Sua escolha: ");
    }
    if (escol == 2) {
      //sorte??? - Acha algo a mais, um caderno??
      //acha jornal antigo da escola sobre desaparecimento de alunas
      console.log()
      //agora o barulho fica mais forte
      //você se dirge atrá dele
    }
    console.log('Zumpi de sengue')
//perda de sanidade
    //luta, com quê?????



  //Fazer a escolha dois aqui no geral

 }
//manha()
TardeEnem()

/*
Continuação do código: Vai até a escola, luta com dois zumbis de sangue, perde sanidae
acha garota perdida usada em rituais, pega informações, enfrenta ocultista, briga, vence ou morre


Depois: luta com diversos montros
*/