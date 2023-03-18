// `slice` method used to create a new array with some modification. It does not make changes in Original array
// it will create new array which inclued all the elements passes as args
// slice(start, end) take twor args,
//       start      ->   starting index
//       end     ->   ending index
// if we do not give ending index it will consider the up to last index automatically
console.log("Slice");
const originalArray = [1, 2, 3, 4, 5];
console.log("New array with all the elements from index 0 to end -> ", originalArray.slice(0));
console.log("New array with all the elements from index 1 to end -> ", originalArray.slice(1));
console.log("New array with all the elements from index 2 to end -> ", originalArray.slice(2));
console.log("New array with all the elements from index 0 to end - 1  -> ", originalArray.slice(0, -1));
console.log("New array with all the elements from index 0 to end - 2  -> ", originalArray.slice(0, -2));
console.log("New array with all the elements from index 0 to end - 3  -> ", originalArray.slice(0, -3));
console.log("Original array ->", originalArray, "\n\n");

// ----------------------------------------------------------------------------------------------------------------------------------------------
// `splice` method used to modify the original array.
//  it takes three args  splice(start,numOfRemovinElem,newElem)
console.log("Splice");
const originalArray2 = [1, 2, 3, 4, 5];
// originalArray2.splice(0);  // remove all the elements from index 0 to end
// originalArray2.splice(1);  // remove all the elements from index 1 to end
// originalArray2.splice(2);  // remove all the elements from index 1 to end
// originalArray2.splice(0,2,"a");  // remove all the elements from index 0 to 2 consecutive elem and add "a"
originalArray2.splice(1, 2, "a"); // remove all the elements from index  to 2 consecutive elem and add "a"

console.log("Original array -> ", originalArray2);
