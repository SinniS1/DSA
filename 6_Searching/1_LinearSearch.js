function linearSearch(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			return i;
		}
	}
	return -1;
}

console.log(linearSearch([100,200,22,33,456,78,55],55))