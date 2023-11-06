let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const phoneNumber = (array) => {
    const ac = array.slice(0,3).join('')
    const pref = array.slice(3,6).join('')
    const locEx = array.slice(6,10).join('')

    const phoneNum = `(${ac})${pref}-${locEx}`
    return phoneNum
}

console.log(phoneNumber(array))


function createPhoneNumber(numbers) {
    let phoneNumber = '(';
    for (let i = 0; i < numbers.length; i++) {
        if (i === 3) {
            phoneNumber += ') ';
        }
        if (i === 6) {
            phoneNumber += '-';
        }
        phoneNumber += numbers[i];
    }
    return phoneNumber;
}

const phoneNumber2 = createPhoneNumber(array);
console.log(phoneNumber2);