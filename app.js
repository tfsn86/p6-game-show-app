// DOM selection
const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startGameBtn = document.querySelector('.btn__reset');
const phraseUL = document.querySelector('#phrase ul');

// Missed quesses is initialized with 0
let missedGuesses = 0;

// Listens for click on Start game button and hides the overlay
startGameBtn.addEventListener('click', () => {
	overlay.setAttribute('style', 'display:none;');
});

// Random sport phrases
const phrases = [
	'football is fun',
	'basketball is great',
	'tennis sucks',
	'golf is awesome',
	'handball is boring',
	'motorsports is fast',
];

const phraseArray = (phrases) => {
	let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
	return Array.from(randomPhrase);
};

function addPhraseToDisplay(arr) {
	// do stuff any arr that is passed in, and add to `#phrase ul`
	console.log(arr);
}

addPhraseToDisplay(phraseArray(phrases));
