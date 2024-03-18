// const title = document.querySelector('h1.title-1');
// console.log(title);

// // const listTitle = document.querySelectorAll('h1.title')
// // console.log(listTitle);

// // const content = firstTitle.innerHTML;
// // console.log(content);
// // // innerHTML will change the content of a tag.
// // // innerText will change the content of all text
// // firstTitle.innerHTML = "<b>this is printed by JS</b>"

// // const title = document.querySelector('h1.title');
// // title.style.color = 'red';
// // title.style.backgroundColor = 'black';


// // js on a button
// const button = document.querySelector('button#btnClick');
// const input = document.querySelector('input');
// console.log(input.value);
// let toggle = 'true';


// button.onclick = function(){
//     if(toggle){
//         title.style.color = 'red';
//         title.style.backgroundColor = 'black';
//         console.log('changed');
//     }
//     else{
//         title.style.color = 'black';
//         title.style.backgroundColor = 'transparent';
//         console.log('changed back');
//     }
//     toggle = !toggle;
//     // input.value += "alo"
//     title.innerHTML = "<b>" + input.value + "</b>";
// }

// Make a to-do list
// const button = document.querySelector('button#btnClick');
// const input = document.querySelector('input');
// const ul  = document.querySelector('ul');
// let toggle = true;

// button.onclick = function () {
//     const newLine = "<li>" + input.value + "</li>";
//     ul.innerHTML = ul.innerHTML + newLine;
// }

const button = document.querySelector('button#btnClick');
const inputName = document.querySelector('input#inputName');
const inputAge = document.querySelector('input#inputAge');
const ul = document.querySelector("ul")
let studentList= [];
let count = 0;

button.onclick = function () {
    const getValueName = inputName.value;
    const getValueAge = inputAge.value;

    const newStudent = {
        name: getValueName,
        age: getValueAge,
    }

    studentList.push(newStudent);
    for(let i = count; i<studentList.length; i++){
        const newLiElement = "<li>Name: " + studentList[i].name + " Age: "+ studentList[i].age + "</li>";
        ul.innerHTML += newLiElement;
        count += 1;
    }
}


