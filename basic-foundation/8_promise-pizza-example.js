/**
 * Think of it like the pizza delivery service.
 * 1. You(frontend developer) describe: "I will bake the pizza, and when it is ready i will call either resolve (delivered) or reject (order failed)."
 * 2. JS gives you two phone numbers/ keys (resolve, reject) you can dial later.
 * 3. If you dial resolve("Pizza is ready!"), the promise becomes "fullfilled".
 * 4. If you dial reject("Pizza is over baked!"), then promise becomed "rejected".
 */

const pizzaOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;
        if(success) {
            resolve("Pizza is ready!")
        }else{
            reject("Pizza is over baked!");
        }
    }, 2000);
})

pizzaOrder.then((message) => {
    console.log("Success: ", message);
}).catch((error) => {
    console.log("Error: ", error)
})

/**
 * Steps:
 * 1. new Promise => JS calls your callback (resolve, reject) => {}, giving you resolve and reject.
 * 2. After 2 seconds:
 * 2.1. If success true -> call resolve("Pizza is ready!")
 * 2.2. Else -> call reject("Pizza is over baked!")
 * 3. Later
 * 3.1. .then() runs if you called resolve.
 * 3.2. .catch() runs if you called reject.
 */

/**
 * Shortcut
 * 1. Callback function = the recipe you give to someone else, to run later.
 * 2. resolve = "say eveything went fine, here is the result."
 * 3. reject = "say something went wrong, here's the error."
 */