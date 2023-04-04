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

console.log(MergeSort([1, 3], [2, 4, 6, 8, 9, 10]));
