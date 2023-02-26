/*WAF sameFrequency. Given two positive integers, find out if the two numbers have the smae frequency of digits.

(182,28,) => true
(34,14) => false
*/

function sameFrequency(num1, num2) {
	let str1 = num1.toString();
	let str2 = num2.toString();

	let map1 = {};
	let map2 = {};
	for (let value of str1) {
		map1[value] = (map1[value] || 0) + 1;
	}
	for (let value of str2) {
		map2[value] = (map2[value] || 0) + 1;
	}
	for (let key in map1) {
		if (!(key in map2)) {
			return false;
		}
		if (map1[key] !== map2[key]) {
			return false;
		}
	}
	return true;
}

console.log(sameFrequency(41, 41));
