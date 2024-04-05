//SHUFFLE

const images = ["./assets/bau.png",
    "./assets/cua.png",
    "./assets/tom.png",
    "./assets/ca.png",
    "./assets/huou.png",
    "./assets/ga.png"];

function randomNumber(){
    let number = Math.floor(Math.random() * 6);
    return number
}

function Shuffle() {
    document.getElementById("Img1").src = images[randomNumber()];
    document.getElementById("Img2").src = images[randomNumber()];
    document.getElementById("Img3").src = images[randomNumber()];
}


function ShuffleInterval() {
    Shuffle();
    intervalID = setInterval(Shuffle, 30);
    
    setTimeout(() => {
        clearInterval(intervalID); // Clear the interval
        console.log("Shuffling successfully stopped after 3 sec.");
    }, 3000);
}

// POINTS INCREMENTATION
let base = 0;
// function checkClicked(choice) {
//     querySelector(choice).addEventListener("click", function(){
//         return true;
//     })
// }
// choiceList = document.querySelectorAll(".choice-item");
// function chosenChoice(){
//     for (let i = 0; i < choiceList.length; i){
//         if(checkClicked(choiceList[i]) == true){
//             increasePoint(this);
//         }
//     }
// }
// function increasePoint(element){ 
//     let number = element.querySelector(".number");
//     document.querySelector("number").innerHTML = base + 1;

//     let currentNumber = parseInt(number.textContent);
//     number.textContent = currentNumber + 1;

//     base = currentNumber + 1;
//     return base;
// }


// Testing zone
document.querySelectorAll(".choice-item").forEach(item => {
    item.addEventListener("click", function() {
        increasePoint(this);
    });
});

function increasePoint(element){
    // Find the specific "number" element within the clicked element
    let numberElement = element.querySelector(".number");
    // Increment the number displayed next to the clicked image
    let currentNumber = parseInt(numberElement.textContent);
    numberElement.textContent = currentNumber + 1;
    // Update the base variable
    base = currentNumber + 1;
}
