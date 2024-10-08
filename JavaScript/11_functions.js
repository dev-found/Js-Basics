// Functions Basics

function funcName(){ // function decalaration
    //write anything
}
funcName() //function call
// funcName.pause()

function addtwoNumber(num_1, num_2){
    let sum = num_1 + num_2
    return sum
    console.log(num_1 + num_2) // no log can be print after return
}

const sum = addtwoNumber(11,9)
// console.log("Sum: ", sum);

//using string interpolation
// function loginUserMessage(name){
//     return `${name} just logged in`
// }
// console.log(loginUserMessage("user1"));

function loginUserMessage(name){
    if(!name){
        console.log("Please enter name!");
        return
    }
    return `${name} just logged in`
}
// console.log(loginUserMessage());

function calculateCartPrice(val1, ...num1){  //(... => rest operator)
    return num1  
}
// console.log(calculateCartPrice(2,4,6,8)) // rest operator gives output in array structure

// handling object in functions

const player = {
    playerName: "The Rock",
    title: "Heavy Weight"
}

function handleObject(anyobject){
    console.log(`player name is ${anyobject.playerName} and his title is ${anyobject.title}`);
    
}
handleObject(player)




