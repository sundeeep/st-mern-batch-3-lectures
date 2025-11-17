// console.log("Global Scope: ", this)

// function greet(){
//     console.log("Greet Scope: ",this);
// }

// const greetArrow = () => {
//     console.log("This is an arrow function!")
// }

// greet()
// greetArrow()

const course = {
    courseName: "MERN + DSA",
    read: function(){
        this.sanjay = "batch 3"
        console.log("this object inside read function: ", this)
        // console.log(this.courseName);
    },
    write: function() {
        console.log("this object inside write function: ", this)
        setTimeout(() => {
            console.log("Inside setTimeout: ",this);
        }, 1000)
    }
}

course.write()

// console.log("Global Scope: ", this)

// function greet(){
//     let fullName = "Sundeeep Dasari";
//     this.sundeeep = "1234"

//     const goodMorningArrow = () => {
//         console.log("Good Morning Arrow: ", this.fullName);
//     }

//     return goodMorningArrow;
// }

// const outerGoodMorningArrow = greet();
// outerGoodMorningArrow();