// nth Fibonacci number
/*  Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
    Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
    which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers. 
*/

/*  fib(1) // 1
    fib(2) // 1
    fib(3) // 2
    fib(4) // 3
    fib(5) // 5
    fib(6) // 8
    
    From this it's possible to see that
    fib(3) // fib(2) + fib(1)
    
    Does
    fib(4) // fib(3) + fib(2)?
    
    fib(4) // (fib(2) + fib(1)) + (fib(2))
    fib(4) // (1 + 1) + (1)
    fib(4) // 1 + 1 + 1
    fib(4) // 3
    true
    
    Does
    fib(5) // (fib(4)) + (fib(3))?

    fib(5) // (fib(3) + fib(2)) + (fib(2) + fib(1))
    fib(5) // (fib(3) + fib(2)) + (1 + 1)
    fib(5) // (fib(2) + fib(1) + 1) + (1 + 1)
    fib(5) // (1 + 1 + 1) + (1 + 1)
    fib(5) // 1 + 1 + 1 + 1 + 1
    fib(5) // 5
    true
*/
function fib(num) {
	if (num <= 2) return 1;
	return fib(num - 2) + fib(num - 1);
}

console.log(fib(4));

// fibonacci series -> 1,1,2,3,5,8
