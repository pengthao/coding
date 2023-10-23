const bcrypt = require('bcryptjs')
const pws = []
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A dubious friend may be an enemy in camouflage.", "Fearless courage is the foundation of victory.", "Go take a rest; you deserve it.", "It is better to deal with problems before they arise.", "Your life will be happy and peaceful."];

        let randomIndex = Math.floor(Math.random()*fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },

    getCurrentWeather: (req, res) => {
        res.status(200).send(req);
    },

    createPasswords: (req, res) => {
        console.log(req.body)
        
        const { keyCode, website, userName, passWord } = req.body
        for (let i = 0; i < pws.length; i++) {
            const existing = bcrypt.compareSync(keyCode, pws[i].pinHash)
            if (existing) {
                pws[i].push
                let passwordsToReturn = {...pws[i]}
                delete passwordsToReturn.pinHash
                res.status(200).send(passwordsToReturn)
                return
            }
        }
        
        const salt = bcrypt.genSaltSync(5)
        const pinHash = bcrypt.hashSync(keyCode, salt)
        
          let msgObj = {
            pinHash,
            website: [website],
            username: [userName],
            password: [passWord]
          }
          pws.push(msgObj)
          let passwordsToReturn = {...msgObj}
          delete passwordsToReturn.pinHash
          res.status(200).send(passwordsToReturn)
      }

}