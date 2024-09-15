// block scope and global scope


//global scope
let a = 40 


//block scope           //
if (true){              //
    let a = 45          //
    // const b = 55     //
    // const c = 65     //
    // console.log("inner: ", a);
                        //
}                       //
// console.log(a);
// console.log(b);
// console.log(c);


// Nested Scope

if (true){
    const username = "user1"
    if (username === "user1"){
        const website = " facebuk"
        // console.log(username + website);
    }
    // console.log(website)
}
// console.log(username)

// ++++++++++++ Interesting +++++++++++ //

function addOne(num){
    return num + 1 
}
// console.log(addOne(5))

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(2))

