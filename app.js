// DOM selection
const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startGameBtn = document.querySelector('.btn__reset');
const phraseOnDisplayUL = document.querySelector('#phrase ul');
let onScreenButtons = Array.from(document.querySelectorAll('.keyrow button'));

// Missed quesses is initialized with 0
let missedGuesses = 0;

// Listens for click on Start game button and hides the overlay
startGameBtn.addEventListener('click', () => {
	overlay.setAttribute('style', 'display:none;');
	addPhraseToDisplay(phraseArray(phrases));
});

// Random sport phrases
const phrases = [
	'Football is fun',
	'Basketball is great',
	'Tennis sucks',
	'Golf is awesome',
	'Handball is boring',
	'Motorsports is fast',
];

const phraseArray = (phrases) => {
	let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
	return Array.from(randomPhrase);
};

function addPhraseToDisplay(arr) {
	phraseOnDisplayUL.innerHTML = arr
		.map((letter) => {
			if (letter !== ' ') {
				return `<li class="letter">${letter}</li>`;
			} else {
				return `<li class="space">${letter}</li>`;
			}
		})
		.join('');
}

function checkLetter(btn) {
	document.querySelectorAll('.letter').forEach((letter) => {
		if (btn === letter.textContent.toLowerCase()) {
			return (letter.className = 'letter show');
		} else {
			return null;
		}
	});
}

function setAttributes(element, attrs) {
	for (let key in attrs) {
		element.setAttribute(key, attrs[key]);
	}
}

onScreenButtons.forEach((e) => {
	e.addEventListener('click', function (event) {
		if (e.textContent) {
			checkLetter(e.textContent);
			setAttributes(e, { class: 'chosen', disabled: 'true' });
		}
		event.preventDefault();
	});
});

// document.addEventListener('keydown', (keyInput) => {
// 	checkLetter(keyInput.key);
// });
