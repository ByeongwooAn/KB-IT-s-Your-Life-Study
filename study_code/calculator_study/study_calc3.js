//사칙연산 프로그램
//콜백 함수 사용

function CalcDefine(calculatorName, num1, num2, op, calcprint) {
    this.calculatorName = calculatorName;
    this.num1 = num1;
    this.num2 = num2;
    this.op = op;
    this.calculator = function () {
        switch (op) {
            case "+":
                calcprint(calculatorName, num1 + num2);
                break;
            case "-":
                calcprint(calculatorName, num1 - num2);
                break;
            case "*":
                calcprint(calculatorName, num1 * num2);
                break;
            case "/":
                calcprint(calculatorName, num1 / num2);
                break;
        }
    };
}

function calcprint(calculatorName, result) {
    console.log(`${calculatorName} 계산 결과: ${result}`);
}

let calculator1 = new CalcDefine("calculator1", 1, 2, "*", calcprint);
let calculator2 = new CalcDefine("calculator2", 5, 2, "-", calcprint);
let calculator3 = new CalcDefine("calculator3", 120, 230, "+", calcprint);
let calculator4 = new CalcDefine("calculator4", 6000000, 300, "/", calcprint);

calculator1.calculator();
calculator2.calculator();
calculator3.calculator();
calculator4.calculator();
