/*const bladeRunner = {
    title: 'Blade Runner',
    firstName: 'Rick',
    lastName: 'Deckard',
    replicant: true,
    age: 33,
    id: 'B-263-54-03'
}

console.log(bladeRunner.lastName);
console.log(bladeRunner['title']);
bladeRunner.firstName = 'Richard';

bladeRunner.tools = ['gun', 'badge', 'flying car'];

console.log(bladeRunner);


const breakfastMeal = {
    description: 'Breakfast',
    app: 'Anchovies',
    drink: ['Orange Juice', 'Champagne', 'Water'],
    side: "McDonald's Hashbrown",
    price: 10,

    getDrinks: function() {
        console.log(this.drinks)
    },

    addDrink(newDrink) {
        this.drink.push(newDrink);
    },
}

console.log(breakfastMeal);

breakfastMeal.addDrink('Coke');

console.log(breakfastMeal)

const {side, price, description = 'title'} = breakfastMeal;

console.log(side);

const newBreakfast = {...breakfastMeal}

delete newBreakfast.price
console.log(newBreakfast);


class BankAccount {
    constructor(balance) {
        this.balance = balance
    }

    deposit(num) {
        this.balance += num
        console.log(`Deposited ${num}. Your current balance is ${this.balance}.`)
    }
    withdraw(num) {
        if(num < this.balance){
            this.balance -= num
            console.log(`You have withdrawn ${num}. Your current balance is ${this.balance}.`)
        } else {
            console.log(`Insufficient funds. Try a different ammount.`)
        }
    }
}

const account1 = new BankAccount(25);

console.log(account1);
account1.deposit(500);
account1.withdraw(450);
console.log(account1);
*/

class Robot {
    constructor(name, model, purpose) {
        this.name = name;
        this.model = model;
        this.purpose = purpose;
        this.isOn = false;
    }

    powerOn() {
        this.isOn = True;
        console.log(`${this.name} is now powered on.`)
    }
    powerOff() {
        this.isOn = False;
        console.log(`${this.name} has been powered off.`)
    }
    powerToggle() {
        if (this.isOn)  {
            console.log(`${this.name} has been powered off.`)
            this.isOn == false;
            return this.isOn
        } else {
            console.log(`${this.name} is now powered on.`)
            this.isOn == true;
            return this.isOn
        }
    }

}

const robo = new Robot('bender', 'model 1', 'bender')

console.log(robo);

robo.powerToggle();

class FighterDroid extends Robot {
    constructor(name, model, purpose, weapon) {
        super(name, model, purpose);
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`);
    }
}

const myFighter = new FighterDroid('T-2000', 'T-2000', 'Fight', 'laser')

console.log(myFighter)
myFighter.attack();


for (let key in myFighter) {
    console.log(key, myFighter[key])
}