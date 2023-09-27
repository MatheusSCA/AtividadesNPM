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
  
  function process(pessoas) {
    return new Promise((resolve, reject) => {
      if(!pessoas) {
        reject("Não tem nenhum nome")
      }
  
      let legalAges = 0
      people.forEach(pessoa => {
        if(pessoa.age >= 18) MaiorDIdade++
      })
  
      if(MaiorDIdade == 0) {
        reject("Não há ninguem maior de idade")
      }
  
      resolve("Tem ${MaiorDIdade} Maiores de idade(s)")
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  
  process(pessoa)