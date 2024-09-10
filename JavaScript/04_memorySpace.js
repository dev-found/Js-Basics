// Two Types of Memory
// 1: Stack(Primitive)
// 2: Heap(Non-Primitive)

//Stack
let userName = "testUser1"

let anotherName = userName

anotherName = "testUser2"

console.log(userName)
console.log(anotherName)


//Heap(Reference)

let userOne = {
    email: "user@gmail.com",
    password: "123"
}

let userTwo = userOne

userTwo.email = "user2@yahoo.com"

console.log(userOne.email)
console.log(userTwo.email)