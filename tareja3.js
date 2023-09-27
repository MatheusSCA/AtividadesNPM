const pessoa = [
    {
    id:1,
    nome: "ale",
    dinheiro: 2000
    },
    {
    id:2,
    nome: "gio",
    dinheiro: 4000
    },
    {
    id:3,
    nome: "Matheus",
    dinheiro: -20000
    }
  ]
  
  function process(pessoa, id) {
    return new Promise((resolve, reject) => {
  
      if(!id) {
        reject(pessoa)
      }
  
      people.forEach(pessoa=> {
        if(pessoa.id == id) {
          if(pessoa.cash > 0) resolve('Saldo positivo')
          else resolve('Saldo negativo')
        }
      })
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))
    
  }
  
  process(pessoa, 3)