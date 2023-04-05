// Quick Sort
// Swap Function
function Swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}
// Pivot function
function Pivot(arr, start = 0, end = arr.length) {
	var pivot = arr[start];
	var swapIdx = start;

	for (let i = start + 1; i < end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			Swap(arr, swapIdx, i);
		}
	}
	Swap(arr, start, swapIdx);
	return swapIdx;
}

console.log(Pivot([14, 4, 3, 2, 1, 6, 7, 8, 9, 10]));
