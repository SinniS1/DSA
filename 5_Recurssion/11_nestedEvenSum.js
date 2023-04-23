// nestedEvenSum
/*  Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 */

function nestedEvenSum(obj) {
	let sum = 0;
	let val = Object.values(obj);

	const helper = (input) => {
		if (!input.length) return 0;
		if (typeof input[0] === "number" && input[0] % 2 === 0) {
			sum += input[0];
		} else if (typeof input[0] === "object") {
			newInput = Object.values(input[0]);
			helper(newInput);
		}
		helper(input.slice(1));
	};

	helper(val);
	return sum;
}

var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: "yup",
		},
	},
};

var obj2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: "ball", ccc: 5 },
	d: 1,
	e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
nestedEvenSum(obj2); // 10


/**
 The nestedEvenSum function is a recursive JavaScript function that takes an object obj as input and calculates the sum of all even numeric values 
 that are nested inside the object, including nested objects.

Parameters
obj: An object that needs to be searched for even numeric values.

Return Value
Returns the sum of all even numeric values found in the input obj.

Function Implementation
The nestedEvenSum function uses a helper function called helper to recursively traverse the nested objects and sum up the even numeric values.

1. The helper function takes an array input as input, which is obtained from Object.values(obj), where obj is the input object passed to the nestedEvenSum function.
2. If input is empty (i.e., !input.length is true), the function returns 0, as there are no more elements to process.
3. If the first element of input is a number and it is even (determined using typeof input[0] === "number" && input[0] % 2 === 0), the value is added to the sum variable.
4. If the first element of input is an object (determined using typeof input[0] === "object"), a new array newInput is created by calling Object.values(input[0]), and the helper function is recursively called with newInput as the argument. This step is used to recursively traverse the nested objects.
5. The helper function is called recursively with the remaining elements of input (i.e., input.slice(1)) to continue traversing the remaining elements.
6. The helper function is initially called with the array val, which contains the values of the input obj obtained using Object.values(obj).
7. Once all the nested objects are traversed and even numeric values are added to the sum variable, the final sum is returned.
 */

