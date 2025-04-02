<template>
    <div id="calc_area">
        <ResultArea />
        <OperationButton1 />
        <div>
            <NumberButton />
            <OperationButton2 />
        </div>
    </div>
</template>

<script>
import ResultArea from "./components/ResultArea.vue";
import OperationButton1 from "./components/OperationButton1.vue";
import OperationButton2 from "./components/OperationButton2.vue";
import NumberButton from "./components/NumberButton.vue";

export default {
    name: "App",
    components: {
        ResultArea,
        OperationButton1,
        OperationButton2,
        NumberButton,
    },
};
</script>
