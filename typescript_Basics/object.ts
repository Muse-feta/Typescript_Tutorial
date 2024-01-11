const obj = ({name: string, id: number}):{name: string, id: number} => {
    return {
        name: 'muse',
        id: 112233
    }
};

// *****************  type aliases
// ***************** we can define own types like this:
// type user = {
//     name: string,
//     id: number,
//     isPaid: boolean
// };

// const user = (user: user) => {}
// user({name:'muse', id: 22, isPaid: true})

// ************* readonly keyword

type user = {
    readonly _id: string,
    name: string,
    isActive: boolean
    creadiCard?: number  // ? is used to optional
};

const user: user = {
    _id : '1234',
    name: 'muse',
    isActive: true
};

// user.name = 'feta'
// user._id = 'uuu'   // i can't assign cuz it's read only

// *************************** & this used to combine 
type time = {
    hour: number,
    minute: number
}

type timeZone = {
    tz?: string
}

type timeWithTimeZone = time & timeZone 

const getTime = (time: timeWithTimeZone) => {}
getTime({hour: 1, minute: 2, tz: 'est'})

export{}