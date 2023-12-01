// 4. Написать функцию f(a,b), вычисляющую и возвращающую гипоте-нузу 
// прямоугольного треугольника по заданным катетам а и b. 
// Продемонстрировать ее работу для трех треугольников.

// Подключаем модуль для работы с консолью
// Модуль node:readline предоставляет интерфейс для чтения данных из потока Readable (например, process.stdin) по одной строке за раз.
const readline = require('readline'); // Require - это библиотека JavaScript и загрузчик файлов, который управляет зависимостями между файлами JavaScript и модульным программированием.
// Создание интерфейса
const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); //
function f(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}
rl.question('Введите длину двух катетов (через пробел): ', (action) => {
    console.log(f(Number(action.split(' ')[0]), Number(action.split(' ')[1])));
    rl.close();
});