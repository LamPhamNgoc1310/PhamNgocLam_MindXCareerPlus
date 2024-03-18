// {
//     let arr = [];
//     function calc(num) {
//         for (let i = 0; i <= 100; i++) {
//             if (i % num == 0) {
//                 arr.push(i);
//             }
//         }
//     }
//     calc(2)

//     // some interesting stuff:
//     const object = {
//         calc: function () { //the key is linked with the function
//         }
//     }
//     console.log(arr);
// }
// {
//     //Referencing uses address.
//     function parseData(person) {
//         person.fullName = 'Doraemon'; // this is referencing the person object outside, pointing at the same address.
//         console.log('person in function', person);
//     }
//     const person = {
//         id: 1,
//         fullName: 'Nguyen Van A',
//         address: 'Ha Noi'
//     }

//     parseData(person); //value of person
//     console.log('person out of function', person);
// }
//sortin by ascending and descending
{
    let arr = [4, 8, 1, 30, 10, 100, 60, 38, 79, 23];

    function sortBy(type) {
        for (let i = 0; i < arr.length; i++) {
            for(let j = i+1; j <= arr.length; j++){
                if(type === 'asc'){
                    if (arr[i] > arr[j]) {
                        let tmp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = tmp;
                    }
                }
                else{
                    if (arr[i] < arr[j]) {
                        let tmp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = tmp;
                    }
                }
            }
        }
    return arr;
    }
}

console.log(sortBy('asc'));

// HW: sort students by height.