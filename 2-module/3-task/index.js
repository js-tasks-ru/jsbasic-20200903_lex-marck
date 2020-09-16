let calculator = {
  firstOperand: 0,
  secondOperand: 0,
  read(a, b) {
    return this.firstOperand = a, this.secondOperand = b;
  },
  sum() {
    let sum = this.firstOperand + this.secondOperand;
    return sum;
  },
  mul() {
    let mul = this.firstOperand * this.secondOperand;
    return mul;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
