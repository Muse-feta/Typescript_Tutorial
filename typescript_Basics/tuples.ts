// const myTupple: (string | number | boolean)[] = [1, true, true]  // this is not tupple because i can set any type on any index of the array

const myTupple: [number, string] = [1, 'hello'] // in this example this is a pure tupple because the type and value and no of index pre defined this type declaration we call it tupples.

type user = (string | number)[]  // this example not tupple
const myArray: user = ["llll", 9, 9, 'hi']

type myUser = [string, number]  // this is tupple example
const myTuppleArray: myUser = ['kk',1]

export{}