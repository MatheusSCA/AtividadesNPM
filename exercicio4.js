const express = require('express');
const app = express();
const port = 8000;

const movies = [
    {
      nome: "Hobbit",
      genero: "aventura"
    },
    {
      nome: "Rental",
      genero: "Terror"
    },
    {
      nome: "EraserHead",
      genero: "Terror"
    },
    {
      nome: "Mad Max",
      genero: "açaõ"
    }
  ]

  filterMovies(movies);{
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        let moviesFiltered = movies.filter(el => el.gender == "crime");

        if(!movies) {
          reject("Error, no movies")
        }

      resolve(moviesFiltered)
      }, 500)
    })
  }
console.log(filterMovies(movies).then(result => console.log(result)).catch(err => console.log(err)))  