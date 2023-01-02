"use strict";
/*
Необязательное задание продвинутой сложности:

Проверить, что введенное значение является целым числом. Если данное условие не соблюдается, повторять вывод окна на экран до тех пор, пока не будет введено целое число.
Считать два числа, m и n. Вывести в консоль все простые числа  в диапазоне от m до n (меньшее из введенных чисел будет m, бОльшее будет n). Если хотя бы одно из чисел не соблюдает условие валидации, указанное выше, вывести сообщение об ошибке, и спросить оба числа заново.
*/

var m = Number(prompt("Enter a first integer more then 1"));
var n = Number(prompt("Enter a second integer more then first"));

while (!Number.isInteger(m) || !Number.isInteger(n) || m <= 1 || m >= n) {
  alert("You enter incorrect one or both intigers! Try again!");
  m = Number(prompt("Enter a first integer more then 1"));
  n = Number(prompt("Enter a second integer more then first"));
}

G: for (var i = m; i <= n; i++) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      continue G;
    }
  }

  console.log("".concat(i, " - \u043F\u0440\u043E\u0441\u0442\u0435 \u0447\u0438\u0441\u043B\u043E"));
} // -------------------- Варіант більш прийнятний для мене, але тех.завдання передачає трохи інше ------------------------
// let m = Number(prompt("Enter a first integer more then 1"));
// while (!Number.isInteger(m) || m <= 1) {
//   alert("You enter not an integer more then 1! Try again!");
//   m = Number(prompt("Enter a first integer"));
// }
// let n = Number(prompt(`Your first integer is ${m}. Enter a second integer more then first one`));
// while (!Number.isInteger(n) || m >= n) {
//   alert("You enter not an integer more then first! Try again!");
//   n = Number(prompt(`Your first integer is ${m}. Enter a second integer more then first`));
// }