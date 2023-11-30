const USER_ID = 8
let name = 'Fred'

let isAvailable = true

let isBroken

// function sayHello(name){
    //     console.log(`Hello, ${name}`)
    // }
    
    
    const sayHello = (name) => {
        console.log(`Hello, ${name}`)
    }
    
    // sayHello('Fred')
    
// var age = 1199

// console.log( true != 1 )

// let list = []

// if(list){
//     console.log('true')
// } else {
//     console.log('false')
// }

// let age = 0

// if(age == 0){
//     console.log('true')
// } else {
//     console.log('false')
// }

// let isActive = true

// if(isActive){
//     console.log('true')
// } else {
//     console.log('false')
// }


// let val = ''

// if(val){
//     console.log('true')
// } else {
//     console.log('false')
// }

// console.log( true + 5 )
// console.log( true - 5 )
// console.log( true + '5' )
// console.log( 5 + '5' )
// console.log( 5 - '5' )
// console.log( 5 * '5' )
// console.log( 5 * Number('5') )

var list = ['Hello', true, 30]

// let str = list[0]
// let bool = list[1]
// let age = list[2]

// const [str, bool, age] = list

// console.log(str)
// console.log(bool)
// console.log(age)

const newList = [...list, 70]

console.log(newList)