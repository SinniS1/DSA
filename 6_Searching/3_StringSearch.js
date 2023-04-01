// Searchin in array of Strings
function StringSearch(string, str) {
	var count = 0;
	for (let i = 0; i < string.length; i++) {
		for (let j = 0; j < str.length; j++) {
			if (str[j] !== string[i + j]) {
				break;
			}
			if (j === str.length - 1) {
				count++;
			}
		}
	}
	return count;
}

console.log(StringSearch("Hello this sachin is a big stirng here", "sachin"));
