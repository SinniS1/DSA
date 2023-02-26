//  WAF for factorial, to find a focatrial of given number.

function factorail(num) {
	if (num <= 0) {
		return 1;
	}
	return num * factorail(num - 1);
}

console.log(factorail(5));
