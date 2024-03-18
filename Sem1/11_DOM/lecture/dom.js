//Selector
// id: #
// tag name: tagName
// class: .

// Access info through ID
const titleById = document.getElementById('title');
const titleByClass = document.getElementsByClassName('title');
console.log('Title by Id: ', titleById);
console.log('Title by Class: ', titleByClass);

// Query selector

const titleByQuerySelector = document.querySelectorAll('.title');
console.log('Title by Query Selector: ', titleByQuerySelector);

const titleByQuerySelector2 = document.querySelectorAll('p.title');

titleById.innerHTML = 'A lesson about DOM in HTML';
titleByClass.className = 'title super-title';
titleById.style.color = 'red';

const footerNode = document.querySelector('.footer');
const aElement = document.createElement('a');

console.log('aElement before: ', aElement);
aElement.innerHTML = 'Link to Google';
aElement.href = 'http://google.com';
console.log('footerNode: ', footerNode);
footerNode.removeChild(aElement);

// Adding list elemtents in JS
const todos = [
    'Toothbrushing', 
    'Studying', 
    'Lunch', 
    'Exercise', 
    'Dinner', 
    'Sleeping'
];
const fetchDataButtonNode = document.querySelector('#fetch-data-btn');

function fetchTodoListData(){
    const ulNode = document.querySelector('ul.todos');

    for(let i = 0; i< todos.length; i++) {
        const liElement = document.createElement('li');
        liElement.innerHTML = todos[i]
        ulNode.appendChild(liElement);    
    }

    fetchDataButtonNode.innerHTML = 'Loaded todo list data';
}
// Creating a button element
// fetchDataButtonNode.addEventListener('click', function(){
//     console.log('Button clicked');
// });

// setting items in the local storage 
localStorage.setItem('language', 'en');
localStorage.setItem('currency', 'vnd');

localStorage.removeItem('isAuthenticated');

localStorage.setItem('timezone', 'GMT+7');

const timezone = localStorage.getItem('timezone');
console.log('Timezone:', timezone);

const timezoneElement = document.createElement('h2');
timezoneElement.innerHTML = timezone;

footerNode.appendChild(timezoneElement);


const countTime = document.getElementById('count-time');
let min = 0;
let sec = 0;

const formatTimer = (num) => {
    if (num < 10) {
        return '0' + num;
    }
    return num
}

// setInterval(function(){
//     sec = sec + 1;
//     if (sec >= 60) {
//         sec = 0;
//         min = min + 1;
//     }
// }
// countTime.innerHTML = formatTimer(min) + ' : ' + formatTimer(sec));