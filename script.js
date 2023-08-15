let counter = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

let count = 0;
function increment(){
    count++;
    counter.textContent = count;
}

const save = () => {
    saveEl.textContent += count +" - ";
    count = 0
    counter.textContent = 0;
}