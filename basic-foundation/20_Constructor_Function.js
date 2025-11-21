function Student(firstname, lastname, rollnumber, email, mobile){
    this.firstName = firstname;
    this.lastName = lastname;
    this.rollNumber = rollnumber;
    this.email = email;
    this.mobile = mobile;
    this.printAllStudentDetails = function(){
        console.log(this);
    }
}

/**
 * 
 * sundeeep -> {}
 * sundeeep -> this
 * this.firstName
 * sundeeep.firstName
 * sundeeep = {
 * firstName: "Sundeeep",
 * lastName: "Dasari",
 * printAllStudentDetails: f(){}
 * }
 */

Student.prototype.getAllDetails = function(){
    return this;
}

Student.prototype.setAllDetails = function(firstname, lastname, rollnumber, email, mobile){
    this.firstName = firstname;
    this.lastName = lastname;
    this.rollNumber = rollnumber;
    this.email = email;
    this.mobile = mobile;
    return this;
}

Student.prototype.getFirstName = function(){
    return this.firstName;
}

Student.prototype.setFirstName = function(firstname){
    return this.firstName = firstname
}

const sundeeep = new Student("Sundeeep", "Dasari", "2301050100", "sundeeepdev@gmail.com", "6305309431")
const sathwik = new Student("Sathwik", "Dasari", "1234565432", "sathwik@gmail.com", "23456765432");

/**
 * 1. new object {} will be created and will be assigned to "sundeeep"
 * 2. "this" of constructor function will be bound to "new object {} -> sundeeep"
 * 3. Constructor function will be called, the arguments will be placed to the respective params.
 */