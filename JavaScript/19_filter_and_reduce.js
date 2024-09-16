// ++++++++++ filter +++++++++++ //

const num = [1,2,3,4,5,6,7,8]

const newNum = num.filter( (val) => val > 4)
// console.log(newNum); 

// efficient way
const myNum = []

num.forEach( (num) => {
    if(num > 4){
        myNum.push(num)
    }
})
// console.log(myNum);



const cars = [
    {
        carName: "GT3", engine: "V8", model: "2010", price: "2M USD"
    },
    {
        carName: "Buggati", engine: "V12", model: "2001", price: "3M USD"
    },
    {
        carName: "Ferarri", engine: "V6", model: "1990", price: "2M USD"
    },
    {
        carName: "Urus", engine: "v8", model: "2010", price: "2.5M USD"
    },
    {
        carName: "Audi R8", engine: "V8", model: "2005", price: "1M USD"
    },
    {
        carName: "Murcialago", engine: "V6", model: "2006", price: "2M USD"
    },
]

// const hotWheels = cars.filter( (wheels) => wheels.engine === "V6")
// const hotWheels = cars.filter( (wheels) => wheels.model > "2005")
const hotWheels = cars.filter( (wheels) => { 
    return wheels.model > "2005" && wheels.price === "2.5M USD"
})

// console.log(hotWheels);


// ++++++++++ Map ++++++++++ //

const nums = [1,2,3,4,5,6,7,8]

const newNums = nums.map( (num) => num * 10)
console.log(newNums);

