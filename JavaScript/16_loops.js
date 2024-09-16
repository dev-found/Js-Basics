// ++++++++++ For +++++++++++ //

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }
    
for (let j = 0; j < 10; j++){
    const elem = j;
    if(elem == 4){
        // console.log("4 is the best");    
    }
    // console.log(elem);
}

// +++++++++++ Nested Loops +++++++++++ //

//table printing
for(let i = 1; i<=10; i++){
    // console.log(`Table of ${i} is:`);
    for (let j = 0; j <= 10; j++) {
        // console.log(i + 'x' + j + '=' + i*j);
    }
}

// ++++++++++++ Break and Continue ++++++++++++ //

for (let index = 1; index < 10; index++) {
    if(index == 5){
        console.log("Detected 5");
        break; //  it terminates the loop immediately
    }
    console.log(index);
}
for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue; // skip the current iteration of a loop and continue with the next one
    }
    console.log(index);
}