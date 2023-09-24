// let myArr = []

// myArr.push('computer', 'asdf', 1234)

// console.log(myArr)

// myArr.pop();

// console.log(myArr);

let numArr = [1,2,3,4,5]

for(let i= 0; i < numArr.length; i++) {
    console.log(numArr[i] * 2)
}

numArr.forEach((element, index) => {
    console.log(`Element: ${element}, Index: ${index}`)

    console.log(element * 2)
})