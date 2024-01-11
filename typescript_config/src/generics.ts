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
const identityThree = <Type>(val: Type): Type => {
    return val
}

identityThree(true)


// **************** generics in array

const arrayGenerics = <T>(val: T[]):number => {
    return 3
}

// ****** another example ********** //

const arrayGenerics2 = <T>(val: T[]): T[] => {
    return(val.reverse())
}

const reverseArray: (number | string)[] = ["hello", "selam", "ola"];
const rev = arrayGenerics2(reverseArray) 
console.log(rev)

// ************** generics in object *************** //
interface Database {
    username: string,
    password: string,
    host: string
}

const anotherFunction = <T, U extends  Database>(val1:T, val2:U):object => {
    return {
        val1,val2
    }
}

anotherFunction(8,{username: 'muse', password: 'muse', host:'locahost'})


interface quiz {
    name: string,
    author: string,
    type: string
}

interface course {
    name: string,
    ch: number,
    type: string
}

class Sellable<T> {
    public  cart:T[] = []

    addToCart(product:T){
        this.cart.push(product)
    }
}

const quizProduct: quiz = { name: "string", author: "string", type:" string "};
const selableQuiz = new Sellable<quiz>()
console.log(selableQuiz.addToCart(quizProduct));



// ************* type narrowing **************** //

interface Size {
    size: number
}

interface Circle {
    radius: number
}

// const area = (val: Size | Circle) => {
//     if ('Size' in val) {
//       return val.Size * val.Size
//     }
// };