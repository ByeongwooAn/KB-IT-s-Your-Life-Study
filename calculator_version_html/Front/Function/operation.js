import { calcVariable } from "../main.js";

// 입력한 계산을 실행하는 함수
function operation(op) {
    let number = document.querySelector("h1");

    calcVariable.operationCount++;

    if (calcVariable.numState) {
        if (calcVariable.operationCount >= 2) {
            switch (calcVariable.oper) {
                case "+":
                    calcVariable.result += Number(number.innerText);
                    break;
                case "-":
                    calcVariable.result -= Number(number.innerText);
                    break;
                case "*":
                    calcVariable.result *= Number(number.innerText);
                    break;
                case "/":
                    if (number.innerText === "0") {
                        number.innerHTML = "0으로 나눌 수 없습니다.";
                        return;
                    } else {
                        calcVariable.result /= Number(number.innerText);
                    }
            }

            // 부동소수점 오차 보정 후 출력
            number.innerHTML =
                Math.round((calcVariable.result + Number.EPSILON) * 1000000) /
                1000000;
        } else {
            calcVariable.result = Number(number.innerText);
        }
    }

    calcVariable.oper = op;
    calcVariable.numState = false;
    calcVariable.dotState = false;
}

// 계산 결과를 출력하는 함수
function valuePrint() {
    let number = document.querySelector("h1");

    if (calcVariable.oper === "/") {
        if (number.innerText === "0") {
            number.innerHTML = "0으로 나눌 수 없습니다.";
            return;
        }
    }

    switch (calcVariable.oper) {
        case "+":
            calcVariable.result += Number(number.innerText);
            break;
        case "-":
            calcVariable.result -= Number(number.innerText);
            break;
        case "*":
            calcVariable.result *= Number(number.innerText);
            break;
        case "/":
            calcVariable.result /= Number(number.innerText);
            break;
    }

    calcVariable.enterState = true;
    calcVariable.numState = false;
    calcVariable.dotState = false;

    // 부동소수점 오차 보정 후 출력
    number.innerHTML =
        Math.round((calcVariable.result + Number.EPSILON) * 1000000) / 1000000;
}

export { operation, valuePrint };
