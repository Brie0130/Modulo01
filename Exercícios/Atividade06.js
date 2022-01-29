const prompt = require("prompt-sync")();

//1) Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números
//pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.



let todos = [];
let pares = [];
let impares = [];

let contador = 1;

while (contador < 21) {
  let numero = +prompt(`Digite o ${contador} número: `);
  contador++;
  todos.push(numero);

  if ( (numero % 2) == 0) {
    pares.push(numero);
  } else {
    impares.push(numero);
  }
}

console.log(`Todos os números são: `);
console.log(todos);
console.log();
console.log(`Os números pares são: `);
console.log(pares);
console.log();

console.log(`Os números ímpares são: `);
console.log(impares)

//2) Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array.
//Imprima a média de idade e de altura.

let indice = 0;
const idade = [];
const altura = [];

do {
  let novaIdade = +prompt("Qual a sua idade? ");
  idade.push(novaIdade);
  let novaAltura = +prompt("Qual a sua altura? ");
  altura.push(novaAltura);
  indice++;
} while (indice < 5);

let somaidade = (idade[0] + idade[1] + idade[2] + idade[3] + idade[4]) / 5;
let somaaltura =
  (altura[0] + altura[1] + altura[2] + altura[3] + altura[4]) / 5;

console.log(`A média de altura é ${somaaltura}`);
console.log(`A média de idade é ${somaidade}`);


//3)Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados
//e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final
// imprima o nome e a nota correspondente de cada aluno, e a média total da notas.

let contador = 0;
let soma = 0
qntde = +prompt("Qual a quantidade de alunos a serem cadastrados? ");
let listadenomes = [];
let listadenotas = [];

while (qntde > contador) {
  console.log("Qual o nome do aluno? ");
  let nome = prompt();
  listadenomes.push(nome);

  console.log("Qual a nota do aluno? ");
  let nota = +prompt();
  listadenotas.push(nota);

  contador++;
}

console.clear();
for (let i = 0; i < qntde; i++) {
  console.log(`${listadenotas[i]} --- ${listadenomes[i]}`);
 // console.log(listadenomes[i]);
}

for (let i = 0; i < listadenotas.length; i++) {
  soma += listadenotas[i] //soma de itens de um array
}

console.log(soma);


//4) Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes
//e armazene os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido.

let resultados = [];

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

for (let i = 0; i < 101; i++) {
  let n_aleatorio = Math.floor(Math.random() * 6 + 1);
  resultados.push(n_aleatorio);

  if (n_aleatorio == 1) {
    num1++;
  }
  if (n_aleatorio == 2) {
    num2++;
  }
  if (n_aleatorio == 3) {
    num3++;
  }
  if (n_aleatorio == 4) {
    num4++;
  }
  if (n_aleatorio == 5) {
    num5++;
  }
  if (n_aleatorio == 6) {
    num6++;
  }
}

console.log(`O número 1 apareceu ${num1} vezes.`);
console.log(`O número 2 apareceu ${num2} vezes.`);
console.log(`O número 3 apareceu ${num3} vezes.`);
console.log(`O número 4 apareceu ${num4} vezes.`);
console.log(`O número 5 apareceu ${num5} vezes.`);
console.log(`O número 6 apareceu ${num6} vezes.`);
