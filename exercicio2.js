const express = require('express');
const app = express();
const port = 8000;

filterStates(arr);{
    let s_states = []

    arr.forEach(el => {
      if(el[0].toLowerCase() === 's') {
        s_states.push(el)
      }
    })

    return s_states
  }

  let arr = ["stado", "sergipe", "estadosems", "estadossem2", "s"]
  console.log(filterStates(arr))