//object literals

//object declaration
const empInfo = {
    // every variable inside object considered as a string
    name: "Tom",
    "full name": "Tom Jerry",
    age: 26,
    email: "tom@yahoo.com",
    lastLoggedIn: ["Monday", "Friday"]
}

// console.log(empInfo);
// console.log(empInfo.email);
// console.log(empInfo["age"]);// can also be used like this 

empInfo.email = "jerry@yoyo.com"
// console.log(empInfo.email)


// Freeze object
// Object.freeze(empInfo)
empInfo.name = "John"
// console.log(empInfo);

// functions inside objects

empInfo.message = function(){
    console.log("hello Js");
}
empInfo.messageNew = function(){
    console.log(`hello Js user, ${this["full name"]}`)
}
// console.log(empInfo.message);
// console.log(empInfo.message());
// console.log(empInfo.messageNew());


// Destructuring in objects

const player = {
    playerName: "virat",
    playerAge: 30,
    highestScore: "110*"
}

// console.log(player);
// console.log(player.highestScore);

const {highestScore} = player // destructuring

console.log(highestScore)

// JSON API Intro

// {
//     "name": "testUser",
//     "age": "18",
//     "address": "Bangalore"
// }

[
    {},
    {},
    {}
]








