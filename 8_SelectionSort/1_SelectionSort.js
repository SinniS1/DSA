function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (i !== lowest) {
			var temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return arr;
}

console.log(selectionSort([1, 2, 3, 4, 5, 6, 12, 11, 25, 65, 74, 5, 24, 96, 32, 41, 22, 71]));

// Time Complexity is O(n^2)
