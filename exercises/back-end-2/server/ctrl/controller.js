const houses = require("../db.json");
let ID = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },
  createHouse: (req, res) => {
    const newHouse = req.body;
    ID++;
    houses.push(newHouse);

    res.status(200).send(houses);
  },
  deleteHouse: (req, res) => {
    const { id } = req.params;
    for (let i = 0; i < houses.length; i++) {
      if (houses[i].id === +id) {
        houses.splice(i, 1);

        res.status(200).send(houses);
        return;
      }
    }
    res.status(400).send(houses);
  },
  updateHouse: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    for(let i = 0; i < houses.length; i++) {
        if(houses[i].id === +id) {
            if (type === "plus") {
                houses[i].price += 5000;
            
            res.status(200).send(houses);
            return;
            }
        if(houses[i].id === +id) {
            if (type === "minus") {
                houses[i].price -= 5000;
            
            res.status(200).send(houses);
            return;
                    }
                }
            }
        }
    }
};