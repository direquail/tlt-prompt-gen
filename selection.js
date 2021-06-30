	const arrayChars = ["Naberius Tern", "Judith Deuteros", "Ianthe Tridentarius", "Ortus Nigenad", "Magnus Quinn", "Abigail Pent","Pyrrha Dve", "Harrowhark Nonagesimus","Palamedes Sextus", "Gideon Nav", "Matthias Nonius", "Commander Wake", "Colum Asht", "Marta Dyas", "Mercymorn the First", "Protesilaus Ebdoma", "Coronabeth Tridentarius", "Augustine the First", "Dulcinea Septimus", "Camilla Hect", "Cassiopeia the First", "Anastasia the First", "Cytherea the First", "Titania Tetra", "Gideon the First", "Samael Novenary", "Loveday Heptane", "Ulysses the First", "Valancy Trinit", "Alecto the First", "Cyrus the First", "Nigella Shodash", "John Gaius"]
	
	const arrayPrompts = ["Summoned a sex demon", "Discovered a sex amulet", "Gotta mate or die!", "Sex pollen", "Ninth sex ritual", "Character immune to flirting", "Forced gender", "Arranged marriage consummation", "Skin mag gives instructions", "Character A is Character B’s sex slave", "Character A is a beta", "Character A is an omega", "Character A is an alpha", "Marriage night", "Sex potion", "Aliens/RBs made them do it", "There was only one bed!", "Cuddling for warmth", "Possessed by sex demon", "Sensory deprivation", "Role reversal (necros are cavs, etc.)", "Body swap (sex is solution)", "Character A is Character B’s sex master", "Character B is a beta", "Character B is an omega", "Character B is an alpha"]

/*

// runs on "Choose characters" button click; returns the names of two randomly selected characters from the arrayChars array
function chooseCharacters () {
	// initialize array where selected characters will be stored
	let chosenChars = [];
	let chosenChar = [];

	// copy arrayChars to a mutable array for manipulation
	let eligibleChars = arrayChars;

	// while loop 
	// while the number of chosenChars is less than 2, get another random chracter from eligibleChars and push the new char to chosenChars
	while (chosenChars.length < 2) {
		chosenChar = getRandomElement(eligibleChars);
		chosenChars.push(chosenChar);
	}
	// display the chosen characters in browser window
	//
	console.log(chosenChars)
	return(chosenChars)
	document.querySelector(".charactersResults").innerHTML = chosenChars
}


// runs on "Choose prompt" button click; returns a randomly selected prompt from the arrayPrompts array
function choosePrompts () {
	// initialize array where selected prompt will be stored
	let chosenPrompts = [];

	// copy arrayPrompts to a mutable array for manipulation
	let eligiblePrompts = arrayPrompts;

	// call randomInteger() function to select the prompt from the array
	let chosenPrompt = getRandomElement(eligiblePrompts);

	// push the selected prompt from chosenPrompt to chosenPrompts
	chosenPrompts.push(chosenPrompt);

	// display the chosen prompt in browser window
	// 
	console.log(chosenPrompts)
	return(chosenPrompts)
}
*/

function getRandomElement(arr) {
return arr[randomInteger(arr.length)];
}

function removeRandomElement(arr) {
	return arr.splice(randomInteger(arr.length), 1)[0];
}

// generate a random integer between 1 and the max length of the array passed to it
function randomInteger(inputValue) {
	return Math.floor(Math.random() * inputValue);
}


document.querySelector(".gen-chars").addEventListener("click", function chooseCharacters () {
	// initialize array where selected characters will be stored
	let chosenChars = [];
	let chosenChar = [];

	// copy arrayChars to a mutable array for manipulation
	let eligibleChars = arrayChars;

	// while loop 
	// while the number of chosenChars is less than 2, get another random chracter from eligibleChars and push the new char to chosenChars
	while (chosenChars.length < 2) {
		chosenChar = getRandomElement(eligibleChars);
		chosenChars.push(chosenChar);
	}
	// display the chosen characters in browser window
	let formattedChars = chosenChars[0] + " / " + chosenChars[1]
	document.querySelector(".charactersResults").innerHTML = formattedChars
});

document.querySelector(".gen-prompts").addEventListener("click", function choosePrompts () {
	// initialize array where selected prompt will be stored
	let chosenPrompts = [];

	// copy arrayPrompts to a mutable array for manipulation
	let eligiblePrompts = arrayPrompts;

	// call randomInteger() function to select the prompt from the array
	let chosenPrompt = getRandomElement(eligiblePrompts);

	// push the selected prompt from chosenPrompt to chosenPrompts
	chosenPrompts.push(chosenPrompt);

	// display the chosen prompt in browser window
	document.querySelector(".promptResults").innerHTML = chosenPrompts
});