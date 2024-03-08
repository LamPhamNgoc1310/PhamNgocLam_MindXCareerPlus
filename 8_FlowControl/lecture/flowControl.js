console.log("Flow Control")

//Code Block
console.log("Hello World!")
{
    let x = 1
    console.log(x);
}
//Conditions:
let a = 5;
let b= 6;
if (a>b){
    console.log('a>b');
}
else{
    console.log('The result is something else');
}

//Switch-case:
let day = new Date().getDate();

switch(day){
    case 0:
        day = "Monday";
        break;
    case 1:
        day = "Tuesday";
        break;
    case 2:
        day = "Wednesday";
        break;
    case 3:
        day = "Thursday";
        break;
    case 4:
        day = "Friday";
        break;
    case 5:
        day = "Saturday";
        break;
    case 6:
        day = "Sunday";
        break;
    default:
        day = "Invalid date"
}
console.log(day);

//Iterations:
console.log("Iterations")
sum = 0
for(i = 0; i < 3; i++) {
    sum += i
}
console.log("The sum is", sum);

// j = 0;
// y = 4
// while (j < y){
//     console.log(j)
//     j++
// }