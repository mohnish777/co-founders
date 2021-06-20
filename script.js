const clc = document.querySelector(".cancel")
const clc1 = document.querySelector(".cancel1")
const arr = document.querySelector(".arr_container");
const left_container= document.querySelector(".left_container")
const dii= document.querySelector(".y")
const di=document.querySelector(".x")

arr.addEventListener("click",()=>{
    arr.classList.add("active_arr");
    if(left_container.classList.contains("off")){
        left_container.classList.remove("off");
        left_container.classList.add("active");
    }
});


clc.addEventListener("click",()=>{
    arr.classList.remove("active_arr");
    if(left_container.classList.contains("active")){
        left_container.classList.remove("active");
        left_container.classList.add("off");
    }
});

di.addEventListener("click",()=>{
    // arr.classList.add("active_arr");
    if(dii.classList.contains("off1")){
        dii.classList.remove("off1");
        dii.classList.add("active1");
    }
});


clc1.addEventListener("click",()=>{
    // arr.classList.remove("active_arr");
    if(dii.classList.contains("active1")){
        dii.classList.remove("active1");
        dii.classList.add("off1");
    }
});
