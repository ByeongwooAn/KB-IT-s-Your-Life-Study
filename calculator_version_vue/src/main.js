import "./css/main.css";

import { createApp } from "vue";
import App from "./App.vue";

export const calcVariable = {
    numState: false, // 숫자 입력 여부
    enterState: false, // = 입력 여부
    dotState: false, // 소수점 입력 여부
    oper: "", // 연산자 변수
    operationCount: 0, // 연산자 입력 횟수
    result: 0, // 계산 결과값 변수
};

createApp(App).mount("#app");
