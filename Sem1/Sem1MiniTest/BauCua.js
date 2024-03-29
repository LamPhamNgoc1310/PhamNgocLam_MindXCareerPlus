let counter = 0;

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
    // document.getElementsByClassName("myImg").src = images[number];
    document.getElementById("Img1").src = images[randomNumber()];
    document.getElementById("Img2").src = images[randomNumber()];
    document.getElementById("Img3").src = images[randomNumber()];
}


// Testing zone
function ShuffleInterval() {
    Shuffle();
    intervalID = setInterval(Shuffle, 30);

    setTimeout(() => {
        clearInterval(intervalID); // Clear the interval
        console.log("Shuffling stopped after 3 seconds.");
    }, 3000);
}


