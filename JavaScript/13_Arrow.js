//  +++++++ Arrow Function ++++++++  //

const user = {
    username: "Harsh",
    isLoggedIn: "Monday",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this => refers to the current context
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// const player = function(){
//     let playerName = "Rohit"
//     console.log(this.playerName)
// }
// player()

const cars = () => {
    let engine = "V8"
    console.log(this.engine);  // gives undefined
}
cars()

const addNumber = (num1, num2) => {
    return num1 + num2
}
console.log(addNumber(2,4))

// without using curly bracks
const numberAdd = (num1, num2) => num1 + num2

console.log(numberAdd(2,4))

// with objects
const objReturn = (num1, num2) => ({username: "Harsh"})

console.log(objReturn(2,4))

