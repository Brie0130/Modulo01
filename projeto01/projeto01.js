console.clear();
var prompt = require("prompt-sync")();

let contagem = 0;

console.log("Hey! Para iniciar: Qual é o seu nome? ");
let nome = prompt("Meu nome é: ");

console.clear();

console.log(`Olá, ${nome}! Você está em direção a uma invasão numa 
tentativa de derrotar definitivamente a Horda. Responda as perguntas
a seguir com sim ou não e vamos ver como essa invasão acabou.`);
console.log();


console.log("Você tem a espada de proteção? ");
var resposta1 = prompt("Sua resposta: ");
var minuscula1 = resposta1.toLowerCase();

while (minuscula1 != "sim" && minuscula1 != "nao") {
    console.log("Para sua resposta ser computada, responda somente sim ou nao, sem acento." );
    console.log();
    console.log("Você tem a espada de proteção? ");
    var resposta1 = prompt("Sua resposta: ");
    var minuscula1 = resposta1.toLowerCase();
}

if (minuscula1 == "sim") {
  contagem = contagem + 1;
}

console.log("Você se certificou de reunir a Aliança das Princesas? ");
var resposta2 = prompt("Sua resposta: ");
var minuscula2 = resposta2.toLowerCase();

while (minuscula2 != "sim" && minuscula2 != "nao") {
    console.log("Para sua resposta ser computada, responda somente sim ou nao, sem acento." );
    console.log();
    console.log("Você se certificou de reunir a Aliança das Princesas? ");
    var resposta2 = prompt("Sua resposta: ");
    var minuscula2 = resposta2.toLowerCase();
}

if (minuscula2 == "sim") {
  contagem = contagem + 1;
}


console.log("Você conseguiu obter informações relevantes da Horda? ");
var resposta3 = prompt("Sua resposta: ");
var minuscula3 = resposta3.toLowerCase();

while (minuscula3 != "sim" && minuscula3 != "nao") {
    console.log("Para sua resposta ser computada, responda somente sim ou nao, sem acento." );
    console.log();
    console.log("Você conseguiu obter informações relevantes da Horda? ");
    var resposta3 = prompt("Sua resposta: ");
    var minuscula3 = resposta3.toLowerCase();
}

if (minuscula3 == "sim") {
  contagem = contagem + 1;
}


console.log("Você tem as plantas da habitação de Hordak na Zona do Medo? ");
var resposta4 = prompt("Sua resposta: ");
var minuscula4 = resposta4.toLowerCase();

while (minuscula4 != "sim" && minuscula4 != "nao") {
    console.log("Para sua resposta ser computada, responda somente sim ou nao, sem acento." );
    console.log();
    console.log("Você tem as plantas da habitação de Hordak na Zona do Medo? ");
    var resposta4 = prompt("Sua resposta: ");
    var minuscula4 = resposta4.toLowerCase();
}

if (minuscula4 == "sim") {
  contagem = contagem + 1;
}


console.log("Você conseguiu a ajuda de Felina? ");
var resposta5 = prompt("Sua resposta: ");
var minuscula5 = resposta5.toLowerCase();

while (minuscula5 != "sim" && minuscula5 != "nao") {
    console.log("Para sua resposta ser computada, responda somente sim ou nao, sem acento." );
    console.log();
    console.log("Você conseguiu a ajuda de Felina? ");
    var resposta5 = prompt("Sua resposta: ");
    var minuscula5 = resposta5.toLowerCase();
}

if (minuscula5 == "sim") {
  contagem = contagem + 1;
}

const fim = prompt(`Seu preparo final para a invasão foi: ${contagem}/5. Vamos 
ver o que esse ataque te reserva... Dê enter para continuar.`);
console.clear();

if (contagem == 0) {
  console.log(`Você falhou, ${nome}. Todos os seus amigos estão presos nas 
    masmorras da Horda e sem perspectiva de se libertar. Você não deveria ter 
    tentado derrotar a Horda tão sem preparo e agora todos estão sofrendo as 
    consequências. `);
} else if (contagem == 1 || contagem == 2) {
  console.log(`Oh, não! Infelizmente, ${nome}, você não conseguiu derrotar
    a Horda e seu reinado de terror irá perdurar por mais um tempo. 
    Felizmente você e a maior parte de seus amigos conseguiram fugir. 
    Quem sabe na próxima, ein?`);
} else if (contagem == 3) {
  console.log(`${nome} você estava extremamente perto de derrotar a Horda
    quando Hordak revela ter uma arma secreta que inibe seus poderes e os dos
    seus amigos. Vocês conseguem fugir, quem sabe no futuro e mais preparados
    tenham uma chance melhor.`);
} else if (contagem == 4) {
  console.log(`Você conseguiu, ${nome}! O esforço foi grande e você se feriu 
    no processo, mas pelo menos conseguiu derrotar a Horda.`);
} else {
  console.log(`Parabéns, ${nome}! Graças aos seus esforços, a Aliança das 
    Princesas conseguiu finalmente se livrar do mal que era a Horda. Hordak
    está preso e todos os reinos estão em festa! Esse dia será lembrado para 
    sempre como o dia que o bem e a amizade triunfaram sobre o mal. `);
}

console.log();
