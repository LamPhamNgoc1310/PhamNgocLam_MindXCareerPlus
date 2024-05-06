


// function findIndexInArray(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             console.log(i)
//         }
//         else {
//             console.log("Not found")
//         }
//     }
// } 

// function objectToString(object) {
//     console.log(`Hello ${object.name}, you are ${object.age} years old.`);
// }
// an alternative way

const findIndexInArray = (arr, value) => {
    const index = arr.indexOf(value);
    if (index === -1) return "Nah uh";
    return index;
};



const objectToString = (object) => {
    return `Hello ${object.name}, you are ${object.age} years old.`
};


export { findIndexInArray, objectToString };