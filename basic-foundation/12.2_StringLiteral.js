const lastName = "Dasari"
const firstName = "Sundeeep"

function attachLastNameToFirstName(firstname, lastname){
    // return firstname + " " + lastname; // string concatination
    // return `${firstname} ${lastname}`; // "Sundeeep Dasari"
}

const fullName = attachLastNameToFirstName(firstName, lastName);

console.log(fullName);