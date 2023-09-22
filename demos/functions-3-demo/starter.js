////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
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

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE

const copyArrToCamelCase2 = (arr, cb) => {
    let newVal = []
    for (let  i = 0; i < arr.length; i++) {
        let newValue = (cb(arr[i]))
        newVal.push(newValue)
    }
    return newVal;
}

const camelCase2 = (str) => {
    const newStr = str.split(' ')
    let newCamel = ''
    for (let x = 0; x < newStr.length; x++) {
        let word = newStr[x]
        word = word.toLowerCase()
        if(x !== 0) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        } 
    newCamel += word
    }
   return newCamel
}


console.log(copyArrToCamelCase2(lotr,camelCase2));

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

const mappedColors = colors.map(() => 'pink');

console.log(mappedColors)



/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    let greetings = []
    names.forEach(element => {
        greetings.push(`Hi ${element}`)
    });
    return greetings
}

console.log(formalGreeting(formalNames));

// Call formalGreeting passing in the formalNames array


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

const placesThatStartWithA = (places) => {
    let aArr = [];
    places.filter(element =>{
        if(element.charAt(0)=== 'A') {
            aArr.push(element)
        }
    })
    return aArr;
}

console.log(placesThatStartWithA(places));


// = places.filter()


/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

const identifier = (arr) => {
    const obj = arr.filter((element) => {
        return "programmer" in element;
    });
return obj.length > 0 ? obj[0] : null;
};


console.log(identifier(jobs));

// Do not edit the code above.

// CODE HERE

// call the function passing in the jobs array


//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    return numbers.reduce((total, element) => {
       return total += element
    });
}

console.log(productOfArray(numsToReduce));

// CODE HERE


// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

const remaining = (expArr, budget) => {
  return expArr.reduce((total, element) => {
    return total - element.amount;
  }, budget);
}
/*    let total = budget;
    expArr.reduce((element => {
        total -= element.amount
    }))
    return total;
}*/

console.log(remaining(expenses, budget));
// = expenses.reduce(//callback, //initial value)