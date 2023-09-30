///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

/* I got stuck here a little bit because I reversed the reduce parameter syntax */

const initialValue = 0;
const summedPrice = cart.reduce((total, elem) => total += elem.price,0)

const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
const reducedArray = cart.reduce(reducer, initialValue);


console.log(summedPrice);
console.log(reducedArray)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

/* I also got stuck here a little bit because i was entering tax and couponValue arguments in the wrong place */

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const total = cartTotal * (1+tax) - couponValue;
    return total.toFixed(2);
}

console.log(calcFinalPrice(58, 15, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

customer uniqueId - I'm not really sure for this one. I said numbers originally because I thought
it is easier to have an index + 1 for the next customer created but some googling brought me to UUID4 
uniqueID generator functions that produce strings.

customer name - string: typically made up of alphabet characters
customer address - string: addresses typically contain a mix of numerical and alphabetical characters
customer payment info - credit card numbers are typically all numbers
customer first purchase date - string: can convert this string to a date object when needed
customer most recent purchase date - string:can convert this string to a date object when needed
customer purchase history - array: we can push objects purchased in the past into this array


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customers = [
    {
        uniqueId:1,
        name:'Peng',
        address: '123 fake street',
        paymentInfo: 12345689,
        firstPurchaseDate:'2023-09-10',
        mostRecentPurchaseDate:'2023-09-23',
        purchaseHistory: [
            {
                itemName:'Playstation 5 Console',
                itemId: 1561231,
                category: 'Video Games',
                price: 500,
                quantity: 1,
                purchaseDate:'2023-09-10'
            },
            {
                itemName:'Marvel Spider-Man',
                itemId: 1515569,
                category: 'Video Games',
                price: 60,
                quantity: 1,
                purchaseDate:'2023-09-10'
            }
        ]
    }
]


