<template>
    <!-- 계산기 1행 -->
    <div id="calc_row1">
        <button id="clean" v-on:click="clean">C</button>
        <button id="dot" value="." v-on:click="dotPrint">.</button>
        <button id="num_div" value="/" v-on:click="operation">/</button>
        <button id="back" v-on:click="back">&nbsp;</button>
    </div>
</template>

<script>
import "../css/OperationButton1.css";
import "../css/Button.css";

import { operation } from "../function/operation.js";
import { back, clean } from "../function/cleanBack.js";
import { dotPrint } from "@/function/numberInput";

export default {
    name: "OperationButton1",
    methods: {
        operation,
        back,
        clean,
        dotPrint,
    },
};
</script>
