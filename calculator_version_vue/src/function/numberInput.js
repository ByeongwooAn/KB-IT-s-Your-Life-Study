import { calcVariable } from "../main.js";

// 숫자 입력을 받는 함수
function numPrint(num) {
    let number = document.querySelector("h1");

    // 숫자 최대 입력 길이 22 이하로 제한
    if (number.innerText.length <= 22) {
        (number.innerText == 0 || calcVariable.numState == false) &&
        calcVariable.dotState == false
            ? (number.innerHTML = num.target.value)
            : (number.innerHTML += num.target.value);
    } else {
        // 숫자 길이 22를 넘어간 경우
        alert("입력 값을 초과했습니다.");
    }

    calcVariable.numState = true;
}

// 소수점을 입력 받는 함수
function dotPrint(dot) {
    let number = document.querySelector("h1");

    if (calcVariable.dotState == false) {
        calcVariable.dotState = true;

        number.innerHTML += dot.target.value;
    }
}

export { numPrint, dotPrint };
