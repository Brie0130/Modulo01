const prompt = require("prompt-sync")();

//1 Faça um programa que peça 2 números e crie um array contando todos os números
//sequenciais do primeiro até o segundo, independente de ser maior ou menor.

const contagem = [];

let num1 = +prompt("Digite um número: ");
contagem.push(num1);
let num2 = +prompt("Digite outro número: ");
contagem.push(num2);
console.log(contagem);

//2 Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X, um valor
//por linha, inclusive o X, se for o caso. Use o laço FOR.

let impares = [];
let valor = +prompt("Digite um valor x: ");

for (let index = 0; index < valor; index++) {
  let impar = index % 2;
  if (impar != 0) {
    impares.push(index);
  }
}

for (const key of impares) {
  console.log(key);
}

console.log(impares);


//Faça um programa que, dado uma lista de N números (o usuário deve determinar a quantidade de
//números a serem entrados e entrar cada um deles), determine o menor valor,
// o maior valor e a soma dos valores.

let quantidade = +prompt("Quantos números serão digitados? ");
let numeros = [];
let total = 0;

for (let index = 0; index < quantidade; index++) {
  var numero = +prompt("Digite o número: ");
  total = total + numero;
  numeros.push(numero);
}
/*
var maior = 0;
for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}*/
var maior = Math.max(...numeros);
var menor = Math.min(...numeros);

console.log(`O maior número é ${maior}`);
console.log(`O menor número é ${menor}`);
console.log(`A soma total dos números é ${total}`);


//Numa eleição existem três candidatos.
//Faça um programa que peça o número total de eleitores.
//Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

console.clear();
let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;

let eleitores = +prompt(`Quantos eleitores vão votar? `);

for (let index = 0; index < eleitores; ) {
  let voto = prompt(`Qual o seu voto? `).toLocaleLowerCase();
  if (voto == "c1") {
    candidato1++;
    index++;
  }
  if (voto == "c2") {
    candidato2++;
    index++;
  } else if (voto == "c3") {
    candidato3++;
    index++;
  }
  if (voto != "c1" && voto != "c2" && voto != "c3") {
    console.log("Opção Inválida");
    console.log("Escolha C1, C2 ou C3");
    return;
  }
}

console.log(`O candidato 1 recebeu: ${candidato1} votos.`);
console.log(`O candidato 2 recebeu: ${candidato2} votos.`);
console.log(`O candidato 3 recebeu: ${candidato3} votos.`);

/*
Faça um programa que carregue uma lista com os modelos de cinco carros. 
Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros cada um 
desses carros faz com um litro de combustível. Calcule e mostre:
- Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma 
distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 5,50 o litro.
*/

console.clear();
const modelos = ["Carro A", "Carro B", "Carro C", "Carro D", "Carro E"];
const km = [1, 5, 10, 15, 20];

for (let index = 0; index < km.length; index++) {
  let gasolina = (1 * 1000) / km[index];
  let gasolina2 = Math.round(gasolina);
  let consumo = (5.5 * 1000) / km[index];
  let consumo2 = Math.round(consumo);
  console.log(
    `O modelo de carro ${modelos[index]} precisará de ${gasolina2}L de gasolina para rodar 1000Km e custará R$ ${consumo2} `
  );
}

