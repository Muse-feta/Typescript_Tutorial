let score: number | string = 66

score = 99
score = 'one'

type user = {
    name: string
    id: number
}

type admin = {
    username: string,
    id: number
}

const muse: user | admin = {
    username: 'Muse',
    id: 222
}


const getId = (num: string | number) => {
    if(typeof num === 'string'){
        num.toLocaleLowerCase()
    }
}

// array senarios

const students: (string | number)[] = ['4', 2]

// another senarios
let pi:3.14 = 3.14
// pi = 3.65 // i can't assign 

let operatorSystem: 'linuix' | 'mac' | 'windows' = 'mac'
// operatorSystem = 'kk' // i can't assign


export{}