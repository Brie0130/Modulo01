const prompt = require("prompt-sync")();

// 1) Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.

let num1 = +prompt("Digite um número: ");
let num2 = +prompt("Digite outro número: ");

if (num1 == num2) {
  console.log(`Os números são iguais`);
} else if (num1 > num2) {
  console.log(`${num1} é o maior número`);
} else {
  console.log(`${num2} é o maior número`);
}

//2) Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve
// calcular a média alcançada por aluno e apresentar:
// - A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// - A mensagem "Em recuperação", se a média for entre cinco e sete;
// - A mensagem "Reprovado", se a média for menor que cinco.

let nota1 = +prompt("Qual é a primeira nota? ");
let nota2 = +prompt("Qual é a segunda nota? ");
let nota3 = +prompt("Qual é a terceira nota? ");
let nota3 = +prompt("Qual é a quarta nota? ");

let notafinal = (nota1 + nota2 + nota3 + nota4) / 4;

if (notafinal >= 7) {
  console.log("Aprovado");
} else if (notafinal > 5 && notafinal < 7) {
  console.log("Em recuperação");
} else {
  console.log("Reprovado");
}

//3) Faça um programa que leia um número, e informe se ele é par ou impar

let num = +prompt("Digite um número: ");

let divisão = num % 2;

if (divisão == 0) {
  console.log(`${num} é um número par`);
} else {
  console.log(`${num} é um número ímpar`);
}


//Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C
//e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados.
//A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:
// - Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
// - Se A² = B² + C² , apresente a mensagem: TRIANGULO RETANGULO;
// - Se A² > B² + C² , apresente a mensagem: TRIANGULO OBTUSANGULO;
// - Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;
// - Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
// - Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;

let valores = [];
let number1 = +prompt("Digite um número: ");
valores.push(number1);

let number2 = +prompt("Digite outro número: ");
valores.push(number2);

let number3 = +prompt("Digite o último número: ");
valores.push(number3);

valores.sort();

let LadoA = valores[0];
let LadoB = valores[1];
let LadoC = valores[2];

if ((LadoA * LadoA) == (LadoB * LadoB) + (LadoC * LadoC)) {
  console.log("Triângulo retângulo");
} 
if ( (LadoA * LadoA ) > (LadoB * LadoB) + (LadoC * LadoC)) {
  console.log("Triângulo Obtusângulo");
} 
if ((LadoA * LadoA) < (LadoB * LadoB) + (LadoC * LadoC)) {
  console.log("Triângulo Acutângulo");
} 
if (LadoA == LadoB && LadoB == LadoC) {
  console.log("Triângulo Equilatero");
} 
if (LadoA == LadoB || LadoC == LadoA || LadoB == LadoC) {
  console.log("Triângulo Isoceles");
} 
if (LadoA >= (LadoB + LadoC)) {
    console.log("Não forma triâmgulo");
} 
