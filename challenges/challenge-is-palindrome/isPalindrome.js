// // Write your code below

// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true

// isPalindrom("hello")
// // returns false

// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// isPalindrom("Racecar")
// // returns false

// isPalindrom("racecar")
// // returns true

const wordCheckRev = (word) => {
    wordSpl = word.split('');
    backwards = []
    for(let i = wordSpl.length-1; i >= 0; i--) {
        backwards.push(wordSpl[i]);
    }
    const wordSplStr = wordSpl.join('')
    const backwardsStr = backwards.join('')
    if(wordSplStr === backwardsStr) {
        console.log(word)
    } else{
        console.log(`${word} is not a palindrome.`)
    }
}

wordCheckRev('hello')
wordCheckRev('racecar')


//chatgpt

function isPalindrome(word) {
    word = word.replace(/\s+/g, '');
    let left = 0;
    let right = word.length - 1;  
    while (left < right) {
        if (word[left] !== word[right]) {
            console.log(`${word} is not a palindrome.`)
            return false;
        }
        left++;
        right--;
    }
    console.log(`${word} is a palindrome.`)
    return true;
}
isPalindrome('a')
isPalindrome('noon')
isPalindrome('hello')
isPalindrome('Racecar')
isPalindrome('racecar')