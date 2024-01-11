// on interfaces we can use reopen it and inject any value and wecan use extends key word



interface user {
    role?: 'admin' | 'teacher' | 'student'
} // this is the best example to reopenit and inject the value on it.

interface user {
    name: string,
    id: number
    // getCouupon: () => string
    getCouupon(): string,
    getName(name: string, id: number): number
};

interface user2 extends user {
    certified: boolean
}

type usser = {
  name: string;
  id: number,
  getCouupon(): string;
};

const muse: user = {
    name: 'muse',
    id: 123,
    getCouupon : () => { return 'hello'},
    getName: (namme: 'cr7', id: 88) => { return 10}
}

const student: user2 = {
    name: 'muse',
    id: 123,
    getCouupon: () => { return 'hello'},
    getName: (namme: 'cr7', id: 88) => { return 10},
    certified: true,
    role: 'student'
}

const feta: usser = {
    name:'muse',
    id: 123,
    getCouupon: () => { return 'hello'}
}