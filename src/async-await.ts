// Async programming.

// Not everything happens one after the other..

// function test() {
//     setTimeout(() => console.log('Wow!'), 1000);
//     console.log('Such ')
// }

// test();
// console.log('Crazy ')

export function promiseGenerator(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Result.'), Math.random() * 5000)
        setTimeout(() => reject('The work was too much for me...'), Math.random() * 5000)
    })
}

function main1() {
    // Say we need to make an API call, to a service like google
    // We don't know how long it will take google to respond (maybe they're getting an unprecedented number of searches)
    // It could take 150ms for our result
    // It could take 500ms
    // All we care about though, is wha to do when we get the result.

    // Let's assume promise generator is going to give us our result, or it might even, fail!

    // If we do this, we only get the promise, but we want the result...
    const resultPromise = promiseGenerator()
    resultPromise.then((anything) => {
        console.log(anything)
        console.log('Wow!')
        const resultPromise2 = promiseGenerator()
        resultPromise2.then(() => {
            console.log('Done!')
        }).catch((err) => {
            console.log('We errored out')
        })
    }).catch((err) => {
        console.error(err)
    })
}

async function main2() {
    try {
        const result1 = await promiseGenerator()
        console.log(result1)
        console.log('Wow!')
        const resultPromise2 = promiseGenerator()
        const result2 = await resultPromise2
        console.log('Done!')
    } catch(err) {
        console.error(err)
    }
}

main2()
