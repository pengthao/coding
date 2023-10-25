let correctGuess = 0;
let TID = 1;
let tasks = [];
//const bcrypt = require("bcryptjs");
//let pws = [];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A dubious friend may be an enemy in camouflage.",
      "Fearless courage is the foundation of victory.",
      "Go take a rest; you deserve it.",
      "It is better to deal with problems before they arise.",
      "Your life will be happy and peaceful.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
  },

  getCurrentWeather: (req, res) => {
    res.status(200).send(req);
  },

  flipCoin: (req, res) => {
    let randomIndex = Math.floor(Math.random() * 2);
    console.log(randomIndex);
    console.log(req.path);
    if (req.path === "/api/heads" || req.path === "/api/tails") {
      let numberConvert = req.path === "/api/heads/" ? 0 : 1;
      console.log(numberConvert);
      console.log(randomIndex);
      if (numberConvert === randomIndex) {
        correctGuess++;
        let guess = {
          message: "Well done!",
          score: correctGuess,
        };
        res.status(200).send(guess);
      } else if (correctGuess === 0) {
        let guess = {
          message: "thats too bad...flip again",
          score: 0,
        };
        res.status(200).send(guess);
      } else {
        let guess = {
          message: "thats too bad...flip again",
          score: correctGuess,
        };
        res.status(200).send(guess);
      }
    } else
      res
        .status(400)
        .send("invalid input. Please choose either heads or tails.");
  },

  resetScore: (req, res) => {
    correctGuess = 0;
    res.sendStatus(200);
  },
  getAllTasks: (req, res) => {
    res.status(200).send(tasks);
  },
  createNewTask: (req, res) => {
    const newTask = req.body;
    newTask.id = TID;
    TID++;
    tasks.push(newTask);

    res.status(200).send(tasks);
  },
  deleteTask: (req, res) => {
    const { id } = req.params;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === +id) {
        tasks.splice(i, 1);

        res.status(200).send(tasks);
        return;
      }
    }
    res.status(400).send("Could not find the task to delete.");
  },
};

/*   createPasswords: (req, res) => {
      const { keycode, website, username , password } = req.body;

      for (let i = 0; i < pws.length; i++) {
      const existing = bcrypt.compareSync(keycode, pws[i].pinHash);
      if (existing) {
        pws[i].website.push(website);
        pws[i].username.push(username);
        pws[i].password.push(password);
        console.log(`pws push${pws[i].website}`) 

        let passwordsToReturn = { ...pws[i] };
        delete passwordsToReturn.pinHash;
        res.status(200).send(passwordsToReturn);
        return;
      }
    }

    const salt = bcrypt.genSaltSync(5);
    const pinHash = bcrypt.hashSync(keycode, salt);

    let msgObj = [{
      pinHash,
      website: website,
      username: username,
      password: password,
      keycode: keycode
    }];

    console.log(`message object ${msgObj}`)

    pws.push(msgObj);
    let passwordsToReturn = { ...msgObj };
    delete passwordsToReturn.pinHash;
    res.status(200).send(passwordsToReturn);
  } */
