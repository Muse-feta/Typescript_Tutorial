// *********************** function declaration

// function addNumber(num: number){
//     return num + 3
// };

// addNumber(8)

// ********************** we can specify the output of the function 

const addNumber = (num: number): number => {
    return num + 1
    // return 'hello world'  // i dont use string cuz this function returns only numbers
}

// ************** we can pass default value for the argument 

const login = (name: string, email: string, isPaid: boolean = false) => {}
login("Muse","m@gmail.com",true)

