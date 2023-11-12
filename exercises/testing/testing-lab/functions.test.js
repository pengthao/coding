const {returnTwo, greeting, add, subtract, multiply, divide
} = require('./functions')

let testData = {
    name: 'peng',
    num1: 1,
    num2: 43
}

it("should return the number 2", ()=> {
    const return2 = returnTwo(35)
    expect(return2).toBe(2);
})

it("should return a greeting to name", ()=> {
    const testGreet = testData.name;
    const greetings = greeting(testGreet);
    expect(greetings).toBe("Hello peng!");
})

it("should return the sum of the 2 numbers entered", ()=> {
    const testNum1 = testData.num1
    const testNum2 = testData.num2
    const addTest = add(testNum1, testNum2);
    expect(addTest).toBe(44);
})

describe('math functions', ()=> {
    test('add function should add two numbers correctly', () => {
        expect(add(testData.num1, testData.num2)).toBe(44)
    })
    test('subtract function should subtract two numbers correctly', () => {
        expect(subtract(testData.num1, testData.num2)).toBe(-42)
    })
    test('multiply function should multiply two numbers correctly', () => {
        expect(multiply(testData.num1, testData.num2)).toBe(43)
    })
    test('divide function should divide two numbers correctly', () => {
        expect(divide(testData.num1, testData.num2)).toBeCloseTo(.023)
    })
})