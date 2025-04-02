import { operation, valuePrint } from "./Function/operation.js";
import { back, clean } from "./Function/cleanBack.js";
import { numPrint, dotPrint } from "./Function/numberInput.js";

export const calcVariable = {
    numState: false, // 숫자 입력 여부
    enterState: false, // = 입력 여부
    dotState: false, // 소수점 입력 여부
    oper: "", // 연산자 변수
    operationCount: 0, // 연산자 입력 횟수
    result: 0, // 계산 결과값 변수
};

// 이벤트 리스너로 버튼 기능 관리
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clean").addEventListener("click", clean);
    document.getElementById("back").addEventListener("click", back);
    document
        .getElementById("dot")
        .addEventListener("click", () => dotPrint("."));
    document.getElementById("num_ent").addEventListener("click", valuePrint);

    // 숫자 버튼 이벤트 등록
    for (let i = 0; i <= 9; i++) {
        document
            .getElementById(`num${i}`)
            .addEventListener("click", () => numPrint(i.toString()));
    }

    // 연산자 버튼 이벤트 등록
    const operators = {
        num_div: "/",
        num_mul: "*",
        num_sub: "-",
        num_sum: "+",
    };
    Object.keys(operators).forEach((id) => {
        document
            .getElementById(id)
            .addEventListener("click", () => operation(operators[id]));
    });
});
