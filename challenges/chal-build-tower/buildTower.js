

function createTower(numFloors) {
    const tower = [];
    for (let i = 0; i < numFloors; i++) {
        const spaces = ' '.repeat(numFloors - i - 1); // Calculate spaces for each floor
        const stars = '*'.repeat(2 * i + 1); // Calculate stars for each floor
        const floor = spaces + stars + spaces; // Concatenate spaces, stars, and spaces
        tower.push(floor); // Add the floor to the tower array
    }
    return tower.join('\n');
}

console.log(createTower(3))


function createTower2(numFloors) {
    const tower = [];
    let stars = 1;

    for (let i = 0; i < numFloors; i++) {
        const floor = [];
        const spaces = Math.floor((2 * numFloors - stars) / 2);

        for (let j = 0; j < spaces; j++) {
            floor.push(' ');
        }

        for (let j = 0; j < stars; j++) {
            floor.push('*');
        }

        for (let j = 0; j < spaces; j++) {
            floor.push(' ');
        }

        tower.push(floor.join(''));
        stars += 2;
    }

    return tower.join('\n');
}

// Example usage
const tower3Floors = createTower2(3);
console.log(tower3Floors);