"use strict"; // ********* Тема: Функции - основы (https://learn.javascript.ru/function-basics) ************************************

/*
Задание
Реализовать функцию, которая будет производить математические операции с введеными пользователем числами. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

Технические требования:

Считать с помощью модального окна браузера два числа.
Считать с помощью модального окна браузера математическую операцию, которую нужно совершить. Сюда может быть введено +, -, *, /.
Создать функцию, в которую передать два значения и операцию.
Вывести в консоль результат выполнения функции.

*/

var firstOperand = Number(prompt("Enter first operand"));
var secondOperand = Number(prompt("Enter second operand"));
var operator = prompt("Enter first operator");

function calc(a, b, operator) {
  var result;

  if (operator == "+") {
    result = a + b;
  } else if (operator == "-") {
    result = a - b;
  } else if (operator == "*") {
    result = a * b;
  } else if (operator == "/") {
    result = a / b;
  }

  return result;
}

var calcResult = calc(firstOperand, secondOperand, operator);
console.log("Result is ".concat(calcResult));