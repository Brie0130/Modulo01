const prompt = require("prompt-sync")();
console.clear();

//Crie um sistema de cadastro de funcionários que deve criar um objeto novo para
// cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve
// armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele deve perguntar
// se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários
// para cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com
// cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)

function ContarFuncionários(lista) {
    let Junior = []
    let Senior = []
    let qtjunior = 0
    let qtsenior = 0

    for (const i of lista) {
        if (funcionario.cargo == "junior") {
            qtjunior++
        } else (funcionario.cargo== "senior") {
            qtsenior++
    }

    
}


let funcionariostotal = [];
do {
  let funcionario = {};
  let nome = prompt("O nome do funcionário é: ");
  funcionario.nome = nome;

  let cargo = prompt("O cargo do funcionário é: ");
  funcionario.cargo = cargo;

  let salario = +prompt("O salário do funcionário é: ");
  funcionario.salario = salario;

  funcionariostotal.push(funcionario);
  var inicio = prompt("Deseja cadastrar outro funcinário? ");
} while (inicio == "sim");

console.log(funcionariostotal);
console.log();
console.log(`A quantidade `)