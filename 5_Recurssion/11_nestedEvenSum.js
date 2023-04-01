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
