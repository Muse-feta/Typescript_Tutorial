"use strict";
console.log('ts starts here!!');
console.log('ts starts here still !! cool');
// another object syntax
// class User {
//   constructor(public email: string, public name: string) {}
// }
// class User  {
//     // private another js syintax #email
//     private readonly email: string
//     name: string 
//     constructor (email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
// const muse = new User('muse@m.com','Muse')
// console.log(muse)
// ********************** setters and getters *************************** //
class User {
    constructor(email, password) {
        this.courseFee = true;
        this.email = email,
            this.password = password;
    }
    get getEmail() {
        return this.email;
    }
    set updateEmail(value) {
        this.email = value;
    }
}
class MoreUser extends User {
    getFee() {
        return this.courseFee;
    }
}
const muse = new User('mu', 1234);
console.log(muse.getEmail); // getter method
muse.updateEmail = 'kk'; // setter Method
console.log(muse);
