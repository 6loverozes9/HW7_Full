// 1. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n. Для решения задачи необходим использовать рекурсию.

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// Пример работы функции:

// console.log(sumTo(4)); // 10
// console.log(sumTo(3)); // 6

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
  console.log( sumTo(4) );
  console.log( sumTo(3) );
