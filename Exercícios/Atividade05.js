const prompt = require("prompt-sync")();

//Estruturas de repetição
//no while, repetirá em loop até a condição deixar de ser verdadeira

/*
console.clear();
let num = 0;

while (num <= 5) {
    console.log(num);
    num++;
}
*/
//1) Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual
//ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

console.clear();

console.log("Digite seu nome de usuário: ");
let usuario = prompt();
console.log("Digite sua senha: ");
let senha = prompt();

while (senha == usuario) {
  console.log("Digite seu nome de usuário: ");
  usuario = prompt();
  console.log("Digite sua senha: ");
  senha = prompt();
}
console.log();
console.log("Login efetuado");

//2) Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Estado Civil: 's', 'c', 'v', 'd';

var nome = prompt("Digite seu nome: ");

while (nome.length <= 3) {
  nome = prompt("Digite seu nome: ");
}

var idade = prompt("Digite sua idade: ");

while (idade < 0 || idade > 150) {
  idade = prompt("Digite sua idade: ");
}

console.log();
var salario = prompt("Digite seu salário: ");

while (salario < 0) {
  var salario = prompt("Digite seu salário: ");
}

var estado = prompt("Digite seu estado civil: ");

while (estado != "s" && estado != "c" && estado != "v" && estado != "d") {
  var estado = prompt("Digite seu estado civil: ");
}

// Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.

console.clear();

do {
  console.log("Digite um número: ");
  let num1 = prompt("");
  var num = num1 % 2;
  if (num == 0) {
    console.log("O número é par");
  } else {
    console.log("O número é impar");
  }
} while (num != 0);

// 4) Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro
//entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
// O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número
//é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o número, e mostrar
//a quantidade de palpites que foi necessária.

let numale = 0;
let numusu = 0;
let palpite = 0;

while (true) {
  numale = Math.floor(Math.random() * 10 + 1); // Math.randon = número aleatório entre 0 e 1 | Math.floor = retira casas decimai
  numusu = +prompt("Escolha um número de 1 a 10: ");

  //console.log(`O número aleatório escolhido é ${numale}`)

  while (numusu != numale) {
    if (numusu > numale) {
      console.log(
        "O número que você digitou é maior que o número sorteado pelo computador"
      );
      palpite++;
      numusu = +prompt("Escolha um número de 1 a 10: ");
    }
    if (numusu < numale) {
      console.log(
        "O número que você digitou é menor que o número sorteado pelo computador"
      );
      palpite++;
      numusu = +prompt("Escolha um número de 1 a 10: ");
    }
  }

  if (numusu === numale) {
    console.log(`Você acertou! O número aleatorio escolhido era ${numale}`);
    break;
  }
}

console.log(`Você usou ${palpite} palpites`);
