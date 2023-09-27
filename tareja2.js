const intervalo = [1,100]

function process(intervalo) {
  return new Promise((resolve, reject) => {

    let maxi, min

    if(!intervalo) {
      max = 10
      min = 0
    }
    else {
      max = interval[1]
      min = interval[0]
    }

    let num = Math.floor((Math.random() * 1000)) % max
    if(num < min) num = min

    resolve(num)
  })
  .then(result => console.log(result))
  .catch(err => console.log(err))
  
}

process()