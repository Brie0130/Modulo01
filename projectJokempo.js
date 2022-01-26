const prompt = require("prompt-sync")();
const jokempo = ["pedra", "pergaminho", "adaga"];

let nome = prompt("Qual seu nome? ");

console.clear();

console.log(
  "Você está viajando a dias em busca de um lugar para descansar. Num dia chuvoso, no meio de um bosque, você encontra um trol que lhe faz uma estranha proposta."
);
console.log();
let pausa = prompt();
console.log(
  '"Você não sabe como é entediante viver aqui, quero me divertir um pouco por isso lhe farei a seguinte proposta: Jogaremos Pergaminho, Pedra ou Adaga e, se você me vencer na maioria das partidas, te darei comida o suficiente para terminar essa sua tortuosa jornada." O troll então dá uma profunda risada "Porém, casa eu vença, você deverá passar seis meses trabalhando para mim"'
);

console.log();
console.log(`E então, ${nome}, você aceita a proposta? `);
let inicio3 = prompt().toLowerCase();

console.clear();

if (inicio3 == "sim" || inicio3 == "s") {
  console.log("Você quer saber como jogar o jogo? ");
  var ajuda = prompt();
}
if (ajuda == "sim") {
  var ajuda2 = prompt(
    "Pedra ganha da adaga, mas perde para o pergaminho; Adaga ganha do pergaminho, mas perde para a pedra; pergaminho ganha da pedra, mas perde para a adaga. "
  );
}

do {
  if (inicio3 != "sim" && inicio3 != "s") {
    console.log();
    console.log(
      "Você decide não aceitar a estranha proposta do troll e se aventura mesmo sem suprimentos, enfrentando o destino duvidoso que o reserva"
    );
    break;
  }
  console.log("Te deixarei escolher, quantas rodadas você gostaria de jogar? ");
  var rodadas = +prompt();
  var pontosusuario = 0;
  var pontostroll = 0;

  while (rodadas > 0) {
    var usuario = prompt("Qual a sua escolha? ").toLowerCase();

    let tamanho_array = jokempo.length;
    let n_aleatorio = Math.floor(Math.random() * tamanho_array);
    //console.log(`${jokempo[n_aleatorio]}`);

    if (jokempo[n_aleatorio] == "pergaminho" && usuario == "pergaminho") {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log("Essa rodada deu empate!");
      rodadas--;
      console.log();
    }

    if (jokempo[n_aleatorio] == "pedra" && usuario == "pedra") {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log("Essa rodada deu empate!");
      rodadas--;
      console.log();
    }

    if (jokempo[n_aleatorio] == "adaga" && usuario == "adaga") {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log("Essa rodada deu empate!");
      rodadas--;
      console.log();
    }

    if (jokempo[n_aleatorio] == "pergaminho" && usuario == "adaga") {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log(`O ${nome} venceu!`);
      rodadas--;
      pontosusuario++;
      console.log();
    }

    if (jokempo[n_aleatorio] == "pergaminho" && usuario == "pedra") {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log(`O troll venceu essa rodada.`);
      rodadas--;
      pontostroll++;
      console.log();
    }

    if (jokempo[n_aleatorio] == "pedra" && usuario == "pergaminho") {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log(`O ${nome} venceu!`);
      rodadas--;
      pontosusuario++;
      console.log();
    }

    if (jokempo[n_aleatorio] == "pedra" && usuario == "adaga") {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log(`O troll venceu essa rodada.`);
      rodadas--;
      pontostroll++;
      console.log();
    }

    if (jokempo[n_aleatorio] == "adaga" && usuario == "pedra") {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log(`${nome}, você venceu!`);
      rodadas--;
      pontosusuario++;
      console.log();
    }

    if (jokempo[n_aleatorio] == "adaga" && usuario == "pergaminho") {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log();
      console.log(`O troll venceu essa rodada.`);
      rodadas--;
      pontostroll++;
    }

    if (
      usuario != jokempo[0] &&
      usuario != jokempo[1] &&
      usuario != jokempo[2]
    ) {
      console.log(
        "Você não inseriu uma escolha válida, vamos tentar novamente. Use pedra, pergaminho ou adaga."
      );
      console.log();
      continue;
    }
  }
  console.log(`O trol fez ${pontostroll}`);
  console.log(`${nome} fez ${pontosusuario}`);
  console.log();
  let vencer = prompt("Calculando quem venceu...");
  console.clear();
  if (pontosusuario > pontostroll) {
    console.log(
      `${nome} é quem venceu! Agora você tem suprimentos o suficiente para terminar sua joranada.`
    );
    console.log();
  } else if (pontostroll > pontosusuario) {
    console.log(
      "O troll venceu! Você tem a obrigação de permanecer com ele pelos próximos seis meses."
    );
    console.log();
  } else {
    console.log(
      "Oh, não! Deu empate! Ninguêm ganhou mas você ainda pode jogar outra rodada"
    );
    console.log();
  }

  var rejogar = prompt("Você quer jogar de novo? ");
} while (rejogar == "sim" || rejogar == "s");