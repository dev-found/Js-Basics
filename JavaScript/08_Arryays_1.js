// ARRAYS

const myArr = [1, 0.7, 'yash', 6, 7] // can take multiple datatype
// console.log(myArr);

// array methods

// myArr.push('user') // adds new element
// console.log(myArr);

// myArr.pop() // removes last element
// console.log(myArr);

myArr.unshift(9) // adds the element at 0th index
myArr.shift() // removes the start element
// console.log(myArr);

const newArr = myArr.join() // converts into string

// console.log(newArr);

// slice and splice

console.log("A", myArr)

const newArr1 = myArr.slice(1,3)

console.log(newArr1)

console.log("B", myArr)

const newArr2 = myArr.splice(1,3)
console.log("C", myArr)

console.log(newArr2)