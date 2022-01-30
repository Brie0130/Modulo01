const prompt = require("prompt-sync")();

//1) Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações
// na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:

let colunas = +prompt('Digite a quantidade de colunas: ');
let linhas = +prompt('Digite a quantidade de linhas: ');
// let matrix = [];
let lista = [];
let a = 0;

for (i = 0; i < linhas; i++){
    for (let i = a; i < colunas + a; i++){
        lista.push(i)
    }
    console.log(lista)
    // matrix.push(lista)
    lista = [];
    a++
}
console.log();


//Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
//Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.


let numero = +prompt("Digite um número: ");
let vezes = 0;

for (let i = 0; i < 10; i++) {
  const tabuada = numero * vezes;
  vezes++;
  console.log(`${numero} X ${vezes} = ${tabuada} `);
}

