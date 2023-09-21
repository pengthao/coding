////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const calculator = (num1, num2, callBack) => {
  return callBack(num1, num2);
}

console.log(calculator(3,4, subtract))


///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE

const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1-discount);
}

const applyFlatDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount;
}

const applyDiscount = (arr, callBack, discount) => {
  arr.forEach(product => {
    callBack(product, discount)
  });
}

applyDiscount(dogProducts, applyPercentDiscount, .10)
console.log(dogProducts)


////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE

function makeSandwich(bread) {
  return function(ingredients) {
    let order = `You ordered a ${bread} sandwich with: `

    for (let i=0; i < ingredients.length; i++) {
      if(i === ingredients.length - 1 && i !== 0) {
        order += `and ${ingredients[i]},`
      } else if (ingredients.length === 1) {
        order += `${ingredients[i]}`
      } else {
        order += `${ingredients[i]},`
      }
    }
    return order
  }
}

const makeWheatSandiwch = makeSandwich('wheat')
const makeRyeSandwich = makeSandwich('rye')

console.log(makeRyeSandwich(['bacon', 'lettuce', 'tomato']));





const lotr = ['biLbO Baggins', 'leGolAs' , 'Frodo baGGins' , 'sAMwise gammgee']

const coppyArrToCamelCase = arr => {
  const newArr = []

  for (let i=0; i<arr.length; i++) {
    const str = arr[i]
    const splitStr = str.split(' ')
    let camelCaseStr = ''

    for (let x=0; x < splitStr.length; x++) {
      let word = splitStr[x]

      word = word.toLowerCase()

      if (x !== 0) {
        word = word.charAt(0).toUpperCase() + word.slice(1)
      }
      
      camelCaseStr += word
    }

    newArr.push(camelCaseStr)

  }
  return newArr
}


/*I want to break it down so it splits the functions. so we have a function to split if it has a space' ' and creates a new aray
each time it splits it will look through the split array tolowercase the first word then upercase the 2nd word then combines the words to camelcase Str with the words then pushes that to the new aray for each iteration

*/

const copyArrAndChange = (arr,cb) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let newValue = cb(arr[i])
    result.push(newValue)
  }
  return result
}

const copyStrToCamelCase = str => {
  const splitStr = str.split(' ')
  let camelCaseStr = ''
  for(let x = 0; x < splitStr.length; x++) {
    let word = splitStr[x]
    word = word.toLowerCase()
    if (x !== 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1)
    }
    camelCaseStr += word
  }
  return camelCaseStr
}

console.log(copyArrAndChange(lotr, copyStrToCamelCase))
