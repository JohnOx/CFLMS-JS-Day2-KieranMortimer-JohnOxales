// i0 - 100, i1 - 50, i2 - 20, i3 - 10, i4 - 5
let cache = [10, 10, 10, 10, 10];

// Units of notes to payout
let payout = [null, null, null, null, null];

// Amount user requested
let userAmount = 255;

// Method for finding the amount of each note to pay out from user request
function calculateNotes(input) {
	let i = input;

	let hundreds = (i - (i % 100)) / 100;
	i -= hundreds * 100;

	let fifties = (i - (i % 50)) / 50;
	i -= fifties * 50;

	let twenties = (i - (i % 20)) / 20;
	i -= twenties * 20;

	let tens = (i - (i % 10)) / 10;
	i -= tens * 10;

	let fives = (i - (i % 5)) / 5;
	i -= fives * 5;

	let payout = [hundreds, fifties, twenties, tens, fives];
	console.log(payout);
}

function pay() {
	let toPay = [
		cache[0] - payout[0],
		cache[1] - payout[1],
		cache[2] - payout[2],
		cache[3] - payout[3],
		cache[4] - payout[4],
	];

	console.log("Paid out: " + toPay);
	console.log("Remaining in machine: " + cache);
}

calculateNotes(userAmount);

pay();
