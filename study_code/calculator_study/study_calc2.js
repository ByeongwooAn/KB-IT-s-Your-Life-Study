//사칙연산 프로그램
//생성자 함수 사용

function CalcDefine(num1, num2, op) {
    this.num1 = num1;
    this.num2 = num2;
    this.op = op;
    this.calculator = function () {
        switch (op) {
            case "+":
                console.log(num1 + num2);
                break;
            case "-":
                console.log(num1 - num2);
                break;
            case "*":
                console.log(num1 * num2);
                break;
            case "/":
                console.log(num1 / num2);
                break;
        }
    };
}

let calculator1 = new CalcDefine(1, 2, "*");

calculator1.calculator();
