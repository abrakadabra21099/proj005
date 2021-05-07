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

// function Abc(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;

//     let private = `${a} + ${b} + ${c}`;

//     this.concat = function() {
//         console.log(`=- ${this.a} + ${this.b} + ${this.c} -=`);
//     };
// }

class Abc {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this._priv = `${a} + ${b} + ${c}`;
    }

    #secret = 888;

    concat() {
        console.log(`=- ${this.a} + ${this.b} + ${this.c} -=`);
        console.log(this._priv);
    }
    get propA() {
        return `=-${this.a}-= ${this.#secret}`;
    }
    set propA(newA) {
        if (typeof newA === 'number') {
            this.a += newA;
        } else {
            console.log(`${newA} - bad type.`)
        }
    }
    get pubSecret() {
        return this.#secret
    }
    set pubSecret(newSecret) {
        this.#secret = newSecret;
    }
}

const obj = new Abc('aa', 'bbb', 7777);
obj.pubSecret = 'super secret';
console.log(obj.pubSecret);
