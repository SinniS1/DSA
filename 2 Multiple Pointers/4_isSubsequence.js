/* WAF called isSubsequence which taks in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear shomewhere in the seocnd stirng, whithout their order changing. 

('hello','hello world') => true
('sing','sting') => true
('abc', 'acb') => false {order matters} */

function isSubsequence(str1, str2) {
	let str1point = 0;
	let str2point = 0;
	for (let i = 0; i < str2.length; i++) {
        console.log(str1[str1point], str2[str2point])
		if (str1[str1point] === str2[str2point]) {
            str1point++;
			str2point++;
            if (str1.length === str1point) {
                return true;
            }
		} else if (str1[str1point] !== str2[str2point]) {
            str2point++;
		}
	}
	return false;
}

console.log(isSubsequence("abc", "acbc"))