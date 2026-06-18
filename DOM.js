// document.body.childNodes[3].innerText = "Abcd";

// console.log(window);
// console.dir(window);

// document.body.style.background = "green";

// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);

// let head = document.getElementsByClassName("heading-class");
// console.log(head);
// console.dir(head);

// let element = document.getElementsByTagName("p");
// console.log(element);

// // let firstEl = document.querySelector("p");
// // console.log(firstEl);

// let allEl = document.querySelectorAll("p");
// console.log(allEl);

// let heading = document.querySelector("h1");
// console.log(heading);

// let divs = document.querySelectorAll(".box");

// divs[0].innerText = "welcome to learn JavaScript";

// let idx = 1;
// for(let div of divs){
//     div.innerText = `welcome to learn JavaScript ${idx}`;
//     idx++;
// }


//   --------  styling through JavaSvript
// let div = document.querySelector("div");
// // console.log(head.getAttribute("class"));

// div.style.backgroundColor="yellow";
// div.style.fontSize = "25px"
// div.innerText = "Hello!";

// div.style.visibility = "hidden"

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// let div = document.querySelector("div");
// let para = document.querySelector("p");
// // div.append(newBtn);
// div.prepend(newBtn)
// div.before(newBtn)
// para.after(newBtn)

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new</i>";

document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();
// newHeading.remove();

let btn = document.createElement("button");
btn.innerHTML= "<i>click me</i>";
console.log(btn);
btn.style.backgroundColor = "red";
btn.style.color = "white"

let body = document.querySelector("body").prepend(btn);

//Q2
let para = document.querySelector("p");
// para.setAttribute("class","newClass")

para.classList.add("newClass")
para.classList.remove("newClass")