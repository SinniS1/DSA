// Merge Sort
// Merging function
function Merging(arr1, arr2) {
	var NewArray = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
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

console.log(Splitting([10, 24, 76, 73]));
