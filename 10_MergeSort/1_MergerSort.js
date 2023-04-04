// Merge Sort
function MergeSort(arr1, arr2) {
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
	if (i < arr1.length) {
		for (let k = j; k < arr1.length; k++) {
			NewArray.push(arr1[k]);
		}
	}
	if (j < arr2.length) {
		for (let k = j; k < arr2.length; k++) {
			NewArray.push(arr2[k]);
		}
	}
	return NewArray;
}

console.log(MergeSort([1, 3, 5, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [2, 4, 6, 8, 9, 10]));
