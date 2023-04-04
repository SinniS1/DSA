// Merge Sort
// Merging function
function Merging(arr1, arr2) {
	var NewArray = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			NewArray.push(arr1[i]);
			i++;
		} else {
			NewArray.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		NewArray.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		NewArray.push(arr2[j]);
		j++;
	}
	return NewArray;
}

// Splitting function
function Splitting(arr) {
	if (arr.length <= 1) return arr;
	let middle = Math.floor(arr.length / 2);
	let left = Splitting(arr.slice(0, middle));
	let right = Splitting(arr.slice(middle));
	return Merging(left, right);
}

console.log(Splitting([10, 24, 76, 73, 1]));

// Time compleity is O( n log n )

// log n  -> it means rate of growth of splitting array
// -> if we have 32 element array we need to split it 5 times, so 2 mutiply by 5 gives 32
// -> if we have 16 element array we need to split it 3 times, so 2 mutiply by 3 gives 16

// n    -> it comes from how many times we need to merge our array it will always be samee as the number of elements
