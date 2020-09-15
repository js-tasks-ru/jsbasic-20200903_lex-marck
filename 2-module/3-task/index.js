let firstOperand;
let secondOperand;
let calculator = {
  read(a, b) {
    firstOperand = a;
    secondOperand = b;
  },
  sum() {
    let sum = firstOperand + secondOperand;
    return sum;
  },
  mul() {
    let mul = firstOperand * secondOperand;
    return mul;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
