
// const immutable new school
// let mutable new school 
// var mutable old school 

const USER_ID = 1
let name

USER_ID

// console.log(user_id)

// String 
// Numbers
// BigInt
// booleans
// Arrays
// Objects

// "hello" 'hello'
// 29
// -9007199254740991 
// true false
// ['hello', true, {}]
// { name: 'Tony', age: 20 }

// function sayHello(){
//     console.log("Hello")
// }


const sayHello = (name) => {
    console.log(`Hello, ${name}`)
}

// sayHello('Tony')

let list = ['Hello', true, 30]

// console.log(list[1])

for(let i = 0; i < list.length; i++){
    // console.log(list[i])
    if(list[i] == 30){
        console.log("Found 30!")
    }
    else if(list[i] == "Hello"){
        console.log("Hello stranger!")
    }
    else{
        console.log(`Found this: ${list[i]}`)
    }
}