// There are 6 primary types in javascript

const var1 = undefined; // undefined

const var2 = 0; // number (a real number with a max and min)

const var3 = "Hello, World!"; // String

const var4 = 'Hello, World!'; // String with single quotes too! - Only difference is stylistic

const var5 = true; // Boolean

// Symbols, which we are unlikely to use
// https://developer.mozilla.org/en-US/docs/Glossary/Symbol

// BigInts, which we are unlikely to use
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt


// There are two main structured types

const obj = {}; // An Object, more on this in the objects file.

const myFunction = () => console.log("Hello, World!"); // A Function! see more in the functions file

/**
 * Objects encompass a ton of types in javascript, such as dates, sets, maps etc.
 * objects will be very heavily used in almost any javascript project.
 * More on this in the objects file.
 */
/** */

// Ways to define a variable

// Function scoped variable
var pizzaType = "Cheese"

// Block scoped variable (as most variables are in most languages)
let numToppings = 1

// Constant block scoped variable
const price = 7.50

/*
 * The best strategy for deciding which keyword to use is the following:
 * Start by using const, especially if you don't expect your variable to change
 * If you find you need to change the variable at all during its lifetime, use let
 * If you try to reassign a const, you will get an error, this is the time to change it!
 * If you need to use var, you are probably writing poorly structured code. Var scoping is confusing
 * And that is exactly why you should avoid using it. If you write code that depends on var
 * Then it is likely to be confusing to those reading it.
 */

// To get the type of a variable that you don't know, you can use the typeof keyword

typeof var2; // This returns "number", you can use this with a comparison operator at runtime to make a decision based on type, more on that in the logic file.


 // Other useful definitions
 const myArray = [var1, var2, var3, var5, obj, myFunction] // An array, which is also an object.

 // As you can see, an array can contain any type.

 // Arrays are indexed similar to most languages.

 myArray[1] // Gives us var2.

 // Checkout Objects now!
 // Also notice how I didn't use semicolons (;) on some lines, that's because they are optional
 // Semicolons are highly debated in the js world, and I am pro no semi colons. It just looks so, beautful?
 // Anyways, for anything I write from here on out, I will not use semicolons :)
