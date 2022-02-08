const prompt = require("prompt-sync")();
console.clear();
let valor = 0;
let status = {
  nome: "",
  vida: 4,
  sorte: 0,
  sanidadde: 0,
  carisma: 2,
  força: 0,
  hora: 6,
  min: 0,
  dia: 1,

  ganharForça: function (valor) {
    this.força += valor;
    return this.forca;
  },
  //PQ EU COLOQUEI RETURN?????

  ganharVida: function (valor) {
    this.vida += valor;
    return this.vida;
  },

  perderVida: function (valor) {
      this.vida = this.vida - valor;
      
            if (this.vida == 0) {
                console.log("Você morreu :(");
                return true
            } else {
               return false  
      }
     
  },

  ganharSanidade: function (valor) {
    this.sanidade += valor;
  },

  perderSanidade: function (valor) {
    this.sanidade -= valor;
  },

  maisHora: function (valor) {
    this.hora = this.hora + valor;
    if (this.hora >= 24) {
      this.hora = this.hora - 24;
      this.dia++;
    }
  },

  maisMinutos: function (valor) {
    this.min = this.min + valor;
    if (this.min >= 60) {
      this.hora++;
      this.min = this.min - 60;
    }
  },

  mostrarRelogio: function () {
    console.log(`Hoje é dia ${this.dia} de Março de 2019`);
    console.log(`São ${this.hora} horas e ${this.min} minutos.`);
  },
};

//vida, força
function rolagemdedados() {
  let dados1d6 = Math.floor(1 + 6 * Math.random());
  let rolagem1d6 = dados1d6 * 3 * 5;
  return rolagem1d6;
}

function rolagem1d6() {
  let dados1d6 = Math.floor(1 + 6 * Math.random());
  return dados1d6;
}




console.log('teste')
//maneira de terminar o jogo quando a vida zerar
function name () {
    console.log('blallsdkakjdladljadljadlçjaçdjaljdçadj')
    let checar = status.perderVida(3)
    if (checar) {
        return
    }
        console.log("blallsdkakjdladljadljadlçjaçdjaljdçadj");

}


name()









/*
function TardeEnem() {
  status.maisHora(2);
  console.log(
    `Você se dirige até a Escola Nostradamus de Ensino Médio, abreviada para ENEM. Se passam duas horas.`
  );
  console.log();
  console.clear();
  status.mostrarRelogio();
  console.log();
  console.log(
    "Você se vê diante de uma escola que foi carbonizada. Há alguns policiais na frente, o que você quer fazer?"
  );
  console.log(" 1 - Vá falar com os policiais");
  console.log("2 - Tente entrar no escondido");
  console.log("3 - Ligue para a Ordem e pergunte sobre mais informações");
  console.log();
  let escolha2 = prompt("Sua escolha: ");
  if (escolha2 == 1) {
    console.log(
      "Você se dirige aos policiais e tenta usar seu charme e simpatia para obter informações, você precisa de 10 pontos de carisma para passar."
    );
  }
  let rolagem = rolagem1d6();
  console.log(`O dado rolou: ${rolagem}`);
  let rolagemPC = rolagem + status.carisma;
  console.log(`Juntando com o seu carisma o valor é ${rolagemPC}`);
}

TardeEnem();
/*
let teste = {
    hora: 6,
    min: 0,
    dia: 1,

    MaisHora: function (valor) {
        this.hora = this.hora + valor
        if (this.hora >= 24) {
            this.hora = this.hora - 24
            this.dia++
        }
    
    },

    Minutos: function (valor) {
        this.min = this.min + valor
        if (this.min >= 60) {
            this.hora++
            this.min = this.min - 60
        }
    }
}

*/
