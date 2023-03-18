// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
/*
    awesome     ->      emosewa
    sachin      ->      nihcas
 */

function reverse(string) {
	let reversedString = [];
	function helper(str) {
		if (!str.length) return;
		else reversedString.push(str[str.length - 1]);
		helper(str.slice(0, -1));
	}
	helper(string);
	return reversedString.join("");
}
console.log(reverse("sachin"));