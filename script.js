function changeColor(){

const root = document.getElementById("container");
const input = document.getElementById("input");
const copy = document.getElementById("copy");

function randomColor(){
    
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;

}

const random = randomColor();

root.style.backgroundColor = random;

input.innerText = random;

copy.addEventListener("click", function(){
    navigator.clipboard.writeText(random);
})

}

function copied(){
    alert("Color code is copied");
}