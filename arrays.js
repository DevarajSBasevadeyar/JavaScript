//creation of Array
//In JavaScript array is represented using [] and can store both homogeneous and heterogeneous data elements

let nums = [10,20,30,40,50]
console.log(nums)

let arr = [10, 45.245, "JavaScript", true,60]
console.log(arr)

//Arrays are mutable
nums[2] = 35
console.log(nums)

//Arrays methods

//Adding an element to the array
let num1=[10, 20]
// 1.push() -adds an element to the rare(last) end of an array
num1.push(100)
console.log(num1)

//2.unshift - adds an element to the frontend of an array
num1.unshift(777)
console.log(num1) 

//3.splice(start_idx,delete_count,elements to be inserted)  -it is used for deleting also 
num1.splice(3,0,30,"Acaders") // [777,10,20,30,"Acaders",100]
console.log(num1)

num1.splice(4,1,70,80,90)
console.log(num1)

//Deleting element from an array
let ar = [10,20,50,40,"hello"]
ar.pop() //it will delete last element from an array
console.log(ar)

ar.shift()
console.log(ar)  //Detete the first element from the array

ar.slice()
console.log(ar)


console.log(ar.slice(2,3)) //40
console.log(ar.splice(-2))

//sort()

let n=[45,94,23,10,5,89]
let a = n.sort()
console.log(a)        //not work for number array

let str = ["maruti","suzuki","jaguar","bmw"]
console.log(str.sort())

let start = ["january","july","august","march"]
start.splice(0,2,"july","june")
console.log(start)

console.log(start.indexOf("august"))

//return the index of JavaScript from the given array,if it was reversed
let lang = ["c","c++","HTML","javascript","pyhton","java","c#","sql"]
console.log(lang.reverse().indexOf("javascript")) 

//Array Referances
//It checks the references in memory for equality check

console.log([1]==[1])
console.log([1]===[1])
console.log([]==[])
console.log("str"==="str")

let arr1 = ['a','b']
console.log(arr)

let arrCopy = arr1;
console.log(arrCopy)

arrCopy.push('c');

console.log(arrCopy)
console.log(arr1)




