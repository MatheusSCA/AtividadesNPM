const pessoas = [
    {
      nome: "ale",
      age: 20
    },
    {
      name: "gio",
      age: 19
    },
    {
      name: "Matheus",
      age: 20
    }
  ]
function MaisVelho() {
  return new Promise((resolve, reject) => {
    if (pessoas.length === 0) {
      reject("A lista de pessoas está vazia.");
      return;
    }

    let MaisVelho = pessoas[0];

    for (let i = 1; i < pessoas.length; i++) {
      if (pessoas[i].idade > pessoaMaisVelha.idade) {
        MaisVelho = pessoas[i];
      }
    }

    resolve(MaisVelho);
  });
}


function MaisNova() {
  return new Promise((resolve, reject) => {
    if (pessoas.length === 0) {
      reject("não tem ninguem.");
      return;
    }

    let MaisNova = pessoas[0];

    for (let i = 1; i < pessoas.length; i++) {
      if (pessoas[i].idade < MaisNova.idade) {
        MaisNova = pessoas[i];
      }
    }

    resolve(MaisNova);
  });
}