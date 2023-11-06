//lets create a class

class Gifts {
    constructor(name, size, clatters, weight) {
        this.name = name;
        this.size = size;
        this.clatters = clatters;
        this.weight = weight;
    }
}

const toyCar = new Gifts("toy car", "medium", "a bit", "medium")
const miniPuzzle = new Gifts("mini puzzle", "small", "yes", "light")
const cardGame = new Gifts("card game", "small","no", "light")

var wishlist = [toyCar,miniPuzzle,cardGame]

var presents = [
    {size:"medium",clatters:"a bit", weight:"medium"},{size:"small", clatters:"yes", weight:"light"}, {size:"small",clatters:"no", weight:"light"}
]

guessGift = (wish, pres) => {
    let guesses = []
    for(i=0; i<wish.length; i++) {
        const {name, size, clatters, weight} = wish[i];
        for(x=0; x<pres.length; x++) {
            const { size:sizep, clatters:clattersp, weight:weightp} = wish[x];
            if (size === sizep && clatters === clattersp && weight === weightp) {
                guesses.push(name)
            }
        } 
        }
        return guesses
}

//console.log(guessGift(wishlist, presents));


guessGift2 = (wish, pres) => {
    const result = [];
    wish.forEach(item => {
        pres.forEach(present => {
            if (
                item.size === present.size &&
                item.clatters === present.clatters &&
                item.weight === present.weight &&
                !result.includes(item.name)
                ) {
                    result.push(item.name);
                }
        });
    });
    return result;
        
}

//console.log(guessGift2(wishlist, presents));


function guessGifts3(wishlist, presents) {
    
    
    const wishlistMap = createHashMap(wishlist);
    const presentsMap = createHashMap(presents);
    const result = [];
    
    function createHashMap(array) {
      const hashMap = new Map();
      for (const obj of array) {
        const key = getKey(obj);
        hashMap.set(key, obj);
      }
      return hashMap;
    }

    for (const present of presentsMap.values()) {
      const key = getKey(present);
      if (wishlistMap.has(key)) {
        result.push(wishlistMap.get(key).name);
      }
    }
  
    return result;
  }
  
  
  function getKey(obj) {
    return `${obj.size}-${obj.clatters}-${obj.weight}`;
  }
  

  
 // console.log(guessGifts3(wishlist, presents));


 function guessGifts4(wishlist, presents) {
    const presentAttributes = {}; // Create an empty object to store present attributes as keys

    for (const present of presents) {
        const { size, clatters, weight } = present; // Destructure present object to get its attributes
        presentAttributes[`${size}-${clatters}-${weight}`] = true; // Create a unique key by concatenating attributes and set it to true
    }
    console.log(presentAttributes)
    const result = []; // Create an empty array to store matching gift names

    for (const gift of wishlist) {
        const { name, size, clatters, weight } = gift; // Destructure wishlist item to get its attributes
        const presentKey = `${size}-${clatters}-${weight}`; // Create a key using present attributes

        if (presentAttributes[presentKey]) {
            result.push(name); // If present with the same attributes exists, add the gift name to the result array
            delete presentAttributes[presentKey]; // Remove the present from the hash map to avoid duplicates
        }
    }

    return result; // Return the array containing matching gift names
}

console.log(guessGifts4(wishlist, presents));