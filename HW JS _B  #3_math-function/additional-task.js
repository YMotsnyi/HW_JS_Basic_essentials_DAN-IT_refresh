"use strictc";

// ********* Тема: Функции - основы (https://learn.javascript.ru/function-basics) ************************************

/*
Необязательное задание продвинутой сложности:

После ввода данных добавить проверку их корректности. Если пользователь не ввел числа, либо при вводе указал не числа, - спросить оба числа заново (при этом значением по умолчанию для каждой из переменных должна быть введенная ранее информация).
*/

let firstOperand;
let operator;
let secondOperand;

function collectData() {
firstOperand = Number(prompt("Enter first operand", firstOperand));
operator = prompt("Enter operator", operator);
secondOperand = Number(prompt("Enter second operand", secondOperand));
}

function validate() {
  while (firstOperand == "" || isNaN(firstOperand) === true || secondOperand == "" || isNaN(secondOperand) === true) {
    alert("You have entered incorrect data!")
  collectData();
  }
}

function calc(a, b, operator) {
  let result;
  switch (operator) {
    case "+": 
     result = a + b; 
      break;
    case "-": 
     result = a - b; 
      break;
    case "*": 
     result = a * b; 
      break;
    case "/": 
     result = a / b; 
      break;
  
    // default:
    //   break;
  }
  return result;
}

// ------------------ теж саме тільки на if...else --------------------------
// function calc(a, b) {
//   let result;
//   if (operator == "+") {
//     result = a + b;
//   } else if (operator == "-") {
//     result = a - b;
//   } else if (operator == "*") {
//     result = a * b;
//   } else if (operator == "/") {
//     result = a / b;
//   }
//   return result;
// }


collectData();
validate();
const calcResult = calc(firstOperand, secondOperand, operator);
console.log(`Result is ${calcResult}`);
