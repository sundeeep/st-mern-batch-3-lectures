
function wrapperFunc() {
    console.log(this)
    this.firstName = "Sathwik"
    const wrapper = {
        course: {
            courseName: "MERN + DSA",
            read: function () {
                this.sanjay = "batch 3"
                console.log("this object inside read function: ", this)
                // console.log(this.courseName);
            },
            write: () => {
                console.log("this object inside write arrow function: ", this)
                // setTimeout(() => {
                //     console.log("Inside setTimeout: ", this);
                // }, 1000)
            }
        }
    }

    return wrapper
}

const outerObj = {
    firstName: "Sundeeep",
    lastName: "Dasari"
}

const wrapper = wrapperFunc.call(outerObj);
wrapper.course.write();