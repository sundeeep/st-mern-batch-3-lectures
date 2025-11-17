// call

function greetUser(abc, def, xyz) {
    console.log("Arguments: ",arguments);
    console.log(`Good Evening! ${this.fullname}`)
}

const sundeeep = {
    fullname: "Sundeeep Dasari",
    greetUser: function () {
        console.log(this);
        console.log(`Good Evening! ${this.fullname}`)
    }
}

const jayanth = {
    fullname: "Jayanth"
}

const sathwik = {
    firstName: "Sathwik"
}


greetUser.call(jayanth, "abc", "def", "xyz")

sundeeep.greetUser.call(sathwik)


// apply

// function sumOfThreeNumbers(numOne, numTwo, numThree) {
//     console.log("maths object: ", this);
//     console.log(numOne + numTwo + numThree);
// }

// const maths = {
//     A: 1
// }

// let nums = [1,2,3]
// sumOfThreeNumbers.call(maths, 1, 2, 3)
// sumOfThreeNumbers.apply(maths, [1, 2, 3])



// //bind

// function greetUser() {
//     console.log(`Good Evening! ${this.fullname}`)
// }

// const sundeeep = {
//     fullname: "Sundeeep Dasari",
//     greetUser: function () {
//         console.log(this);
//         console.log(`Good Evening! ${this.fullname}`)
//     }
// }

// const jayanth = {
//     fullname: "Jayanth"
// }

// const sathwik = {
//     fullname: "Sathwik"
// }

// console.log(greetUser.bind(sathwik));

// setTimeout(greetUser.bind(sundeeep), 1000)

// setTimeout(function greetUser(){
//     // console.log(this)
//     console.log(`Good Evening! ${this.fullname}`)
// }, 1000)