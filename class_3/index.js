// let arr = [1,2,3,4]

// function avg(a1,a2,a3){
//     let a = (a1 + a2 + a3)/3
//     return a 
// }

// let result = avg(...arr)
// console.log(result)


// let arr3 = [...arr2,...arr2]

// Spread Operators
// let obj = {
//     name:'ali',
//     inst: 'saims',
//     favLang:'JavaScript'
// }

// let obj2 = {...obj,favLang:'Python'}
// console.log(obj2)
// console.log(obj)


// Object Destructring and Array Destructuring

// const obj = {
//     name:'ali',
//     inst: 'saims',
//     favLang:'JavaScript'
// }

// obj.name

// let name = obj.name
// let inst = obj.inst
// let favLang = obj.favLang
// let {name,inst,favLang} = obj
// console.log(name)

// // Array Destructuring

// let arr = [1,2,3,4]
// // let arr2 = [2,3,4,5]
// let [usa,arg,ys,a4] = arr

// console.log(...)

// let obj = {
//     name:'Ali',
//     age:18
// }

// let {name,age} = obj
// name = 'Basit'
// console.log(name,age)
// console.log(obj)


// const a = 'abc'
// b = 'xyz'
// a = b

// console.log(a)


// let a = 'another text'

// if(true){
//     let a = 'some text'
//     console.log(a)
// }


// let a =  ['a','b','c',[1,2,3]] 

// let [,,,[subInd1,subInd2]] = a

// console.log(subInd1)


// let arr = [1,2,3]
// let [a1,a2,a3] = arr

// let obj = {
//     a1,
//     a2,
//     a3
// }

// console.log(obj)

// Array Methods
// map

// function a(...rest){
//     let arr = rest 
//     arr.map(function(item,index){
//         console.log(item.name + index)
//     })
// }

// a({name:'Ali'},{name:'Usama'},{name:'Waqas'},{name:'Basit'})
let ul = document.getElementById('ul')
let arr = ['ali','basit','usama','Zaid','Haris']


let std = [
    {
        name:'Ali',
        class:'1'
    },
    {
        name:'Usama',
        class:'1'
    },
    {
        name:'Ali',
        class:'6'
    },
    {
        name:'Waqas',
        class:'4'
    },
    {
        name:'Ali',
        class:'1'
    },
    {
        name:'Usama',
        class:'2'
    },
    {
        name:'Waqas',
        class:'1'
    },
    {
        name:'Usama',
        class:'1'
    },
    {
        name:'Ali',
        class:'4'
    },
]


// arr.map(function(item){
//     console.log(item)
//     ul.innerHTML += `<li>${item}</li>` 
// })

// arr.forEach(function(x){
//     console.log(x)
// })

// let newArr = arr.filter(function(y){
//     return y == 'usama'
// })

// console.log(newArr)
// let arr = [1,2,3,1,2,]
// let x = prompt()
// console.log(arr[+x])



// function searc(searchValue,searchby){   
//     let arr = std.filter(function(x){
//         return x[searchby] == searchValue
//     })
//     console.log(arr)
// }

// searc('1','class')























































