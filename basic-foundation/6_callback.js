/**
 * In JS, you can pass a function as a value into another function.
 */

function greet(name, callback){

    console.log(`Hello ${name}`) // literal string
    callback();

}

// The callback function is just another function, but instead of 
// writing inside greet, you pass it in.
// function(){}
greet("Sundeeep", function(){
    console.log("How are you?");
})


// () => {}
greet("Sundeeep", () => {
    console.log("How are you?")
})