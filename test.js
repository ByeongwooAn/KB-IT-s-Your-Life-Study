let num1 = 0;

function numPrint(num) {
    let number = document.querySelector("h1");
    let number2 = document.querySelector("h2");

    num1 = num;

    number.innerHTML = num;
    number2.innerHTML += num;
}

function result() {
    let number = document.querySelector("h1");

    number.innerHTML = Number(num1) + Number(num1);
}
