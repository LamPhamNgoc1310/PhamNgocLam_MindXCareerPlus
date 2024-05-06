console.log("=====SPREAD=====")

const arrNum = [1,2,3,4,5,6]

const person = {
    name: 'John Doe',
    age: 10,
}

const arr = [...arrNum ];
console.log(arr)

const newObject = {
    ...person
}
console.log(newObject)


console.log("=====REST=====")


// In this case, para1 and para2 are not used, but "...list" takes '3,4,5' and returns those numbers
function testRest(para1, para2, ...list){
    console.log(list)
}

testRest(1,2,3,4,5, [6,7,8,9,10])

console.log("=====DESTRUCTURING=====")

const person2 = {
    fullName: 'Jane Smith',
    age: 20.
}

const {age,fullName} = person2; 
// This is the use of destructuring, here we are accessing the key name and age. 
// The keys arent affected by the position.
console.log(fullName)

const coordinate = [0,1,1];
const [x] = coordinate; // here "x" is taking the value of coordinate[0]
console.log(x);

console.log("=====DATA TYPES=====")

const cars = ['BMW', 'AUDI', 'Volvo', 'Ford', 'Vinfast']
// Normal way of accessing data
for (let i = 0; i < cars.length; i++){
    const element = cars[i];
}

// An alternative way
// map() method returns a NEW array that has the same length as the original.
const newCarsArr = cars.map((element) => {
    return `Car name: ${element}`
})

console.log(newCarsArr)