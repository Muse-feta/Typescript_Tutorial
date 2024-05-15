
let age: number = 20

if(age < 50)
    age += 10
console.log(age)

//aray
let number = []
number[0] = 'hello'
number[1] = 4   // this are any type
// console.log(number)

let array: number[] = [7, 4]  // this standard way of declare a array

// tuples
const myArray:[number, string] = [1, "hello"]

// enums
const enum Size {Small = "s", Medium = "m", Large = "l"}

let mySize: Size = Size.Small
console.log(mySize)

// functions
const calcTax = (income: number, tax_year?: number) => {
    if((tax_year || 2024) < 5000)
        return income * 1.3
    return income * 1.2
};

//objects

let user: {readonly id: number, name: string, retire: (date: Date) => void} = {id: 1, name:'Muse', retire:(date: Date) => {
    console.log(date)
}}


// type alias

type Employee = {
  readonly id: number;
  name: string;
  retire?: (date: Date) => void;
};

const employee: Employee = {id: 0, name:"feta"}


// union types
const kgtolbs = (kg: number | string)=> {
    if(typeof kg === "number")
        return kg * 7
    else return kg
};


// intersaction types
type Car = {
    color: string,
    brand: string,
    milleage: number
};

type Convertaible = {
    isConvertaible?: true,
    roofColor?: string
};

type convertaibleCar = Car & Convertaible

const myCar: convertaibleCar = {
    color: "yellow",
    brand: "tesla",
    milleage: 5000
}

// literal type

const myNumber: 50 = 50


type theNumbers = 50 | 200 | 400

const num: theNumbers = 200

type metrics = "cm" | "inch"

const width:metrics = "cm"