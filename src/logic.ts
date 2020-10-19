// Boolean logic


// Boolean logic in js is, interesting, to say the least.

// There are 6 falsey values in javascript, and everything else in js is considered true.
// And this is a great article on that! https://medium.com/coding-at-dawn/what-are-falsy-values-in-javascript-ca0faa34feb4

NaN // This is a special number, that ironically stands for, not a number.
null
0
false
undefined
""
0n // bigint

// There are all your standard comparison operators

0 == 0 // Loosely equal --> see bottom
0 != 0 // Loosely not equal
0 < 0 // Less than
0 <= 0 // Lt or E
0 >= 0 // Gt or E
0 > 0 // Gt
1 || 0 // OR
1 && 1 // AND
0 === 0 // Strictly equal -> use this over ==
0 !== 0 // Strictly not equal -> use this over !=

// Why use strict equals?

"" == 0 // true, despite typescript saying it will always be false becase no overlapping types
false == 0 // true again!
0n == 0 // true
// And any combinations of these things are true

"1" == 1 // true! Type coersion -- Sort of like type casting.

undefined == null // true, though sometimes this is useful.

/*
 * From the above examples, you might be able to see why using == instead of === is probably a bad idea.
 * It is much more likely a bug that '1' == 1 or false == "" evaluates to true in your program than false
 * Using === means the type and the value need to be the same in order for it to return true, which is the
 * same behaviour of most other programming languages.
 */


// NaN is super special
NaN == NaN // The craziest javascript thing. This is false. NaN is not equal to.. anything
NaN === NaN // Also false

const myVar2 = NaN
myVar2 == myVar2

isNaN(NaN) // This is true! and isNaN is a global function, defined in the engine
Number.isNaN(myVar2)

isNaN('1')
Number.isNaN('1')
