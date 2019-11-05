export {};

console.log('Hello World');

// Don't use this unless you absolutely have to
var name = 'Bob';

let name2 = 'Braiden';
const name3 = 'Jill';
name2 = 'Something';
// name3 = 'something else'; throws error because const can't be reassigned

let code: string | undefined = '123';
code = '123';

const newName = 'Bill';

function getName(name: string) {
    console.log(name);
}

if (typeof code === 'string') {
    getName(code);
}

function getNumber(): string | number {
    return 123;
}
console.log(getNumber());

type Username = 'Braiden' | 'Bill' | 'Carly';

interface User {
    firstName: string;
    lastName: string;
    id: number;
    nickname?: string;
}

const user: User = {
    firstName: 'Braiden',
    lastName: 'Cutforth',
    id: 1,
};

const user2: User = {
    firstName: 'Bill',
    lastName: 'Murray',
    id: 2,
};

function displayUser(user: User) {
    console.log(user.firstName, user.lastName, user.id);
}

let something: number | string | boolean | undefined | null = null;
something = 'name';

// falsey values
null;
undefined;
0;
'';
false;
NaN;
0 / 0;

if (false) {
} else {
    console.log('Falsey value found');
}

displayUser(user);
