const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

reader.question("What would you like to calculate?", function(input){
    
    const tokens = input.split(' ');

    if(tokens.length !==3){
        console.log("Invalid input format. Please provide a math symbol and two numbers.");
        reader.close();
        return;
    }

    const mathSymbol = tokens[0];
    const num1 = Number(tokens[1]);
    const num2 = Number(tokens[2]);

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
})