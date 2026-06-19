// let btn1 = document.querySelector(".btn1"); //to access class we use dot(.) followed by class name
  // and to access by is we use hash(#) followed by id name

// btn1.onclick = () => {
//     console.log("Button is clicked")
//     let a = 25;
//     a++;
//     console.log(a);
// }


// let div1 = document.querySelector("#div1");

// div1.onmouseover = () => {
//     console.log("move the cursor on me to see events in console");
// }


//Event Object
// let btn1 = document.querySelector(".btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }


// let div1 = document.querySelector("#div1");

// div1.onmouseover = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }


//Event Listener

// let btn1 = document.querySelector(".btn1");

// btn1.addEventListener("click",()=>{
//     console.log("First event listener")
//     //using eventlistener we can do multiple events with a one click
// })

// btn1.addEventListener("click",()=>{
//     console.log("second event listener")
// })

//accessing event object
// btn1.addEventListener("click",(evt)=>{
//     console.log("third event listener")
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// })

//remove eventListener

// let btn1 = document.querySelector(".btn1");

// const handle3 = ()=>{
//     console.log("Event handler -3")
// }

// btn1.addEventListener("click",()=>{
//     console.log("Event handler -1")
// })

// btn1.addEventListener("click",()=>{
//     console.log("Event handler -2")
// })

// btn1.addEventListener("click",handle3)

// btn1.addEventListener("click",()=>{
//     console.log("Event handler -4")
// })

// btn1.removeEventListener("click",handle3)


//Practice Q

// let modeBtn = document.querySelector("#mode"); 

// let currMode = "light";

// modeBtn.addEventListener("click",()=>{
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// })

let modeBtn = document.querySelector("#mode"); 

let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light")
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark")
    }
    console.log(currMode);
})