//==========var===============
//block scope (n) 
//redeclareable (y)
//reassignable (y)
//hoist (y)

//==========let===============
//block scope (y) 
//redeclareable (n)
//reassignable (y)
//hoist (n)

//=========const===============
//block scope (y) 
//redeclareable (n)
//reassignable (n)
//hoist (n)


// Template Literals

let b = document.getElementById('main')
// let a = 30
// let text = 'Main Heading Text'
// console.log('the square of '+a+ ' is '+ ' '+ a*a)
// b.innerHTML = `<h1 style='color:blue'> ${text}  sagd jfgsjfg</h1>`


// Ternary Operator
// if (false) {
//     console.log('True Condition')
// }

// true ? console.log('true condition') : null



let age = 22
// let ageStatus
// ageStatus = age > 18 ? true : false
// let address = 'okas'

// b.innerHTML = `you can visit at our office location:${address == 'karachi'?'Karachi Office':address == 'islamabad'?'Islamabad Office':'Faisalabad Office'}`


// Spread operators

let arr1 = ['a','b','c','d','e']
let arr2 = ['f','g','h','i','j']

let arr3 = [...arr1,...arr2]
arr3[1] = 5

// console.log(arr3)



let obj = {
    name:'Ali',
    age :'18'
}
obj['inst'] = 'SAIMS'

// let obj2 = {
//     ...obj,
//     institute:'SAIMS'
// }
console.log(obj)


// lexical scoping









