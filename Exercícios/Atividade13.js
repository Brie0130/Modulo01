const prompt = require("prompt-sync")();
console.clear();

//Crie um sistema de cadastro de funcionários que deve criar um objeto novo para
// cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve
// armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele deve perguntar
// se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários
// para cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com
// cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)
/*
function ContarFuncionários(lista) {
  let Junior = [];
  let Senior = [];
  let qtjunior = 0;
  let qtsenior = 0;

  for (const i of lista) {
    if (i.cargo == "junior") {
      qtjunior++;
      Junior.push(i.nome);
    } else if (i.cargo == "senior") {
      qtsenior++;
      Senior.push(i.nome);
    }
  }

  console.log(`Quantidade de pessoas junior: ${qtjunior}`);
  console.log(`Quantidade de alunos: ${qtsenior} `);
  console.log();
  console.log("Dev Senior:");
  for (let i of Senior) {
    console.log(i);
  }
  console.log();
  console.log("Dev Junior:");
  for (let i of Junior) {
    console.log(i);
  }
}

var listadefuncionario = [];
do {
  var funcionario = {};

  funcionario.nome = prompt("O nome do funcionário é: ");

  funcionario.cargo = prompt("O cargo do funcionário é: ");

  funcionario.salario = +prompt("O salário do funcionário é: ");

  listadefuncionario.push(funcionario);

  var inicio = prompt("Deseja cadastrar outro funcinário? ");
} while (inicio == "sim");

ContarFuncionários(listadefuncionario);
*/
//Crie um objeto pessoa com os atributos: nome, idade, peso e altura. Além disso ela
// deve ter os métodos: Envelhecer, engordar, emagrecer, crescer. Por padrão, a cada ano
// que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. Crie um método bio
// que retorna uma string com todas as informações da pessoa.

pessoa = {
    nome: 'Alan' ,
    idade: 10,
    peso: 50,
    altura: 1.40
,
envelhecer: function () {
  for (let i = this.idade; i< 22; i++) {
      this.altura = this.altura + 0.05
  }  
},

bio: function () {
    console.log(pessoa)
}


};

pessoa.bio()
pessoa.envelhecer()
console.log(pessoa)
let tudo = [];
/*
pessoa.nome = prompt(`Qual é o nome? `);
pessoa.idade = +prompt(`Qual a idade? `);
pessoa.peso = +prompt(`Qual é o peso? `);
pessoa.altura = +(`Qual é a altura? `);
*/
tudo.push(pessoa);


