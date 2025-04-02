<template>
    <div id="calc_row2">
        <button id="num_mul" value="*" v-on:click="operation">x</button>
        <button id="num_sub" value="-" v-on:click="operation">-</button>
        <button id="num_sum" value="+" v-on:click="operation">+</button>
        <button id="num_ent" value="=" v-on:click="valuePrint">=</button>
    </div>
</template>

<script>
import "../css/OperationButton2.css";
import { operation, valuePrint } from "../function/operation.js";

export default {
    name: "OperationButton2",
    methods: {
        operation,
        valuePrint,
    },
};
</script>
