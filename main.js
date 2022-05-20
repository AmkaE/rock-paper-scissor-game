const btnPlay = document.querySelector('.btn-play');
const playerIcon = document.querySelector('.player-icon > i');
const aiIcon = document.querySelector('.ai-icon > i');
const gameResults = document.querySelector('.game-results');

const gameOptions = ['fa-hand-back-fist', 'fa-hand', 'fa-hand-scissors'];

btnPlay.addEventListener('click', () => {
	const randnum1 = Math.floor(Math.random() * gameOptions.length);
	const randomOption1 = gameOptions[randnum1];
	const prevClass1 = playerIcon.getAttribute('class').slice(9);
	playerIcon.classList.remove(prevClass1);
	playerIcon.classList.add(randomOption1);

	const randnum2 = Math.floor(Math.random() * gameOptions.length);
	const randomOption2 = gameOptions[randnum2];
	const prevClass2 = aiIcon.getAttribute('class').slice(9);
	aiIcon.classList.remove(prevClass2);
	aiIcon.classList.add(randomOption2);

	if (randomOption1 === randomOption2) {
		gameResults.innerText = "It's a draw";
	} else if (
		(randomOption1 === gameOptions[0] && randomOption2 === gameOptions[2]) ||
		(randomOption1 === gameOptions[1] && randomOption2 === gameOptions[0]) ||
		(randomOption1 === gameOptions[2] && randomOption2 === gameOptions[1])
	) {
		gameResults.innerText = 'You win!';
	} else {
		gameResults.innerText = 'You lose!';
	}
});
