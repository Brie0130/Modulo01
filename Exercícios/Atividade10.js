const prompt = require("prompt-sync")();
/*
//1) Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
//Um número primo é aquele que é divisível somente por ele mesmo e por 1.

let numero = +prompt("Digite um número inteiro: ");
let divisiveis = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let soma = 0;

for (let index = 0; index < divisiveis.length; index++) {
  let conta = numero % divisiveis[index];
  if (conta == 0) {
    soma++;
  }
}
if (numero > 10) {
  let conta2 = numero % numero;
  if (conta2 == 0) {
    soma++;
  }
}
//console.log(soma);
if (soma == 2) {
  console.log("É um número primo");
} else if (soma != 2) {
  console.log("Não é um número primo");
}

//2) Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida por ele).
// Exiba na tela todos os nomes digitados, porém de maneira invertida (do último para o primeiro),
// apresente também o maior e o menor nome (caso haja empate, deve mostrar todos).

let nomes = [];
let maior = "";
let menor = abcdefghijklmnop;

let quantidade = +prompt("Quantos nomes vai digitar? ");

for (let i = 0; i < quantidade; i++) {
  let nome = prompt("Digite o nome: ");
  nomes.unshift(nome);
}

for (let i of nomes) {
  if (i.length > maior.length) {
    maior = i;
  }
}

for (let i of nomes) {
  if (i.length > menor.length) {
    menor = i;
  }
}


console.log(menor);
console.log(maior);
console.log(nomes);
*/
//3) Faça um programa que peça ao usuário digitar a população e a taxa de crescimento populacional
// de 2 países A e B, sendo que a população do país A deve ser menor que a de B, e a taxa de
// crescimento de A seja maior. Faça um programa que calcule e escreva o número de anos necessários
// para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de
// crescimento.

//3)Faça um "jogo da velha" criando uma matriz em duas dimensões (Você deve criar um array
// com 3 arrays de 3 elementos cada dentro). O programa deve pedir as coordenadas (linha e coluna)
// alternadamente para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença, ele deve
// interromper o programa e anunciar o vencedor.
