// isPalindrome
/*  Write a recursive function called isPalindrome which returns true 
    if the string passed to it is a palindrome (reads the same forward and backward).
    Otherwise it returns false.

    isPalindrome('awesome') // false
    isPalindrome('foobar') // false
    isPalindrome('tacocat') // true
    isPalindrome('amanaplanacanalpanama') // true
    isPalindrome('amanaplanacanalpandemonium') // false

 */
function isPalindrome(string) {
	if (string.length <= 1) return true;
	return string[0] === string.slice(-1) && isPalindrome(string.substring(1, string.length - 1));
}
console.log(isPalindrome("saccas"));
