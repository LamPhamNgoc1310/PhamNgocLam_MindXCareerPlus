const classes = [
    {
        fullname: "Cris Ronaldo",
        mathScore: 10,
        englishScore: 8,
        chemistry: 7,
        gender: "male",
        age: 10,
        address: {
            street: "Orange County ",
            postalcode: 832832,
            district: 
            "Hoang Mai"
        }

    }
]
const names = ['Hoa', 'Vinh', 'Lam','Trung', 'Hue', 'Lan'];

//Function to print Hello
function sayHello(name){
    console.log("Hello, "+ name+'!');
}

for(let i = 0; i < names.length; i++){
    sayHello(names[i]);
}

//Function to calculate a sum

function sum(a,b){
    return a + b;
}
console.log(sum(4,5));

//Function to calculate operations between two numbers
function calculator(a, b, sign){
    if(sign == '+'){
        return a + b;
    }
    else if(sign == '-'){
        return a - b;
    }
    else if(sign == '*' || sign == 'x'){
        return a*b;
    }
    else if(sign == '/'){
        return a/b;
    }
    else{
        console.log("Invalid operator");
    }
}

console.log(calculator(10,5,'+'));
console.log(calculator(10,5,'-'));
console.log(calculator(10,5,'*'));
console.log(calculator(1920,1080,'/'));