export {} // More on this later.
// Control-flow

// some setup

const myNumbers = [1,12,1234,1235345,3634,23412,365,2345,134545,63235,2356,345,23465,34,53123,6,34253,25,65,35436,5,34356,53,456,534,6756,645768575,69778456352,432451,46]

const myStrings = ['ajsdf','asdf','asdfasdf','asdfasdhdfb','bfsdfgnyehtwery','qwerqrttg']

let myBool = true;

if(myBool) {
    // If
} else if(myBool) {
    // Else If
} else {
    // Else
}

// Ternary Operator
myBool ? 1 : 2


const x = myBool ? 1 : 2

let y = 2
if(myBool) {
    y = 1
}

let z: number;
if(myBool) {
    z = 1;
} else {
    z = 2;
}

for(let i = 0; i < 10; i++){
    console.log(i) // printf
}

while(true) {
    console.log("infiniteLoop")
    if(Math.random() < 0.05) break
}

for(let i = 0; i < myNumbers.length; i++){

}

for(let myNumber of myNumbers){
    console.log(++myNumber)
}
