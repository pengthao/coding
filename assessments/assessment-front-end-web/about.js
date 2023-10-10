console.log("hello world");

const form = document.querySelector('#contact');
const inputBox = document.getElementById('otherInput')
const compliments = document.getElementById('compliments')
const nameBox = document.getElementById('nameInput')
const messageBox = document.getElementById('messageInput')
const googleCheck = document.getElementById('gcb')
const fbCheck = document.getElementById('fcb')
const oCheck = document.getElementById('ocb')


console.log(inputBox)

function handleSubmit(evt) {
	evt.preventDefault();
	inputBox.value = ''
	nameBox.value=''
	messageBox.value=''
	googleCheck.checked=false
	fbCheck.checked=false
	oCheck.checked=false
	alert('form submitted');


}

/* const giveCompliment = () => {
    const complimentsList = compliments.childNodes;
    const randomIndex = Math.floor(Math.random() * complimentsList.length);

    // Ensure the selected element is an <li> element
    let randomElement;
    do {
        randomElement = complimentsList[randomIndex];
    } while (randomElement.tagName !== 'LI');

    console.log(randomElement.textContent);
}; */


/* first attempt works wanted to see if I could make this more efficient. 
ChatGPT suggested childNodes.
*/

const giveCompliment = () => {	
	let complimentsListArray = Array.from(compliments.getElementsByTagName('li')).map(li => li.textContent)
	const randomIndex = Math.floor(Math.random() * complimentsListArray.length)
	const randomElement = complimentsListArray[randomIndex]
	alert(randomElement)
} 


document.getElementById('duck').addEventListener('mouseenter', giveCompliment);
form.addEventListener('submit', handleSubmit);




