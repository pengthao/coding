/* console.log('hello world'); */
//Counting buttons
let count = 0;

const counterText  = document.querySelector('#counter');
const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')

/* console.log(counterText); */

function setCounterDisplay() {
    counterText.textContent = count
}
function increase() {
    count++
    setCounterDisplay()
}
function decrease() {
    count--
    setCounterDisplay()
}
function reset() {
    count = 0
    setCounterDisplay()
/*     alert('you reset the count!') */
}

plusBtn.addEventListener('click', increase)
minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

/////Theme buttons/////


const fbBtn = document.querySelector('.theme-buttons')

/* console.log(1, fbBtn)

function inspectingEvent(e) {
    console.log(2, e.target)
}

fbBtn.addEventListener('click', inspectingEvent) 
 */

const themeBtns = document.querySelectorAll('.theme-buttons')

/* console.log(themmeBtns) */

function selectTheme(e) {
    const theme = e.target.textContent

    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

    const buttons = document.querySelectorAll('button')

    for (let i=0; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}

for(let i=0; i<themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', selectTheme)
}

/////////////////////////////////////////////////////////

const inputField = document.querySelector('#food-input')
const foodBtn = document.querySelector('#food-btn')
const foodList = document.querySelector('#food-list')

let newFood = ''

function newFoodHandler (e) {
    newFood = e.target.value
}

function addNewFood() {
    let newPara = document.createElement('p')
    newPara.textContent = newFood

    foodList.appendChild(newPara)

    inputField.value=''

    console.log(3)

}

inputField.addEventListener('change', newFoodHandler)
foodBtn.addEventListener('click', addNewFood)

