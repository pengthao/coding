// Starting array
let array = [28, 4, -12, 30, 0, -7, 13]
let array2 = [28, 4, -12, 30, 0, -7, 12]

// Write your solution below:

const addPairs = (array) => {
    for(let i=0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

const testArray1 = addPairs(array)
const testArray2 = addPairs(array2)

console.log(array)
console.log(testArray1)

console.log(array2)
console.log(testArray2)

/* for as long as i is less than array length run script then add 1 to i to test if can run again
    when i is 0 - let j =  i(0+1). for as long as j is less than array length run a script and add 1 to j to test if we can run again
        j will progress through i(1+1) while i is still 1 to see if i +j = 0. when there is no succcess i will move to j = (i+1) +1
        once j has run through then i+1 occurs and runs i=1 j=(1+1) i[1] j[2] to see if sum 0 and so on.
*/


/* first attempt This tested for 2 simultaneous values
const arrAdd = (arr) => {
    for(let i=0; i < arr.length -1; i++) {
        if (arr[i] + arr[i+1] === 0) {
            return true 
        }
    }
    return false
}

const testArray = console.log(arrAdd(array))
*/