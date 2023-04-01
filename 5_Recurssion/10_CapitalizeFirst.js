// CapatalizeFirst
/*  Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.*/
// let result = [];
// function stringCap(str) {
// 	return str[0].toUpperCase().concat(...str.slice(1));
// }
// function capitalizeFirst(arr) {
// 	if (!arr.length) return;
// 	result.push(stringCap(arr[0]));
// 	capitalizeFirst(arr.slice(1));
//     return result
// }

let result = [];
function capitalizeFirst(arr) {
	if (!arr.length) return result;
	result.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
	return capitalizeFirst(arr.slice(1));
}
console.log(capitalizeFirst(["car", "taco", "banana"]));
