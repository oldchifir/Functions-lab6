// Задание 2.
// Для любого задания лабораторных работ № 5 и №6 реализовать ввод,
// формирование / обработку и вывод массивов с применением функций.

// Подключаем модуль для работы с консолью
const prompt = require('prompt-sync')({ sigint: true });
function inPut() {
    let arr = Array()
    let mn = prompt('Введите m-строки n-столбцы через пробел: ');
    for (let i = 0; i < Number(mn.split(' ')[1]); i++) {
        n = prompt('Введите ' + (i + 1) + ' элемент строки: ');
        arr.push(n);
    }
    return [arr, Number(mn.split(' ')[0]), Number(mn.split(' ')[1])];
}
function task() {
    let mat = Array();
    let information = inPut();
    for (let i = 0; i < information[1]; i++) {
        mat.push([]);
        for (let j = 0; j < information[2]; j++) {
            mat[i][j] = information[0][j];
        }
    }
    return mat;
}
function outPut(mat) {
    console.log('Матрица: ');
    let arr = Array();
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            arr.push(mat[i][j]);
        }
        console.log(arr);
        arr = []
    }
}
outPut(task());
