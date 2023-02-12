"use strict";

const str = 'test';
const arr = [1, 2, 4];

console.log(str.length);

// когда используем свойство мы его никак не вызваем, не ставятся ()

// у строки одно свойство length

//методы пишутся с ()

// методы строк

console.log(str.toUpperCase()); // возводит строку в верхний регистр
console.log(str.toLowerCase()); // возводит строку в нижний регистр

// метод поиск под строки

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // 5, потому что часть текст начинается с 5 позиции, -1 если не найдено

// три метода, которые взаимодействуют со строкой

const logg = "Hello  world";

console.log(logg.slice(6, 11)); // world
console.log(logg.slice(-5, -1)); // world
console.log(logg.slice(6)); // world, с 6 позиции и до конца

console.log(logg.substring(6, 11)); // world

console.log(logg.substr(6, 5)); // world с 6 позции 5 символов


// методы чисел

// Существуем библеотека внутри JavaScript, можно увидеть в браузере, Math...

const num = 12.2;
console.log(Math.round(num)); // 12

const test = "12.2px";
console.log(parseInt(test)); // 12, числовой тип данных, переводит число в другую систему исчесления

console.log(parseFloat(test)); // 12.2, числовой тип данных, переводит число в десятичную систему исчесления

