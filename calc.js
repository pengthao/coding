const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


reader.question("What would you like to calculate?", function(input){

    tokens = input.split(' ');

    const positionOne = parseInt(tokens[0]);

    if (positionOne && typeof positionOne === 'number'){
        mathSymbol = tokens[1];
        num1 = Number(tokens[0]);
        num2 = Number(tokens[2]);
    } else {
        mathSymbol = tokens[0];
        num1 = Number(tokens[1]);
        num2 = Number(tokens[2]);
    }

        if (mathSymbol === "+"){
            console.log(num1 + num2);
        }
        if (mathSymbol === "-"){
            console.log(num1 - num2);
        }
    

    reader.close()
    
  });



/* truthy falsy*/














/*
function perform calculation(first position, second position results)
    first input split assigned to mathSymbol. 
    switch the mathSymbol - if mathSymbol matches any of the cases then print 

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function performCalculation(mathSymbol, operands) {
    switch (mathSymbol) {
        case "+":
            console.log(operands.reduce((acc, num) => acc + num));
            break;
        case "-":
            console.log(operands.reduce((acc, num) => acc - num));
            break;
        case "*":
        case "x":
            console.log(operands.reduce((acc, num) => acc * num));
            break;
        case "/":
            console.log(operands.reduce((acc, num) => acc / num));
            break;
        default:
            console.log("Invalid math symbol.");
    }
}

function calculate() {
    reader.question("Enter a prefix expression (Type 'exit' to quit): ", function(input) {
        if (input.toLowerCase() === 'exit') {
            reader.close();
            return;
        }

        const tokens = input.split(' ');

        const mathSymbol = tokens[0];
        const operands = tokens.slice(1).map(token => Number(token));

        if (operands.some(isNaN)) {
            console.log("Invalid number input.");
        } else {
            performCalculation(mathSymbol, operands);
        }

        calculate();
    });
}

calculate();




/* Third draft. This version does not do what I expected. This only moved the symbol to the center.
we could have completed this task by adjusting the token assignment position.

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function performCalculation(mathSymbol, num1, num2) {
    if (mathSymbol === "+") {
        console.log(num1 + num2);
    } else if (mathSymbol === "-") {
        console.log(num1 - num2);
    } else if (mathSymbol === "*" || mathSymbol === "x") {
        console.log(num1 * num2);
    } else if (mathSymbol === "/") {
        console.log(num1 / num2);
    } else {
        console.log("Invalid math symbol.");
    }
}

function calculate() {
    reader.question("What would you like to calculate? (Type 'exit' to quit)", function(input) {
        if (input.toLowerCase() === 'exit') {
            reader.close();
            return;
        }

        const tokens = input.split(' ');

        const mathSymbolIndex = tokens.findIndex(token => isNaN(token)); 
        if (mathSymbolIndex === -1) {
            console.log("Invalid input format.");
        } else {
            const mathSymbol = tokens[mathSymbolIndex];
            const num1 = Number(tokens.slice(0, mathSymbolIndex).join(' '));
            const num2 = Number(tokens.slice(mathSymbolIndex + 1).join(' '));

            if (!isNaN(num1) && !isNaN(num2)) {
                performCalculation(mathSymbol, num1, num2);
            } else {
                console.log("Invalid number input.");
            }
        }

        calculate(); 
    });
}

calculate();


*/


/* Second Draft

setup for reader.question function with readline = require('readline')


const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

function performCalculation(mathSymbol, num1, num2) {
    if (mathSymbol === "+") {
        console.log(num1 + num2);
    } else if(mathSymbol === "-") {
        console.log(num1 - num2);
    } else if(mathSymbol === "*" || mathSymbol === "x") {
        console.log(num1 * num2);
    } else if(mathSymbol === "/") {
        console.log(num1 / num2);
    } else {
        console.log("Invalid math symbol.");
    }
}

function calculate() {
    reader.question("What would you like to calculate? (Type 'exit' to quit)", function(input){
        if(input.toLowerCase()==='exit') {
            reader.close();
            return;
        }

        const tokens = input.split(' ');
    
       const  mathSymbol = tokens[0];
       let num1 = Number(tokens[1]);
       let num2 = Number(tokens[2]);    

       if(isNaN(num1) || isNaN(num2)) {
        console.log("Invalid number input.");
       } else {
            performCalculation(mathSymbol, num1, num2);
       }
    calculate();
    });
}

calculate();*/

/* First draft
    reader is a node function that prompts a user. Function input will take that response.
    we take the input and split with ' ' and store in tokens. Every space we use creates a new token value
    if there are more than 3 read out invalid and reader function .closes or return to the code.

    assign token 1 to math symbol - arrays begin with the number 0
    assign token 2 to num1
    assign token 3 to num2

    print text then value for all 3 tokens

    if the inputs do not align with symbol number number then it will return an invalid number. 
        if invalid number return printed text
    
    mathSymbol is assigned token 0
        if mathSymbol matches a symbol input then print the number assigned to token 2(num1) 
        symbol function to number assigned to token 3 (num1)
        otherwise invalid symbol

    close prompt

reader.question("What would you like to calculate?", function(input){
    
    tokens = input.split(' ');

    if(tokens.length !==3){
        console.log("Invalid input format. Please provide a math symbol and two numbers.");
        reader.close();
        return;
    }

    mathSymbol = tokens[0];
    num1 = Number(tokens[1]);
    num2 = Number(tokens[2]);

    console.log('mathSymbol', mathSymbol);
    console.log('num1', num1);
    console.log('num2', num2);

    if(isNaN(num1) || isNaN(num2)) {
        console.log("Invalid number input.");
        reader.close();
        return;
    }

    if (mathSymbol === "+"){
            console.log(num1 + num2);
    }   else if(mathSymbol === "-"){
            console.log(num1 - num2);
    }   else if(mathSymbol === "*" || mathSymbol === "x") {
            console.log(num1 * num2);
    }   else if(mathSymbol === "/"){
            console.log(num1 / num2);
    }   else {
            console.log("Invalid math symbol.");
}

    reader.close();
})*/