const express = require('express');
const cors = require('cors');
const controller = require("./ctrl/controller.js");

const {getHouses, deleteHouse, createHouse, updateHouse} = controller;

const app = express();
const PORT = 4004;


app.use(express.json());
app.use(cors());

const BASE_URL = '/api/houses'

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));



//Endpoints

app.get(BASE_URL, getHouses);
app.post(BASE_URL, createHouse);
app.delete(`${BASE_URL}/:id`, deleteHouse);
app.put(`${BASE_URL}/:id`, updateHouse);
