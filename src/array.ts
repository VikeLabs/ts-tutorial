// Arrays

const arr = [1, 2, { val: 3 }, 'four', [5]]

// Want an array of strings only?

const myStrings: string[] = [ 'One', 'Two' ]

// Notice we can add things to the array even though it is a const
// That's because the myStrings acts more as a reference, despite javascript not having pointers or formal references.
myStrings.push('Three')

// Also, notice the method attached to myStrings. This is called a prototype method, and a ton of objects have those in javascript. They are super handy, and I'll show off a bunch more!

myStrings.length
myStrings.sort() // Returns a sorted array (not modifying original array)

// There are a few more cool methods for arrays, like forEach, map, and reduce, but we need to learn about functions first!

// Onwards to functions!
