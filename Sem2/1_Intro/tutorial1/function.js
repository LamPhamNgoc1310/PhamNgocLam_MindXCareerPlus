import hello from "./utils.js";

const addNumber = (a) => {
    return a + 2;
}


function subtractNumber(a,b) {
    console.log(a-b);
}

subtractNumber(1,2);


// this keyword

const object = {
    a: 1,
    b: 2,
    func: function (){
        console.log(this.a);
    },

    object2: {
        p1: 2,
        p2: 3,
        func: function () {
            console.log(this.p1 * 2)
        }
    },
}

object.func();
object.object2.func();

//using the imported function
hello();

