console.clear();
var prompt = require('prompt-sync')();

let contagem = 0;

let nome = prompt('Hey! Para iniciar: Qual é o seu nome? ')
console.log (`Olá, ${nome}! Você está em direção a uma invasão numa tentativa de derrotar definitivamente a Horda. Responda as perguntas e vamos ver como essa invasão acabou.`);
console.log();
let resposta1 = prompt('Você tem a espada de proteção? ');

const minuscula1 = resposta1.toLowerCase();
if (minuscula1 == "sim"){
    contagem = contagem + 1;
}

let resposta2 = prompt('Você se certificou de reunir a Aliança das Princesas? ');
const minuscula2 = resposta2.toLowerCase();
if (minuscula2 == "sim"){
    contagem = contagem + 1;
}
let resposta3 = prompt("Você conseguiu obter informações relevantes da Horda? ");
const minuscula3 = resposta3.toLowerCase();
if (minuscula3 == "sim"){
    contagem = contagem + 1;
}
let resposta4 = prompt("Você tem as plantas da habitação de Hordak na Zona do Medo? ");
const minuscula4 = resposta4.toLowerCase();
if (minuscula4 == "sim"){
    contagem = contagem + 1;
}
let resposta5 = prompt('Você conseguiu a ajuda de Felina? ');
const minuscula5 = resposta5.toLowerCase();
if (minuscula5 == "sim"){
    contagem = contagem + 1;
}


const fim = prompt(`Seu preparo final para a invasão foi: ${contagem}. Vamos ver o que esse ataque te reserva... Dê enter para continuar.`);
console.clear();


if (contagem == 0) {
    console.log("Você falhou. Todos os seus amigos estão presos nas masmorras da Horda e sem perspectiva de se libertar. Você não deveria ter tentado derrotar a Horda tão sem preparo e agora todos estão sofrendo as consequências. ");
} else if (contagem == 1 || contagem == 2) {
    console.log("Oh, não! Infelizmente você não conseguiu derrotar a Horda e seu reinado de terror irá perdurar por mais um tempo. Felizmente você e a maior parte de seus amigos conseguiram fugir. Quem sabe na próxima, ein?");
} else if (contagem == 3) {
    console.log('Você estava extremamente perto de derrotar a Horda quando Hordak revela ter uma arma secreta que inibe seus poderes e os dos seus amigos. Vocês conseguem fugir, quem sabe no futuro e mais preparados tenham uma chance melhor.');
} else if (contagem == 4) {
    console.log ('Você conseguiu! O esforço foi grande e você se feriu no processo, mas pelo menos conseguiu derrotar a Horda. ');
} else {
    console.log ('Parabéns! Graças aos seus esforços, a Aliança das Princesas conseguiu finalmente se livrar do mal que era a Horda. Hordak está preso e todos os reinos estão em festa! Esse dia será lembrado para sempre como o dia que o bem e a amizade triunfaram sobre o mal. ');
}









/*
let sim = 'si' ;
var bravo = 0;
console.log(`Contador de Bravura: ${bravo}`);
let perg1 = prompt('Você me desafiou ontem? ');
if (perg1 == 'sim') {console.log(`Sim, você me desafiou`); 
bravo = bravo + 1;}
else {console.log(`Não, você não me desafiou`);}
console.log(`Contador de Bravura: ${bravo}`);
let perg2 = prompt('Você vai me desafiar amanhã? ');
if (perg2 == 'sim') {console.log(`Sim, você vai`); 
bravo = bravo + 1;}
else {console.log(`Não, você não vai`);}
console.log(`Contador de Bravura: ${bravo}`);
*/