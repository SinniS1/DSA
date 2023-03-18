//  WAF for factorial, to find a focatrial of given number.

function factorail(num) {
	if (num <= 0) {
		return 1;
	}
	return num * factorail(num - 1);
}

console.log(factorail(5));

/* Problems with Normal Recurssion
	1. No Base Case
	2. Forgetting to return or returning the wrong things!
	3. Stack Overflow!! */

//	Example 1
function fact1(num) {
	if (num === 1) return 1;
	return num * fact1(num); // -> this will give the stack overflow because we always pass the same value as previous one
}
// Example 2
function fact2(num) {
	if (num === 1) console.log(num); //-> this will never return the value and we will not have any base case to stop the recurssion
	return num * fact2(num - 1);
}
