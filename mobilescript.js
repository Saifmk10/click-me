// document.getElementById("counter").innerText = 3;

let counting = document.getElementById("counter");
let count = 0;
let resetData = 0;

function increment(){
    count = count + 1;
    counting.innerText = count;
}

function reset(){
    count = 0;
    counting.innerHTML = count;
}

