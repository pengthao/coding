

const returnTwo = () => {
    return 2
};

const greeting = (name) => {
    return `Hello ${name}!`
}

const add = (num1,num2) => {
    return num1 + num2
}
const subtract = (num1,num2) => {
    return num1 - num2
}
const multiply = (num1,num2) => {
    return num1 * num2
}
const divide = (num1,num2) => {
    return num1 / num2
}



module.exports = {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
}