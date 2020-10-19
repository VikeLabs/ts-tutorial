/*
 * Objects are used a ton in javascript, sometimes like objects in Java/Python and sometimes like
 * Dictonaries or structs.
 */

 const simpleObject = {
     name: 'John',
     age: 27,
     driversNo: 12301234
 }

 simpleObject.name

 const structLikeObject = {
     myKey: 'someValue',
     anotherKey: 0,
     anotherObject: {
         nested: true //Object in an object, you can even make objects all the way down.
     }
 };

 // Want to get the value(s)?

structLikeObject.myKey;
structLikeObject.anotherObject.nested;

// Now Typescript adds a cool feature to impose typing to an object.

interface Person {
    firstName: string
    lastName: string
    age: number
    children?: Person[] // Array of person objects, that is optional with ?
}

// Note the : Person syntax. This sets the type of braiden as a Person object. A type only needs to be specified when it can't be inferred. When you are writing an object, it could be anything, so it usually needs a type.
const braiden: Person = {
    firstName: 'Braiden',
    lastName: 'Cutforth',
    age: 153,
}

const sally: Person = {
    firstName: 'Sally',
    lastName: 'Smith',
    age: 17
}

const debby: Person = {
    firstName: 'Debby',
    lastName: 'Smith',
    age: 44,
    children: [
        sally,
        {
            firstName: 'Cole',
            lastName: 'Smith',
            age: 15
        } // Don't have to define a person separately, can do it 'inline'
    ]
}

// Object key names can also be specified dynamically

const personKey = 'firstName' // Imagine a function could return a key for our object, and we didn't know what it was until runtime

debby['firstName']

// to use the dynamic key we CAN'T do this:
// debby.personKey // ERROR!
// Instead:
debby[personKey] // This, because person key is set to firstName, is equivalent to personKey.firstName
