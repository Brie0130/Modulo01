const prompt = require("prompt-sync")();

//1) Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o
// programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste
// segundo o seguinte critério, baseado no salário atual:
//- Salários até R$ 280,00 (incluindo): aumento de 20%.
// - Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
// - Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
// - Salários de R$ 1500,00 em diante: aumento de 5%.
// - Após o aumento ser realizado, informe na tela:
//   - O salário antes do reajuste.
// - O percentual de aumento aplicado.
//  - O valor do aumento.
// - O novo salário, após o aumento.

let salario = +prompt("Qual o seu salário atual? ");

if (salario <= 280.0) {
  let porcentagem1 = salario * 0.2;
  let salariofinal = porcentagem1 + salario;
  console.log(`O sálario antes do reajuste era de R$ ${salario}`);
  console.log(`O valor do reajuste será de 20%`);
  console.log(`O aumento de sálario é de R$ ${porcentagem1}`);
  console.log(`O valor do novo sálario é de R$ ${salariofinal}`);
}

if (salario > 280.0 && salario <= 700.0) {
  let porcentagem2 = salario * 0.15;
  let salariofinal = porcentagem2 + salario;
  console.log(`O sálario antes do reajuste era de R$ ${salario}`);
  console.log(`O valor do reajuste será de 15%`);
  console.log(`O aumento de sálario é de R$ ${porcentagem2}`);
  console.log(`O valor do novo sálario é de ${salariofinal}`);
}

if (salario > 700.0 && salario < 1500.0) {
  let porcentagem3 = salario * 0.1;
  let salariofinal = porcentagem3 + salario;
  console.log(`O sálario antes do reajuste era de R$ ${salario}`);
  console.log(`O valor do reajuste será de 10%`);
  console.log(`O aumento de sálario é de R$ ${porcentagem3}`);
  console.log(`O valor do novo sálario é de ${salariofinal}`);
}

if (salario > 1500.0) {
  let porcentagem4 = salario * 0.05;
  let salariofinal = porcentagem4 + salario;
  console.log(`O sálario antes do reajuste era de R$ ${salario}`);
  console.log(`O valor do reajuste será de 5%`);
  console.log(`O aumento de sálario é de R$ ${porcentagem4}`);
  console.log(`O valor do novo sálario é de ${salariofinal}`);
}

// 2) Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um
//número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número
// escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.

let numale = Math.floor(Math.random() * 10 + 1); // Math.randon = número aleatório entre 0 e 1 | Math.floor = retira casas decimais
let num = +prompt("Tente adivinhar o número que o computador vai escolher: ");

if (numale == num) {
  console.log(`O número que você escolheu foi: ${num}`);
  console.log(`O número que o computador escolheu foi: ${numale}`);
  console.log("Os números são iguais! Você venceu!");
} else {
  console.log(`O número que você escolheu foi: ${num}`);
  console.log(`O número que o computador escolheu foi: ${numale}`);
  console.log("Os números são diferente: Você perdeu!");
}
