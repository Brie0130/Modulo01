const prompt = require("prompt-sync")();

//1) Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal
// de operador matemático (+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando
// os dois número passados.

function calculadora(num1, num2, operador) {

  if (operador == "+") {
    let conta = num1 + num2;
    console.log(`${num1} + ${num2} = ${conta}`);
  }

  if (operador == "/") {
    let conta = num1 / num2;
    console.log(`${num1} / ${num2} = ${conta}`);
  }

  if (operador == "-") {
    let conta = num1 - num2;
    console.log(`${num1} - ${num2} = ${conta}`);
  }
  if (operador == "*") {
    let conta = num1 * num2;
    console.log(`${num1} * ${num2} = ${conta}`);
  }
}
   num1 = +prompt(`Digite o primeiro número: `);
   num2 = +prompt(`Digite o segundo número: `);
   operador = prompt(`Digite o operador matemático: `)

calculadora(num1, num2, operador);

//2) Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma 
//string no formato 'D de mesPorExtenso de AAAA'. Valide a data e retorne NULL caso
// a data seja inválida.


function mesporextenso (dia, mes, ano) {
    if (mes == 01) {
        console.log(`${dia} de janeiro de ${ano}`)
    } else if (mes == 02) {
        console.log(`${dia} de fevereiro de ${ano}`)
    } else if (mes == 03) {
        console.log(`${dia} de março de ${ano}`)
    } else if (mes == 04) {
        console.log(`${dia} de maio de ${ano}`)
    } else if (mes == 05) {
        console.log(`${dia} de abril de ${ano}`)
    }else if (mes == 06) {
        console.log(`${dia} de junho de ${ano}`)
    }else if (mes == 07) {
        console.log(`${dia} de julho de ${ano}`)
    }else if (mes == 08) {
        console.log(`${dia} de agosto de ${ano}`)
    }else if (mes == 09) {
        console.log(`${dia} de setembro de ${ano}`)
    }else if (mes == 10) {
        console.log(`${dia} de outubro de ${ano}`)
    }else if (mes == 11) {
        console.log(`${dia} de novembro de ${ano}`)
    }else if (mes == 12) {
        console.log(`${dia} de dezembro de ${ano}`)
    }

}


function dateToEN(date)
{	
	return date.split('/').reverse().join('-');
}





//3) Escreva uma função para conversão de temperatura. Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin. A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.
//4) Faça um programa que solicite o total gasto pelo cliente de uma loja, imprima as opções de pagamento com os valores totais, solicite a opção desejada e imprima o valor total das prestações (se houverem). Ao final ele deve retornar o valor total da opção escolhida, guardar em uma lista e recomeçar a operação perguntando o valor total gasto pelo próximo cliente. Quando o valor informado for 0, significa que não há mais clientes, então ele chamar uma nova função que vai mostrar quantas compras foram feitas em cada opção, e a soma do valor total de todas elas.
//   Opção: a vista com 10% de desconto
//   Opção: em duas vezes (preço da etiqueta)
//   Opção: de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).
