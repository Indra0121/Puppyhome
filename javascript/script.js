const main = document.querySelector("main")
const menu = document.querySelector("#menu")
 let rotated = false;
menu.addEventListener('click', (o)=>{
    o.preventDefault();
    console.log("click");
    if (rotated){
        console.log("it rotates");
        rotated=false
    }else{
        console.log("it redress");
        rotated=true

    }
    
    // main.style.transformOrigin = 'top left';
    // main.style.transform = 'rotate(45deg)';
    })