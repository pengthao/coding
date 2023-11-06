let p0 = 1000

const rateOfGrowth = 1.02

const newPeeps = 50

const popCalc = (p, g, aug, pass) => {
    let years = 0
    while (p <= pass) {
       p += (p*g) + aug
       years++
    }
    return years
}

console.log(popCalc(1500000, .025, 10000, 2000000))

function nbYear(p0, percent, aug, p) {
    if (typeof p0 !== 'number' || typeof percent !== 'number' || typeof aug !== 'number' || typeof p !== 'number') {
        throw new Error('Invalid input: All parameters must be numbers.');
    }
    
    if (p0 < 0 || percent < 0 || aug < 0 || p < 0) {
        throw new Error('Invalid input: All parameters must be non-negative.');
    }
    
    if (percent > 100) {
        throw new Error('Invalid input: Percentage should be between 0 and 100.');
    }
    
    let years = 0;
    const growthFactor = 1 + percent / 100; // calculate growth factor from percentage
    
    // Loop until the population reaches or exceeds the target population
    while (p0 < p) {
        p0 = Math.floor(p0 * growthFactor) + aug; // calculate new population after a year
        years++; // increment years
    }
    
    return years;
}

// Examples
console.log(nbYear(1500, 5, 100, 5000)); // Output: 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // Output: 10