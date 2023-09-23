// Write your code below

//Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true

// hasUniqueChars("Moonday")
// // returns false

// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true


const uniqueWord = (word) => {
    let wordArr = word.split('')
    let container = []
    for (let i = 0; i < wordArr.length; i++) {
        for (let x = i+1; x < wordArr.length; x++) {
            if(wordArr[i] === wordArr[x]) {
                container.push(true)
            } else {
                container.push(false)
            }
        }
    }
    if(container.includes(true)) {
        console.log(`The word ${word} does not contain unique values.`)
    } else {
        console.log(word);
    }
    return word
}

uniqueWord('monday')