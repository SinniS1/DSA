// Javasscript has internal sorting method

let numArray = [1, 45, 77, 1, 24, 33, 7, 8, 94, 478, 65, 2, 1, 8, 59, 6, 5, 8, 45, 26, 84, 1, 12, 48, 2, 1, 5, 852, 22, 1];
numArray.sort(); // -> this is not working beacause JS converts integers into Unicode then compares which gives these stupid results
console.log(numArray);
numArray.sort((a, b) => a - b); // ny doing this now js sort method will give correct sorting results
console.log(numArray);
numArray.sort((a, b) => b - a); // for desending sorting
console.log(numArray);

// the arrow function that i write in the numarray.sort() is very important
// here a and b means two elements passed into sort algo but if a - b give negative then a comes before and a- b gives positvie results then b comes before

//  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let strArray = ["Hello", "Sachin", "Tell", "Me", "About", "Yourself"];
strArray.sort(); // -> this is working
console.log(strArray);

strArray.sort((a, b) => a.length - b.length);
console.log(strArray)
