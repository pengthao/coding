// Write your code below this line

/* In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello" */

/*Array alphabet - index number plus first number 
    split by number
    contains number?
    what happens if it goes over? loop? if x>26 x=0
    split by character
    trim
    3 arrays
    -reference a-z index[i]+1 

*/

/* const decoder = (string) => {
  const alphabetArray = [];
  const translation = [];
  const numberBreak = (string.match(/\d+/) ?? ["0"])[0];
  const number = parseInt(numberBreak, 10);
  const letters = string.match(/[a-zA-Z]+/);
  const stringLetter = letters[0];
  const lettersArray = stringLetter.split("");

  for (let i = 97; i < 123; i++) {
    alphabetArray.push(String.fromCharCode(i));
  }

  for (let x = 0; x < lettersArray.length; x++) {
    for (let y = 0; y < alphabetArray.length; y++) {
      if (lettersArray[x] === alphabetArray[y]) {
        const modifiedNumber = y + number;
        translation.push(modifiedNumber)
      }
    }
  }

  const stringArray = []
  for (let z=0; z<translation.length; z++) {
      for (let a = 0; a < alphabetArray.length; a++) {
          if(translation[z] === a) {
        stringArray.push(alphabetArray[a])    
            }
        }
    };
    const finalString = stringArray.join('')
    return finalString
}
console.log(decoder("2err")) */


//ChatGPT re-write more efficient



const decoder = (string) => {
    const numberBreak = (string.match(/\d+/) ?? ["0"])[0];
    //cool to see null coalescing operator to deal with non number situations
    const number = parseInt(numberBreak, 10);
    //radix seems like something i need to explore further sometime to understand value of other number base
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let translatedString = '';
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      //in this case the number value is not being split from the string and earlier parsed out as a variable
      //i=0 character is "2" so none of the following code applied
      console.log(`char ${char}`);
      if (/[a-zA-Z]/.test(char)) {
    //regular expression pattern enclosed within slasshes. Tests the argument to see if anything matches with 
    //our first expression
        const isUpperCase = char === char.toUpperCase();
    //checks if the character is uppercase
        console.log(`isuppercase ${isUpperCase}`)
        const charIndex = alphabet.indexOf(char.toLowerCase());
    //indexOf searches the string alphabet to see if the character in question
    //matches and provides the index number of that character
        console.log(`charIndex ${charIndex}`)
        const translatedIndex = (charIndex + number) % 26;
    //charindex number + number stored earlier modulo 26 for roll over for new index value
        console.log(`translatedIndex ${translatedIndex}`)
        let translatedChar = alphabet[translatedIndex];
    //translatedChar variable stores alphabet string character at [translatedIndex value]
        console.log(`translatedChar ${translatedChar}`)
        if (isUpperCase) {
          translatedChar = translatedChar.toUpperCase();
          console.log(`translatedCarAgain ${translatedChar}`);
        }
  
        translatedString += translatedChar;
    //empty translated string adds the translated character from each loop
        console.log(`translatedString+=translatedChar ${translatedString}`);
      }
    }
  
    return translatedString;
  };
  
  console.log(decoder("65err"));
