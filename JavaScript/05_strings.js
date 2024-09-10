//String Methods

const name = "John"
const age = 19

// console.log(name + age)

// console.log(`My name is ${name} and my age is ${age}`);


const gameName = new String("ViceCity")
// console.log(gameName)

console.log(gameName.__proto__) // gives object


// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('t'))

// Trim

const newString = "  Jethalal   "
console.log(newString)
console.log(newString.trim()) // removes extra spaces, applied only whitespaces

// replace

const url = "https://xyz.com/mia69khalifa"
console.log(url.replace('69', '_'))

console.log(url.includes('@'))

console.log(url.split('+'))