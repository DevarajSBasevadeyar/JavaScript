//function is a block of code that performs a specific task, can be invoked whenever needed

function myFunction(){
    console.log("welcome to javaScript");
}
myFunction();

// for(let i=0;i<5;i++){
//     myFunction();
// }


// 2.Function with parameter
function fun(msg,n){
    // parameter -> Input
    console.log(msg*n)
}
//NaN - Not a number
fun("i love js",100)  //argument


function sum(a,b){
    //local variable ->scope
    console.log("Sum is: "+(a+b))
}
sum(5,2)


//return
function sum1(x,y){
    console.log("Before return")
    // function parameter - like local variables of fun() - Block scope
    console.log(x,y)  //local variables cannot print outside fun()
    return x+y;
    console.log("After return")
}
let s = sum1(5,4)
console.log(s)
//console.log(x)

//Arrow function

//sum fun()
function sum2(a,b){
    return a+b;
}

//Modern Js
const arrowSum = (a,b) => {
    console.log(a+b)
}

//mul
const arrowMul = (x,y)=>{
    console.log(x*y);
}
arrowMul(5,2)

let a = (x,y)=>{
    console.log(x*y);
}
a(5,4)

const printHello = () =>{
    console.log("hello world")
}
printHello()

//print the number of vowels in a given string

// function countVowels(name){
//     let count = 0;
//     for(let i=0;i<name.length;i++){
//         name.toLowerCase();
//         if(name[i] == 'a' || name[i]=='e' || name[i]=='i'|| name[i] == 'o' || name[i] == 'u'){
//             count = count+1;
//         }
//     }
//     console.log(count)

// }
// countVowels("JavaScript")

//---------OR

function countVowels(name){
    let count = 0;
    name = name.toLowerCase();
    for(const char of name){
        
        if(char=='a' || char==='e' || char === 'i' || char=== 'o' || char==='u'){
            count++;
        }
    }
    console.log(count)

}
countVowels("Bengaluru")

//Using arrow function
const vowel = (name)=>{
    let count=0;
    name = name.toLowerCase();
    for(const char of name){
         if(char=='a' || char==='e' || char === 'i' || char=== 'o' || char==='u'){
            count++;
        }
    }
    console.log("count using arraow fun "+count)
}
vowel("Acaders")


// function fun(name){
//     for(const char of name){
//         console.log(char)
//     }
// }
// fun("apnacollege");

// for-each method
// arr.forEach(callBackFunction)

//Higher order methods(fun) are methods which takes another method as a paremeter or it returns the another method as their input

let arr = [2,4,6,8,10]
arr.forEach(function myFun1(val){
    console.log(val);
}) 

//using for-each loop
arr.forEach((val)=>{
    console.log(val)
})

let city = ["pune", "delhi", "mumbai"]
city.forEach((val)=>{
    console.log(val.toUpperCase())
})

// three parameters of callback function

let city1 = ["pune", "delhi", "mumbai"]
city.forEach((val,index)=>{
    console.log(val.toUpperCase(),index,city1)
})

 // Question - for given array print square of each value using forEach metthod

 let arr1 = [1,2,3,4,5];
 arr1.forEach((val)=>{
    console.log(val*val);  //or val**2
 })


 //Other way of callback

let calcSquare = (val)=>{
    console.log(val*val);  //or val**2
 }

 arr1.forEach(calcSquare)