// DOM selection
const phrase = document.querySelector('#phrase');
const startGameBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const phraseOnDisplayUL = document.querySelector('#phrase ul');
let onScreenButtons = Array.from(document.querySelectorAll('.keyrow button'));
const hearts = Array.from(document.querySelectorAll('ol li'));

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
	let match = null;

	document.querySelectorAll('.letter').forEach((letter) => {
		if (btn === letter.textContent.toLowerCase()) {
			letter.className = 'letter show';
			match = btn;
		}
	});
	return match;
}

function setAttributes(element, attrs) {
	for (let key in attrs) {
		element.setAttribute(key, attrs[key]);
	}
}

onScreenButtons.forEach((e) => {
	e.addEventListener('click', () => {
		checkLetter(e.textContent);
		setAttributes(e, { class: 'chosen', disabled: 'true' });

		let checkLetterVar = checkLetter(e.textContent);

		if (checkLetterVar === null) {
			missedGuesses += 1;
			for (let i = 0; i < missedGuesses; i++) {
				hearts[i].children[0].src = `images/lostHeart.png`;
			}
		}
		checkWin();
	});
});

function checkWin() {
	let elClassLetter = document.querySelectorAll('.letter');
	let elClassShow = document.querySelectorAll('.show');

	if (elClassLetter.length === elClassShow.length) {
		overlay.setAttribute('style', 'display:flex;');
		overlay.className = 'win';
		overlay.firstElementChild.innerHTML = `<h2 class="title">Win</h2>`;
	} else if (missedGuesses > 4) {
		overlay.setAttribute('style', 'display:flex;');
		overlay.className = 'lose';
		overlay.firstElementChild.innerHTML = `<h2 class="title">Lost!</h2>`;
	}
}
