const prompt = require("prompt-sync")();
const jokempo = ["pedra", "pergaminho", "adaga"];

console.log("Antes de iniciar nossa aventura, qual seu nome? ");
let nome = prompt();

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
  console.log("Você precisa de ajuda para saber como jogar o jogo? ");
  var ajuda = prompt().toLocaleLowerCase();
} else {
  console.log();
  console.log(
    "Você decide não aceitar a estranha proposta do troll e se aventura mesmo sem suprimentos, enfrentando o destino duvidoso que o reserva."
  );
  return;
}

if (ajuda == "sim") {
  var ajuda2 = prompt(
    "Pedra ganha da adaga, mas perde para o pergaminho; Adaga ganha do pergaminho, mas perde para a pedra; pergaminho ganha da pedra, mas perde para a adaga. "
  );
}

do {
  console.log("Te deixarei escolher, quantas rodadas você gostaria de jogar? ");
  var pontosusuario = 0;
  var pontostroll = 0;
  let rodadas = +prompt("");

  while (isNaN(rodadas)) {
    console.log();
    console.log("Digite um número!");
    console.log("Quantas rodadas você gostaria de jogar? ");
    rodadas = +prompt("");
    continue;
  }
  for (; rodadas > 0; ) {
    var usuario = prompt("Qual a sua escolha? ").toLowerCase();

    let tamanho_array = jokempo.length;
    let n_aleatorio = Math.floor(Math.random() * tamanho_array);

    if (
      (jokempo[n_aleatorio] == "pergaminho" && usuario == "pergaminho") ||
      (jokempo[n_aleatorio] == "pedra" && usuario == "pedra") ||
      (jokempo[n_aleatorio] == "adaga" && usuario == "adaga")
    ) {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log("Essa rodada deu empate!");
      rodadas--;
      console.log();
    }

    if (
      (jokempo[n_aleatorio] == "pergaminho" && usuario == "adaga") ||
      (jokempo[n_aleatorio] == "pedra" && usuario == "pergaminho") ||
      (jokempo[n_aleatorio] == "adaga" && usuario == "pedra")
    ) {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log(`${nome} venceu essa rodada.`);
      rodadas--;
      pontosusuario++;
      console.log();
    }

    if (
      (jokempo[n_aleatorio] == "pergaminho" && usuario == "pedra") ||
      (jokempo[n_aleatorio] == "pedra" && usuario == "adaga") ||
      (jokempo[n_aleatorio] == "adaga" && usuario == "pergaminho")
    ) {
      console.log(`O troll escolheu: ${jokempo[n_aleatorio]}`);
      console.log(`O troll venceu essa rodada.`);
      rodadas--;
      pontostroll++;
      console.log();
    }
    if (
      usuario != jokempo[0] &&
      usuario != jokempo[1] &&
      usuario != jokempo[2]
    ) {
      console.log(
        "Você não inseriu uma escolha válida, vamos tentar novamente. Use pedra, pergaminho ou adaga."
      );
      rodadas;
      console.log();
      continue;
    }
  }

  console.log();
  let vencer = prompt("Calculando quem venceu... Dê enter para continuar.");
  console.clear();
  console.log(`O trol fez ${pontostroll} pontos `);
  console.log(`${nome} fez ${pontosusuario} pontos`);
  console.log();

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
      "Oh, não! Deu empate! Ninguêm ganhou mas você ainda pode jogar outra rodada e tentar sua sorte de novo."
    );
    console.log();
  }

  var rejogar = prompt("Você quer jogar de novo? ").toLocaleLowerCase();
} while (rejogar == "sim" || rejogar == "s");

console.log();
console.log(`Obrigada por jogar, ${nome}!`);