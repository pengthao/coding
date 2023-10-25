





//conroller
/* seeCodes: (req, res) => {
    const { keyCode, website, userName, passWord } = req.body;
    console.log(`keyCode ${keyCode}`);
    for (let i = 0; i < pws.length; i++) {
      const existing = bcrypt.compareSync(keyCode, pws[i].pinHash);
      if (existing) {
        const salt = bcrypt.genSaltSync(5);
        const pinHash = bcrypt.hashSync(keyCode, salt);

        let msgObj = {
          pinHash,
          website: [website],
          username: [userName],
          password: [passWord],
        };

        let passwordsToReturn = { ...msgObj };
        delete passwordsToReturn.pinHash;
        res.status(200).send(passwordsToReturn);
      }
    }
  }, 
  
  conroller pwsobj
    {
    website: "testSeeCodes",
    username: "mrtest",
    password: "password",
    key: 1234,
  },
  {
    website: "testSeeCodes2",
    username: "mrtest2",
    password: "password2",
    key: 1234,
  }*/