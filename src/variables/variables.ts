// Forces this file to be a module. This can be ignored for now.
export {};

// Function scoped varialble. You shouldn't use this unless you absolutely need to
var someName = 'Jack';

// Block scoped variable. You should only use this if the variable actually changes.
let firstName = 'Braiden';

// Block scoped constant. You should always try to use this first as it leads to less bugs.
const lastName = 'Cutforth';

function myFn(name: string) {
    console.log(name);
}

myFn(someName);
