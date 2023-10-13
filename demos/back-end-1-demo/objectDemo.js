const bladeRunnerRick = {
	title: 'Blade Runner',
	firstName: 'Rick',
	lastName: 'Deckard',
	replicant: true,
	age: 33,
	id: 'B-263-54-03',
};
console.log(bladeRunner.lastName);
console.log(bladeRunner['title']);

bladeRunner.firstName = 'Richard';

bladeRunner.tools = ['gun', 'badge', 'flying car'];

console.log({ bladeRunner });

const breakfastMeal = {
	description: 'Breakfast',
	app: 'Anchovies',
	drinks: ['Orange Juice', 'champagne'],
	side: "Mcdonald's Hashbrown",
	price: 10,

	getDrinks: function () {
		console.log(this.drinks);
	},

	addDrink(newDrink) {
		this.drinks.push(newDrink);
	},
};
console.log(breakfastMeal);

breakfastMeal.addDrink('Coke');

// console.log(breakfastMeal);
const { side, price, description: bestMeal } = breakfastMeal;
breakfastMeal.side;
console.log(side);
console.log(bestMeal);

const newBreakfast = { ...breakfastMeal };

delete newBreakfast.price;
console.log({ newBreakfast });

balance;
class BankAccount {
	constructor(balance) {
		this.balance = balance;
	}

	deposit(num) {
		this.balance += num;
		console.log(`Deposited ${num} dollars. You're new balance is ${this.balance}`);
	}

	withdraw(num) {
		if (num <= this.balance) {
			this.balance -= num;
			console.log(`You withdrew ${num} dollars. New balance: ${this.balance}`);
		} else {
			console.log(`Insufficient Funds!`);
		}
	}
}

const myAccount = new BankAccount(1000);
// console.log(myAccount);
myAccount.deposit(50);
myAccount.withdraw(1600);

class Robot {
	constructor(name, model, purpose) {
		this.name = name;
		this.model = model;
		this.purpose = purpose;
		this.isOn = false;
	}

	powerOn() {
		this.isOn = true;
		console.log(`${this.name} is now powered on`);
	}
	powerOff() {
		this.isOn = false;
		console.log(`${this.name} is now powered off`);
	}
}

const mrRobot = new Robot('Elliot', 'T-1000', 'Scramble Eggs');
const mrRobot1 = new Robot('Elliot', 'T-1000', 'Scramble Eggs');
const mrRobot3 = new Robot('Elliot', 'T-1000', 'Scramble Eggs');

class FighterDroid extends Robot {
	constructor(name, model, purpose, weapon) {
		super(name, model, purpose);
		this.weapon = weapon;
	}

	attack() {
		this.isOn
			? console.log(`${this.name} attacks with ${this.weapon}`)
			: console.log(`${this.name} is not powered on`);
	}
}

const myFighter = new FighterDroid('T-2000', 'T-2000', 'Fight', ['Laser', 'Missile']);
myFighter.powerOn();
myFighter.attack();
console.log(myFighter);

for (let key in myFighter) {
	console.log(key, myFighter[key]);
}
