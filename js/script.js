"use strict";

const arr = [1, 2, 3, 6, 8];

// console.log(arr.pop());
// console.log(arr);
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let v of arr) {
//     console.log(v);
// }

// arr[99] = 0;
// console.log(arr.length)
// console.log(arr);

arr.forEach(function(val, index, arr) {
    console.log(`${index}: ${val} внутри массива ${arr}`);
});

const str = prompt('','');
const products = str.split(',');
products.sort(compareNum);
console.log(products.join(' | '));

function compareNum(a, b) {
    return a - b;
}
