// function buildFullName(firstName, lastName){
//     // let fullName = firstName + lastName;
//     // return fullName;

//     return firstName + " " + lastName
// }

// // function invocation
// let result = buildFullName("Sundeeep", "Dasari")
// console.log(result);

function grind(coffeeBeans){
    return "coffeePowder";
}


function makeACoffee(milk, sugar, coffeeBeans){
    let coffee;
    coffee = milk;
    coffee = coffee + "+" + sugar // re-assigned the new value to the same variable
    let coffeePowder = grind(coffeeBeans)
    coffee = coffee + coffeePowder

    return coffee
}

let coffee = makeACoffee("milk", "sugar", "coffeePowder");
console.log(coffee);

// console.log(makeACoffee("water", "coffeePowder", "sugar", "milk"))