function inputfieldalert() {
	const input = document.getElementById('input');

	function clickAlert() {
		alert("A binary number contains 0s or 1s");
	}

	input.addEventListener('click', clickAlert);
}

inputfieldalert();

function binaryconvert() {
	let x = document.getElementById('input').value;
	x = x.split('').reverse();
	let y = 0;
	let check = '';

	for (let i = 0; i < x.length; i++) {
		if (x[i] === '1') {
			y += Math.pow(2, i);
		}
		if (x[i] != '1' && x[i] != '0') {
			check = 'NO';
		}
	}

	if (check === 'NO') {
		document.getElementById('ans').innerHTML = 'This is not a binary number.';
	}
	else {
		document.getElementById('ans').innerHTML = y;
	}
}