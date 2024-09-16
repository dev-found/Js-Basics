// If else

if (true){
    console.log("hello");
}

const temperature = 43

if(temperature <= 45){
    // console.log("less than 50")
}else{
    console.log("greater than 50");
}

// if else if

const marks = 102
if(marks < 70){
    console.log("greater than 70");
}
else if(marks < 80){
    console.log("greater tha 80"); 
}
else if(marks < 90){
    console.log("greater than 90");
}
else{
    // console.log("greater than 100"); 
}


// +++++ Switch case +++++ //

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const dayName = 7

switch (dayName){
    case 1: console.log("Its Monday");
        break;

    case 2: console.log("Its Tuesday");
        break;

    case 3: console.log("Its Wednesday");
        break;

    case 4: console.log("Its Thursday");
        break;

    case 5: console.log("Its Friday");
        break;

    case 6: console.log("Its Saturday");
        break;

    // case 7: console.log("Its Sunday");
    //     break;

    default: console.log("Invalid Number");
        break;
}

// Truthy and falsy values

// ++++++ Falsy Values +++++++ //
// false, Nan, null, undefined, "", 0, -0, BigInt

// ++++++ Truthy values ++++++ //
// "0", "false", " ", [], {}, function(){}

const emptyObj = {}

// object.keys => returns Array

if(Object.keys(emptyObj).length === 0){
    // console.log("object is empty");
}

        // ++++ Important ++++ //

// Nullish coalescing operator (??): null, undefined

let val1;
// val1 = 50 ?? 100
val1 = null ?? 100
console.log(val1)


              // ++++++++ Terniary Operator +++++++++ //

//condition ? true : false
const playerName = "Rohit";
playerName === "Virat" ? console.log("player name is true") : console.log("player name is false")


 