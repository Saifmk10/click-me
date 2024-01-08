// document.getElementById("counter").innerText = 3;

let counting = document.getElementById("counter");
let count = 0;
// console.log(counting);

function increment(){
    count = count + 1;
    counting.innerText = count;
}

function reset(){
    count = 0;
    counting.innerHTML = count;
}

// reset()

// increment()

