const BASE_URL = "http://localhost:4000/api/";
const errCallback = (err) => console.log(`errcallbacktrigger${err}`);

//fortune and compliment

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");

const getCompliment = () => {
  axios.get(`${BASE_URL}compliment/`).then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get(`${BASE_URL}fortune/`).then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);

//weather api

const weatherAPI =
  "http://api.weatherapi.com/v1/current.json?key=9b93cb58d9684527a24233721232210&q=";
const weatherAqiNo = "&aqi=no";
const form = document.querySelector("#weather");
const zipInput = document.getElementById("zipInput");
let weatherZip = "";

const getWeather = () => {
    console.log(`${weatherAPI}${weatherZip}${weatherAqiNo}`);
    axios.get(`${weatherAPI}${weatherZip}${weatherAqiNo}`).then((res) => {
      const data = res.data;
      alert(
        `Current weather in ${data.location.name} is ${data.current.temp_f}°F`
      );
    });
  };
  
  function handleSubmit(evt) {
    evt.preventDefault();
    weatherZip = zipInput.value;
    getWeather();
    console.log(weatherZip);
    zipInput.value = "";
  }

form.addEventListener("submit", handleSubmit);


//coinflip
const headsBtn = document.getElementById("heads");
const tailsBtn = document.getElementById("tails");
const resetBtn = document.getElementById("flipReset");

const headFlip = () =>
  axios
    .get(`${BASE_URL}heads`)
    .then((res) => {
      const data = res.data;
      console.log(res.data);
      console.log(data.message);
      alert(`${data.message} your score is ${data.score}`);
    })
    .catch(errCallback);
const tailFlip = () =>
  axios
    .get(`${BASE_URL}tails`)
    .then((res) => {
      const data = res.data;
      alert(`${data.message} your current score is ${data.score}`);
    })
    .catch(errCallback);
const resetScore = () =>
  axios
    .get(`${BASE_URL}resetScore`)
    .then((res) => {
      alert(`Your score has been reset! Flip again!`);
    })
    .catch(errCallback);


headsBtn.addEventListener("click", headFlip);
tailsBtn.addEventListener("click", tailFlip);
flipReset.addEventListener("click", resetScore);

//final feature

const toDoContainer = document.querySelector("#toDo-container");
const toDoForm = document.querySelector("#toDoForm");

const tasksCallback = ({ data: tasks }) =>
  displayTasks(tasks).catch(errCallback);
const getAllTasks = () => axios.get(`${BASE_URL}toDo`).then(tasksCallback);
const createTask = (body) =>
  axios.post(`${BASE_URL}toDo`, body).then(tasksCallback).catch(errCallback);
const deleteTask = (id, task) =>
  axios
    .delete(`${BASE_URL}${id}`, { task })
    .then(tasksCallback)
    .catch(errCallback);

function taskHandler(e) {
  e.preventDefault();

  let task = document.querySelector("#toDoField");

  let taskObj = {
    task: task.value,
  };

  createTask(taskObj);

  task.value = "";
}

function createTaskCard(task) {
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");

  taskCard.innerHTML = `<div class="tk-container">
    <p class="tasks">${task.task}</p><button onclick="deleteTask(${task.id}, 'delete')">*</button>`;

  toDoContainer.appendChild(taskCard);
}

function displayTasks(arr) {
  toDoContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createTaskCard(arr[i]);
  }
}

toDoForm.addEventListener("submit", taskHandler);



/* Failed attempt

I was not able to complete this code. I wanted to create a version of the backend
demo where I could pass multiple fields and return those objects if the keycode
submitted was the same.

The next intended step was to create a function for the see codes button to pull 
previously entered objects with the same keycode.

This was a tough challenge because of the difference between array elements and
objects. I was not able to display the attributes of the object similar to
how we displayed the array elements in backend demo.

This struggle was has aided in my comprehension of objects arrays and api connections



const errCallback = err => console.log(`errcallbacktrigger${err}`)
const passCallback = ({ data: passwords}) =>displayPasswords(passwords)


const passwordContainer = document.querySelector('#password-container')
const passForm = document.querySelector('#passwordLocker')

const seeCodesBtn = document.getElementById('keyCode')

//const showAllPasswords = () => axios.get(`${BASE_URL}seeCodes/`).then(passCallback(res.data)).catch(errCallback)

const postPass = body => axios.post(`${BASE_URL}createPass`, body).then(res => {
    
    const passObj = res.data
    
    displayPasswords(passObj)

    console.log({passObj})
}).catch(errCallback)


function passwordHandler (e) {
    e.preventDefault()
    
    let website = document.getElementById('site')
    let userName = document.getElementById('userName')
    let passWord = document.getElementById('passWord')
    let keyCode = document.getElementById('keyCode')

    let passwordObj = {
        website: website.value,
        username: userName.value,
        password: passWord.value,
        keycode: keyCode.value
    }

    postPass(passwordObj)

    website.value = ''
    userName.value = ''
    passWord.value = ''
    keyCode.value = '' 
}

function createPassword(website, username, password, keycode) {
    const passCard = document.createElement('div')
    passCard.classList.add('pass-card')

    passCard.innerHTML = `<p class="passCard">${website}</p>
    <p class="passCard">${username}</p>
    <p class="password">${password}</p>
    <p class="password">${keycode}</p>`;

    console.log(`passcard ${passCard.innerHTML}`)

    passwordContainer.appendChild(passCard)
}

function displayPasswords(password) {
    passwordContainer.innerHTML = ''
    console.log(`displaypass website 0${password[0].website}`)
    console.log(`displaypass username 0${password[0].username}`)
    console.log(`displaypass password 0${password[0].password}`)
    console.log(`displaypass variable 0${password[0]}`)
    for (let i = 0; i < password.length; i++) {
        console.log(`displaypass website ${password[i].website}`)
        console.log(`displaypass username ${password[i].username}`)
        console.log(`displaypass userName ${password[i].userName}`)
        console.log(`displaypass password ${password[i].password}`)
        createPassword(password[0].website, password[0].username, password[0].password, password[0].keycode)
    }
}




passForm.addEventListener("submit", passwordHandler);
//seeCodesBtn.addEventListener("click", showAllPasswords); */
