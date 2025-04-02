import { calcVariable } from "../main.js";

// 입력 초기화 함수
function clean() {
    let number = document.querySelector("h1"); // h1 선택

    // 전부 초기화
    calcVariable.enterState = false;
    calcVariable.numState = false;
    calcVariable.dotState = false;
    calcVariable.operationCount = 0;
    number.innerHTML = 0;
    calcVariable.result = 0;
    calcVariable.oper = "";
}

// 입력한 숫자를 하나씩 지우는 함수
function back() {
    let number = document.querySelector("h1");

    // = 입력을 받지 않았을 경우
    if (calcVariable.enterState == false) {
        number.innerHTML =
            number.innerHTML.length == 1
                ? 0 // number.innerHTML.length == 1가 참일 경우 0
                : calcVariable.dotState == true
                ? 0 // dotState == true가 참일 경우 0
                : (number.innerText - (number.innerText % 10)) / 10;
    } else {
        // = 입력을 받은 경우 전부 초기화
        calcVariable.enterState = false;
        calcVariable.numState = false;
        calcVariable.dotState = false;
        calcVariable.operationCount = 0;
        number.innerHTML = 0;
        calcVariable.result = 0;
    }
}

export { clean, back };
