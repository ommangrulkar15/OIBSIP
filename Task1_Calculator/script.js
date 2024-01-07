let input = document.getElementById("input");
let output = document.getElementById("output");

function display(value) {
    input.innerHTML += value;
}

function remove() {
    input.innerHTML = "";
    output.innerHTML = "";
}

function correct() {
    input.innerHTML = input.innerHTML.slice(0, -1);
}

function calculate() {
    try {
        output.innerHTML = eval(input.innerHTML);
    } catch (error) {
        output.innerHTML = "Error";
    }
}
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key.match(/[0-9+\-*/().%=]|correct|Enter/)) {
        event.preventDefault(); 
        if (key === "Enter") {
            calculate();
        } else if (key === "correct") {
            correct();
        } else {
            display(key);
        }
    }
});