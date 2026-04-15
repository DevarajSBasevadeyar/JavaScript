"use strict";   // treate all JS code as newer version

// alert(3 + 3)  we are using node nodejs, not browser
// tc39 and mdn -Documentation

let name="Devaraj"   //string
let age = 21         //Number
let isLoggedIn = false  //boolean

// Number  => 2 to power 53
// bigint
// String 
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// object
// console.log(typeof "java")  //string
// console.log(typeof(age))   //number
// console.log(typeof null)   //object
// console.log(typeof undefined)  //undefined
// console.log(typeof NaN)     //number


//Coversion operation

let score = "33"
console.log(typeof score)  //string
console.log(typeof score)  //string

let valueNumner = Number(score)
console.log(typeof valueNumner)  //Number
console.log(valueNumner)


let score1 = true             //"33aab"
console.log(typeof score1)  //string

let valueNumner1 = Number(score1)
console.log(typeof valueNumner1)  //Number
console.log(valueNumner1)

// "33" => 33
// "33aab" => NaN
// true => 1  false => 0