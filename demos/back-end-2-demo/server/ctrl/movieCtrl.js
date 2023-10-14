const movies = require("../db.json");
let ID = 11;

module.exports = {
  getAllMovies: (req, res) => {
    res.status(200).send(movies);
  },
  createNewMovie: (req, res) => {
    const newMovie = req.body;
    newMovie.id = ID;
    ID++;
    movies.push(newMovie);

    res.status(200).send(movies);
  },
  deleteMovie: (req, res) => {
    const { id } = req.params;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === +id) {
        movies.splice(i, 1);

        res.status(200).send(movies);
        return;
      }
    }
    res.status(400).send("Could not find the movie to delete.");
  },
  updateMovieRating: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === +id && movies[i].rating < 5) {
        if (type === "plus") {
          movies[i].rating++;
          res.status(200).send(movies);
          return;
        }
        if (movies[i].id === +id && movies[i].rating > 1) {
          if (type === "minus") {
            movies[i].rating--;
            res.status(200).send(movies);
            return;
          }
        }
      }
    }
  },
};
