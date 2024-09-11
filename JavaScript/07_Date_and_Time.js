// DATE //

const myDate = new Date()
// console.log(myDate);

// console.log(myDate.toDateString());

// console.log(myDate.toString())

// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 11) // YY-MM-DD
let myCreatedDate = new Date(2023, 8, 11, 5, 1) // use toLocaleString
// let myCreatedDate = new Date("2023-09-11") // YY-MM-DD
// let myCreatedDate = new Date("01-09-23") //  MM-DD-YY

console.log(myCreatedDate.toLocaleDateString());



