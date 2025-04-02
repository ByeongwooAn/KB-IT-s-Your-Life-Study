<template>
    <div id="number_area">
        <button id="num7" value="7" v-on:click="numPrint">7</button>
        <button id="num8" value="8" v-on:click="numPrint">8</button>
        <button id="num9" value="9" v-on:click="numPrint">9</button>
        <button id="num4" value="4" v-on:click="numPrint">4</button>
        <button id="num5" value="5" v-on:click="numPrint">5</button>
        <button id="num6" value="6" v-on:click="numPrint">6</button>
        <button id="num1" value="1" v-on:click="numPrint">1</button>
        <button id="num2" value="2" v-on:click="numPrint">2</button>
        <button id="num3" value="3" v-on:click="numPrint">3</button>
        <button id="num0" value="0" v-on:click="numPrint">0</button>
    </div>
</template>

<script>
import "../css/NumberButton.css";
import { numPrint } from "../function/numberInput";

export default {
    name: "NumberButton",
    methods: {
        numPrint,
    },
};
</script>
