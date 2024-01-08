// document.getElementById("counter").innerText = 3;

let counting = document.getElementById("counter");
let count = 0;
// console.log(counting);

function increment(){
    count = count + 1;
    counting.innerText = count;
}

function reset(){
    counting.innerHTML = 0;
}

// reset()

// increment()

