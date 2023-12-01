// 4. Написать функцию f(a,b), вычисляющую и возвращающую гипоте-нузу 
// прямоугольного треугольника по заданным катетам а и b. 
// Продемонстрировать ее работу для трех треугольников.

// Подключаем модуль для работы с консолью
const prompt = require('prompt-sync')({ sigint: true });
function f(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}
action = prompt('Введите длину двух катетов (через пробел): ');
console.log(f(Number(action.split(' ')[0]), Number(action.split(' ')[1])));
