// Use design method of recurssion
// WAF collectOddElements. Which will take a array and sotre all the odd elements in a array.

function collectOddElements(array) {
	let oddArray = [];

	function helper(heloperInput) {
		if (heloperInput.length === 0) return;
		if (heloperInput[0] % 2 !== 0) {
			oddArray.push(heloperInput[0]);
		}
		helper(heloperInput.slice(1));
	}
	helper(array);
	return oddArray;
}

console.log(collectOddElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Pure Recurssion method

function collectOddElements2(arr) {
	let oddArr = [];
	if (arr.length === 0) return oddArr;
	if (arr[0] % 2 !== 0) {
		oddArr.push(arr[0]);
	}

	oddArr = oddArr.concat(collectOddElements2(arr.slice(1)));
	return oddArr;
}

console.log(collectOddElements2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
