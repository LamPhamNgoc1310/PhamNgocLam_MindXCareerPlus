import { findIndexInArray, objectToString } from "./util.js";

const arr = [10, 20, 30, 40, 50];
const object = {
    name: 'Teo',
    age: 10,
}

console.log(findIndexInArray(arr, 60));
console.log(objectToString(object));

