            // Arrays Important //

//// concatenating two arrays into single array /////

const batsman = ["rohit", "virat", "gill"];

const bowler = ["bumrah", "shami", "bhuvi"];

batsman.concat(bowler) ///// it gives a new array instead of concatenating the arrays
// console.log(batsman)

/////right method to concatenate the arrays

const players = batsman.concat(bowler)
// console.log(players);

//////another method to concatenate(Special)

const newPlayersArr = [...batsman, ...bowler] // (...)=> seperators
// console.log(newPlayersArr);

//// flat /////

const subArr = [1, 3, 5, [7, 9,], 11, [13, 17, [19, 21]]]
// console.log(subArr)

const newCombinedArr = subArr.flat(Infinity) //// it combines sub-arrays into single array
// console.log(newCombinedArr)

/// of ///

let age1 = 18
let age2 = 19
let age3 = 20

console.log(Array.of(age1, age2, age3))




