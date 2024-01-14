let counting = document.getElementById("counter");
let data = document.getElementById("savedData");
let count = 0;

function increment(){
    count = count + 1;
    counting.innerText = count;
}

function savedata(){
    data.innerText +=count + " - ";
    count = 0;
    counting.innerText = 0;
}
