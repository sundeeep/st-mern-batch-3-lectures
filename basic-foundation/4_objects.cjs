// number, boolean, string
console.log("Objects and Arrays Demo")
//Step 1: create a bucket, database!
const STUDENT_TRIBE = [1,2,3];
console.log(STUDENT_TRIBE);


// Step 2: Create an individual Student object
const sundeeep = {
    name: "Sundeeep Dasari",
    dob: "16-12-2000",
    highSchool: "Sri Chaitanya Techno School",
    hometown: "Diviseema",
    noOfWorkExperiences: 3,
    hasGraduated: true,
}

const keerthi = {
    name: "Keerthi Dasari",
    dob: "16-12-2002",
    highSchool: "Sri Chaitanya Techno School",
    hometown: "Diviseema",
    noOfWorkExperiences: 0,
    hasGraduated: true,
}

// Step 3: Push that data to the STUDENT_TRIBE database
STUDENT_TRIBE.push(sundeeep);
STUDENT_TRIBE.push(keerthi);

console.log(STUDENT_TRIBE);