export {};
interface User {
    firstName: string;
    lastName: string;
    id: number;
    isStudent?: boolean;
}

const user1: User = {
    firstName: 'Bill',
    lastName: 'Smith',
    id: 3,
};

const user2: User = {
    firstName: 'Jill',
    lastName: user1.lastName,
    id: user1.id,
};

// Object destructuring / ... is the spread operator
const user3: User = {
    ...user2,
    firstName: 'Nick',
};

// This is generally best practice for defining an array
const users: User[] = [user1, user2, user3];
// This is another method to define an array
const users2: Array<User> = [];

users.push({ firstName: 'Bob', lastName: 'Smith', id: 0 });

// Traditional way of iterating over an array
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

// A typescript way
for (const user of users) {
    console.log(user);
}

users.forEach(function(user) {
    console.log(user);
});

// regular function

function add(a: number, b: number) {
    return a + b;
}

// Arrow function

const multiply = (a: number, b: number) => {
    return a * b;
};

const qMultiply = (a: number, b: number) => a * b;

users.forEach(user => {
    console.log(user);
});

const pairs: [number, string][] = [[1, 'one'], [2, 'two']];

const name = pairs[0][1];

function printUser(user: User) {
    const { firstName, id } = user;

    console.log(`Hi ${firstName}. Your id is: ${id}`);
}

printUser(user3);
