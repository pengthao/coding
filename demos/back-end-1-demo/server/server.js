const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5050;

app.use(express.json());
app.use(cors());

const inventory = [
  "vinyl",
  "tables",
  "turntables",
  "legos",
  "speakers",
  "plums",
  "cats",
  "iphones",
  "water",
];

//Endpoints

app.get("/api/inventory", (req, res) => {

        const {item} = req.query

        const isInInventory = inventory.includes(item)
        if(isInInventory) {
            res.status(200).send([item]);
            return;
        }

    res.status(200).send(inventory);
});

app.get("/api/inventory/:id", (req, res) => {
    const {id} = req.params;
    console.log(req.params);
    res.status(200).send(inventory[id]);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
