'use strict';
let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt('Введите число');
    numbers.push(Number(userInput));   
} while (userInput);

for (const i of numbers){
    total += i;
}
alert(`Общая сумма чисел равна ${total}`);

