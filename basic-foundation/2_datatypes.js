console.log("Javascript Data types...");

// Primitive Datatype: number, string, boolean, bigint, symbol ,undefined, null

// = -> Assignment Operator
// let xyz = null;
// let username;  // undefined
// username = null; // null
// username = "sundeeep"; // string
// username = 369; // number
// username = false; // boolean
// username = Symbol(123); // symbol
// username = BigInt(12345678987654323456789); //bigint
// console.log(typeof username);

// Copy, Reference(Address in a memory) 
// let xyz = "sundeeep";
// console.log("XYZ Original: ", xyz);

// let username = xyz;
// console.log("Username Original: ", username);

// username = "sundeeep dasari"
// console.log("Modified Username: ",username);
// console.log("XYZ: ", xyz);

// Non Primitives
// object: curly braces, key:value pair, comma seperated
let instagram = {
    username : "sundeeepuuu",
    age: 24
}
console.log("Instagram Original: ", instagram);

// let twitter = instagram // assign by reference (both instagram and twitter are pointing to same address in memory)
let twitter = {
    ...instagram
};

// dot(.) operator 
twitter.username = "sundeeep"

console.log("Instagram Original: ", instagram);
console.log("Twitter Modified: ", twitter)