let numState = false; // 숫자 입력 여부
let enterState = false; // = 입력 여부
let dotState = false; // 소수점 입력 여부
let oper = ""; // 연산자 변수
let operationCount = 0; // 연산자 입력 횟수
let result = 0; // 계산 결과값 변수

// 입력 초기화 함수
function clean() {
    let number = document.querySelector("h1"); // h1 선택

    // 전부 초기화
    enterState = false;
    numState = false;
    dotState = false;
    operationCount = 0;
    number.innerHTML = 0;
    result = 0;
    op = "";
}

// 입력한 숫자를 하나씩 지우는 함수
function back() {
    let number = document.querySelector("h1");

    // = 입력을 받지 않았을 경우
    if (enterState == false) {
        number.innerHTML =
            number.innerHTML.length == 1
                ? 0 // number.innerHTML.length == 1가 참일 경우 0
                : dotState == true
                ? 0 // dotState == true가 참일 경우 0
                : (number.innerText - (number.innerText % 10)) / 10;
    } else {
        // = 입력을 받은 경우 전부 초기화
        enterState = false;
        numState = false;
        dotState = false;
        operationCount = 0;
        number.innerHTML = 0;
        result = 0;
    }
}

// 숫자 입력을 받는 함수
function numPrint(num) {
    let number = document.querySelector("h1");

    // 숫자 최대 입력 길이 22 이하로 제한
    if (number.innerText.length <= 22) {
        (number.innerText == 0 || numState == false) && dotState == false
            ? (number.innerHTML = num)
            : (number.innerHTML += num);
    } else {
        // 숫자 길이 22를 넘어간 경우
        alert("입력 값을 초과했습니다.");
    }

    numState = true;
}

// 소수점을 입력 받는 함수
function dotPrint(dot) {
    let number = document.querySelector("h1");

    if (dotState == false) {
        dotState = true;

        number.innerHTML += dot;
    }
}

// 입력한 계산을 실행하는 함수
function operation(op) {
    let number = document.querySelector("h1");

    operationCount++;

    // 소수점 입력 유무 판단
    if (dotState == false) {
        // 소수점을 입력 받지 않은 경우
        if (numState == false) {
            oper = op;
        } else if (operationCount >= 2) {
            switch (oper) {
                case "+":
                    result += parseInt(number.innerText);
                    break;
                case "-":
                    result -= parseInt(number.innerText);
                    break;
                case "*":
                    result *= parseInt(number.innerText);
                    break;
                case "/":
                    if (number.innerText == 0) {
                        number.innerHTML = "0으로 나눌 수 없습니다.";
                    } else {
                        result /= parseInt(number.innerText);
                    }
            }

            // 부동소수점 오차 보정 후 출력
            number.innerHTML =
                Math.round((result + Number.EPSILON) * 1000000) / 1000000;
        } else {
            result = parseInt(number.innerText);
        }
    } else {
        // 소수점을 입력 받은 경우
        if (numState == false) {
            oper = op;
        } else if (operationCount >= 2) {
            switch (oper) {
                case "+":
                    result += parseFloat(number.innerText);
                    break;
                case "-":
                    result -= parseFloat(number.innerText);
                    break;
                case "*":
                    result *= parseFloat(number.innerText);
                    break;
                case "/":
                    if (number.innerText == 0) {
                        number.innerHTML = "0으로 나눌 수 없습니다.";
                    } else {
                        result /= parseFloat(number.innerText);
                    }
            }

            // 부동소수점 오차 보정 후 출력
            number.innerHTML =
                Math.round((result + Number.EPSILON) * 1000000) / 1000000;
        } else {
            result = parseFloat(number.innerText);
        }
    }

    oper = op;

    numState = false;
    dotState = false;
}

// 계산 결과를 출력하는 함수
function valuePrint() {
    let number = document.querySelector("h1");

    if (dotState == false) {
        switch (oper) {
            case "+":
                result += parseInt(number.innerText);
                break;
            case "-":
                result -= parseInt(number.innerText);
                break;
            case "*":
                result *= parseInt(number.innerText);
                break;
            case "/":
                result /= parseInt(number.innerText);
        }
    } else {
        switch (oper) {
            case "+":
                result += parseFloat(number.innerText);
                break;
            case "-":
                result -= parseFloat(number.innerText);
                break;
            case "*":
                result *= parseFloat(number.innerText);
                break;
            case "/":
                result /= parseFloat(number.innerText);
        }
    }

    enterState = true;
    numState = false;
    dotState = false;

    // 부동소수점 오차 보정 후 출력
    number.innerHTML =
        Math.round((result + Number.EPSILON) * 1000000) / 1000000;
}
