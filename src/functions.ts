// Functions

// There are two ways to define a function in javascript

// Method 1(A)
function foo() {
    // Do something
}

// Method 1(B)
const foo2 = function() {
    // Do something, again
}


// Method 2
const bar = () => {
    // Do something else
}

// The two definitions have slightly different meanings, and those are best explained at this link:
// https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
// For the most part, it doesn't matter unless you are using 'this'

// There is an exception for the arrow function though in how it behaves.

const ex1 = () => {
    return 1
}

const ex2 = () => 1 // Implicit return

// ex1 and ex2 both return 1
// If you omit the curly braces in an arrow function and specify one statement, it will return the result of that statement

const x = 4

const ex3 = () => x * 4 // Grabs x from the lexical context (see the link above);

function ex3alt () {
    return x * 4
}

const ex4 = (x: number) => x * 3;

ex3() // returns 16

ex4(63) // returns 63

function opt(x?: number) {
    if(x !== undefined) {
        console.log(x)
    } else {
        console.log('X was not defined')
    }
}

opt()
opt(12)
opt(0)
