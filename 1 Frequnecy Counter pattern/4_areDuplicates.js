/*WAF areDuplicates which  accepst a variable number of arguments, and checks whether there are any duplicated among the arguments passed in.*/
function areThereDuplicates(...args) {
	let map = {};
	for (let value of args) {
		map[value] = (map[value] || 0) + 1;
	}
	for (let key in map) {
		if (map[key] > 1) {
			return true;
		}
	}
	return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 1));
console.log(areThereDuplicates("a", "b", "c", "a"));
