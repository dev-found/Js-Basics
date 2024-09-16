// high order array loops

// +++++++++ for of loop +++++++++ //
// ["", "", ""]
// [{}, {}]

const arr = [1, 2, 3, 4]

for (const num of arr) {
    // console.log(num);
}

// +++++++++++ Maps ++++++++++ //

// map is a object that hold key value pairs, unique values

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('ENG', "England")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

// ++++++++ for in loop +++++++++ //

const games = {
    game1: "NFS",
    game2: "GTA",
    game3: "IGI",
}

// for of is not iterable on objects, use for in

// for (const [key, value] of games) {
//     console.log(key, value);
// }

for (const key in games) {
    // console.log(`${key} is ${games[key]}`);
}

// for in on array
const languages = ["js", "python", "rust"]

for (const key in languages) {
    // console.log(languages[key]);
}


// ++++++++ For each loop +++++++++ //

const codes = ["IN", "US", "GER", "FR"]

codes.forEach( function (item) {
    // console.log(item);
} ) // using call back function


//using arrow function
const cars = ["Buggati", "ferarri", "Koenigsegg", "porsche"]
cars.forEach( (val) => {
    // console.log(val);
})

//simple method 
function printCar(item){
    // console.log(item);
}
cars.forEach(printCar)

// ++++++++++ Important method ++++++++++ //

const myCar = [
    {
        carName: "Ferarri",
        engineName: "V8"
    },
    {
        carName: "Aventador",
        engineName: "V12"
    },
    {
        carName: "Porsche GT3",
        engineName: "V6"
    }
]

myCar.forEach( (details) => {
    console.log(details.carName);
})