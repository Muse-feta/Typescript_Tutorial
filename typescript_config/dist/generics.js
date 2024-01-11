"use strict";
// const identityOne = (val: string | number):string | number => {
//     return val
// }
// identityOne(8)
// ******************* second example ******************* //
// const identityTwo = (val: any):any => {
//     return val
// }
// identityTwo(true)
//  ************************* generics example code ********************* //
const identityThree = (val) => {
    return val;
};
identityThree(true);
// **************** generics in array
const arrayGenerics = (val) => {
    return 3;
};
// ****** another example ********** //
const arrayGenerics2 = (val) => {
    return (val.reverse());
};
const reverseArray = ["hello", "selam", "ola"];
const rev = arrayGenerics2(reverseArray);
console.log(rev);
const anotherFunction = (val1, val2) => {
    return {
        val1, val2
    };
};
anotherFunction(8, { username: 'muse', password: 'muse', host: 'locahost' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const quizProduct = { name: "string", author: "string", type: " string " };
const selableQuiz = new Sellable();
console.log(selableQuiz.addToCart(quizProduct));
const area = (val) => {
    if ('Size' in val) {
        return val.Size * val.Size;
    }
};
