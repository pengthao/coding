const express = require('express');
const cors = require('cors');
const movieCtrl = require("./ctrl/movieCtrl")
const {getAllMovies, createNewMovie, deleteMovie, updateMovieRating } = movieCtrl

const app = express();

app.use(express.json());
app.use(cors());

const BASE_URL = '/api/movies'



//Endpoints

app.get(BASE_URL, getAllMovies);
app.post(BASE_URL, createNewMovie);
app.delete(`${BASE_URL}/:id`, deleteMovie);
app.put(`${BASE_URL}/:id`, updateMovieRating);


const PORT = 4004;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));