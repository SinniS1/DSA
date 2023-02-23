// ANAGRAMS
/* Given two strings, WAF to determine if the second str is an anagram of the first.
An Anagram is a word, a phrase, or name formed by regarding the letters of another, such as cinema
formed from iceman 

eg ->
anagram === nagaram
rat !== car
qwerty === qeywrt
sachin === niasch

psedo code
// check the length of both string
usig Frequncey counter
create two maps for each string in each map have the value and ints countes stored
create a loop in which 
check if one element a map exits in another or not
check if the frequency of element is same in both map or not
*/

function anagram1(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	let str1map = {};
	let str2map = {};
	for (const val of str1) {
		str1map[val] = (str1map[val] || 0) + 1;
	}
	for (const val of str2) {
		str2map[val] = (str2map[val] || 0) + 1;
	}
	for (const key in str1map) {
		if (!(key in str2map)) {
			return false;
		}
		if (!(str1map[key] === str2map[key])) {
			return false;
		}
	}
	return true;
}
console.log(anagram1("sachin yadav", "yadnich asav"));

//  ------------------------------------------------------------------------------------------------------

function anagram2(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	const map = {};
	for (let i = 0; i < str1.length; i++) {
		let letter = str1[i];
		map[letter] ? (map[letter] += 1) : (map[letter] = 1);
	}
	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i];
		if (!map[letter]) {
			return false;
		} else {
			map[letter] -= 1;
		}
	}
	return true;
}

console.log(anagram2("sachin yadav", "yadnich asav"));
