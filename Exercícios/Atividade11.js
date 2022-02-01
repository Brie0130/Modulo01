const prompt = require("prompt-sync")();

//1) Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal
// de operador matemático (+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando
// os dois número passados.
/*
function calculadora(num1, num2, operador) {

  if (operador == "+") {
    let conta = num1 + num2;
    console.log(`${num1} + ${num2} = ${conta}`);
  } else if (operador == "/") {
    let conta = num1 / num2;
    console.log(`${num1} / ${num2} = ${conta}`);
  } else if (operador == "-") {
    let conta = num1 - num2;
    console.log(`${num1} - ${num2} = ${conta}`);
  } else if (operador == "*") {
    let conta = num1 * num2;
    console.log(`${num1} * ${num2} = ${conta}`);
  } else {
      console.log(`O operador não é válido`)
  }
}
   num1 = +prompt(`Digite o primeiro número: `);
   num2 = +prompt(`Digite o segundo número: `);
   operador = prompt(`Digite o operador matemático: `)

calculadora(num1, num2, operador);


//2) Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma
//string no formato 'D de mesPorExtenso de AAAA'. Valide a data e retorne NULL caso
// a data seja inválida.

function mesporextenso(data) {
  let datasplit = data.split("/");
 // let mes = datasplit[1];
  let mes2 = parseInt(datasplit[1])
  let meses = [
      "",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Maio",
    "Abril",
    "Maio",
    "Junho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

if (datasplit[0] > 31 || datasplit[1] > 12) {
    console.log("Data inválida")
    return;
}
  console.log(`${datasplit[0]} de ${meses[mes2]} de ${datasplit[2]}`);
}
let escreverdata = prompt(`Digite a data, formato DD/MM/AAA: `);
mesporextenso(escreverdata);

//3) Escreva uma função para conversão de temperatura. Ela deve receber 2 argumentos:
// um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em Celsius,
// Fahrenheit ou Kelvin. A função deve exibir a temperatura nas 3 escalas e perguntar qual
// valor quer retornar.

function convesaodetemperatura(temp, escal) {
  let paraKelvin = 0;
  let paraCelsius = 0;
  let paraFahrenheit = 0;
  do {
    temp = +prompt("Digite a temperatura: ");
    escal = prompt("Digite a escala: ").toLowerCase();
    if (escal == "c") {
      paraKelvin = temp + 273.15;
      paraFahrenheit = temp * 1.8 + 32;
      console.log(`O valor em Fahrenheit é ${paraFahrenheit}`);
      console.log(`O valor em Kelvin é ${paraKelvin}`);
    } else if (escal == "f") {
      paraKelvin = (temp - 32) * (5 / 9) + 273;
      paraCelsius = (temp - 32) / 1.8;
      console.log(`O valor em Celsius é ${paraCelsius}`);
      console.log(`O valor em Kelvin é ${paraKelvin}`);
    } else if (escal == "k") {
      paraCelsius = temp - 273;
      paraFahrenheit = (temp - 273) * 1.8 + 32;
      console.log(`O valor em Celsius é ${paraCelsius}`);
      console.log(`O valor em Fahrenheit é ${paraFahrenheit}`);
    } else {
      console.log(`A escala não é válida. Digite C, F ou K.`);
    }
  } while (escal != "k" && escal != "f" && escal != "c");
}

convesaodetemperatura();
*/
//4) Faça um programa que solicite o total gasto pelo cliente de uma loja, imprima as opções 
//de pagamento com os valores totais, solicite a opção desejada e imprima o valor total das prestações
// (se houverem). Ao final ele deve retornar o valor total da opção escolhida, guardar em uma lista
// e recomeçar a operação perguntando o valor total gasto pelo próximo cliente. Quando o valor
// informado for 0, significa que não há mais clientes, então ele chamar uma nova função que vai
// mostrar quantas compras foram feitas em cada opção, e a soma do valor total de todas elas.
//   Opção: a vista com 10% de desconto
//   Opção: em duas vezes (preço da etiqueta)
//   Opção: de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).


