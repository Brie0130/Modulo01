const prompt = require("prompt-sync")();
//1) Crie um programa em que o usuário escolha a quantidade de notas serem entradas
// e depois peça e armazene essa quantidade de notas em um array. Ao final imprima
//a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e
//REPROVADOS (abaixo de 5).
/*
let todos = [];
let aprovados = [];
let recuperacao = [];
let reprovado = [];

let quantidade = +prompt("Quantas notas serão adicionadas?");

for (let i = 1; i < quantidade + 1; i++) {
  let nota = +prompt(`Digite a ${i}° nota: `);
  todos.push(nota);

  if (nota >= 7) {
    aprovados.push(nota);
  } else if (nota >= 5 && nota < 7) {
    recuperacao.push(nota);
  } else {
    reprovado.push(nota);
  }
}

let totalaprovados = aprovados.length;
let totalrecuperacao = recuperacao.length;
let totalreprovados = reprovado.length;

console.log(`O total de alunos aprovados é ${totalaprovados}`);
console.log(`O total de alunos reprovados é ${totalreprovados}`);
console.log(`O total de alunos em recuperação é ${totalrecuperacao}`);

//2) Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e
// imprima em ordem crescente.

let sorteados = [];

for (let i = 0; i < 20; i++) {
  let sorteio = Math.floor(Math.random() * 100);
  sorteados.push(sorteio);
}

ordem = sorteados.sort((a, b) => a - b); // ordenar de forma crescente
console.log(sorteados);
*/
//3) Faça um programa que peça o nome de usuário e a senha de um usuário. A senha deve ter
// no mínimo 8 caracteres, pelo menos um número e um caracter especial.

let nome = ("Qual seu nome de úsuario? ");
let regex = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/




