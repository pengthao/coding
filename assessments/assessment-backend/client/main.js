const BASE_URL = "http://localhost:4000/api/";

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");


const weatherAPI =
"http://api.weatherapi.com/v1/current.json?key=9b93cb58d9684527a24233721232210&q=";
const weatherAqiNo = "&aqi=no";
const form = document.querySelector("#weather");
const zipInput = document.getElementById("zipInput");
let weatherZip = "";

const passwordContainer = document.querySelector('#password-container')
const passForm = document.querySelector('#passwordLocker')
const seeCodes = document.getElementById('keyCode')

const errCallback = err => console.log(err)
const passCallback = ({ data: passwords}) => displayPasswords(passwords)
const getAllPasswords = () => axios.get(`${BASE_URL}seeCodes/`).then(passCallback).catch(errCallback)
const createPass = body => axios.post(`${BASE_URL}createPass/`, body).then(passCallback).catch(errCallback)



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

function passwordHandler (e) {
    e.preventDefault()

    let website = document.querySelector('#site')
    let userName = document.querySelector('#userName')
    let passWord = document.querySelector('#passWord')
    let keyCode = document.querySelector('#keyCode')

    let passwords = {
        website: website.value,
        username: userName.value,
        password: passWord.value,
        keycode: keyCode.value
    }

    createPass(passwords)

    website.value = ''
    userName.value = ''
    passWord.value = ''
    keyCode.value = ''
}

function createPassword(data) {
    const passCard = document.createElement('div')
    passCard.classList.add('pass-card')
    
    passCard.innerHTML = `<p class="password">${data}</p>`
    
    passwordContainer.appendChild(passCard)
}

function displayPassword(data) {
    passwordContainer.innerHTML = ''
    for (let i = 0; i < data.passwords.length; i++) {
        createPass(data.passwords[i])
    }
}

form.addEventListener("submit", handleSubmit);
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
passForm.addEventListener("submit", passwordHandler);
