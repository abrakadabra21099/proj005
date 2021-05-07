"use strict";

// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// console.log(typeof(5 + ''));

// const num = 6;

// console.log('https://vk..com/catalog/' + num);

// const fontSize = 26 + 'px';

// // toNumber
// console.log(typeof(Number('4')));
// console.log(typeof(+'4'));
// console.log(typeof( parseInt(fontSize, 10) ));

// console.log( parseInt(fontSize, 10) );

// let answer = +prompt('Hello', '');
// console.log(typeof( parseInt(answer) ));

// // toBoolean
// // 0, '', null, undefined, NaN;
// // 1)
// let sw = null;
// sw  = 1;
// if (sw) {
//     console.log('Working...')
// }

// // 2)
// console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'4'));

const summa = {
    a: 10,
    b: 15,
    get summa() {
        return this.a + this.b;
    },
    get prA() {
        return this.a;
    },
    set prA(newA) {
        this.a = newA;
    },

};

console.log(summa.summa);
summa.prA = 20;
console.log(summa.summa);