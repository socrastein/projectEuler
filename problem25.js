// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn-1 + Fn-2, where F1 = 1 and F2 = 1.

// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144

// The 12th term, F12, is the first term to contain 3 digits. 

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

function getNextFib(fib1, fib2){
    return fib1 + fib2;
}

let fibLength = 0;
let fibIndex = 2;

let fib1 = 1n;
let fib2 = 1n;

while(true){
    let fibNext = getNextFib(fib1, fib2);
    fib1 = fib2;
    fib2 = fibNext;

    fibIndex++;
    fibLength = fibNext.toString().length;
    if(fibLength >= 1000){
        console.log(`Number ${fibIndex} is ${fibNext} with ${fibLength} digits.`);
        break;
    }
}