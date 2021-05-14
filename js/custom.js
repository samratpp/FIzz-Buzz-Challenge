document.addEventListener('DOMContentLoaded', function (event) {
	let playerTurn = 1;
	let playerButton = document.getElementById('playerButton');

	playerButton.addEventListener('click', function () {
		// change the button text after first click
		playerButton.innerHTML = 'Next';

		// store the return text from fizzbuzz function
		let text = fizzBuzz(playerTurn);
		playerTurn++;

		// append p to the element
		let p = document.createElement('p');
		p.textContent = text;
		if (playerTurn % 2 == 0) {
			p.className = 'rb';
		} else {
			p.className = 'lb';
		}

		document.getElementById('speechContainer').appendChild(p);
		window.scrollTo(0, document.body.scrollHeight);
	});
});

function fizzBuzz(num) {
	if (num % 3 == 0 || num % 5 == 0) {
		if (num % 3 == 0 && num % 5 == 0) {
			return 'Fizz Buzz';
		} else if (num % 3 == 0) {
			return 'Fizz';
		} else {
			return 'Buzz';
		}
	} else {
		return num;
	}
}
