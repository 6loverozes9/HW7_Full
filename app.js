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


// 2. Написать функцию findShort , которая будет находит самое короткое слово в предложении. В случае если длина двух слов совпадает - вернуть первое найденое короткое слово. Пример работы функции:

// const sentance = "Lorem ipsum dolor sit amet";

// console.log(findShort(sentance)); // sit
// console.log(findShort("Hello world"); // Hello
// console.log(findShort("Hi"); // Hi
// console.log(findShort("She is David's sister"); // is


const sentance = "Lorem ipsum dolor sit amet";

function findShort(string) {
    const words = string.split(" ");
    return words.sort((a, b) => a.length - b.length)[0];
  }

console.log(findShort(sentance)); // sit
console.log(findShort("Hello world")); 
console.log(findShort("Hi"));
console.log(findShort("She is David's sister")); 