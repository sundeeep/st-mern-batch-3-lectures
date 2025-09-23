const myName = "Sundeeep Dasari";
const myFriends = [
    {
        name: "Suresh",
        age: 24
    },
    {
        name: "Vineela",
        age: 23
    },
    {
        name: "Nikhil",
        age: 25
    }
];

myFriends.push({
    name: "Charan",
    age: 24
});
// console.table(myFriends);

// task: Add one year to the age of myFriend Suresh
for (let friend of myFriends) {
    if(friend.name === "Nikhil"){
        friend.age += 1; // friend.age = friend.age + 1;
    }
}

// console.table(myFriends)