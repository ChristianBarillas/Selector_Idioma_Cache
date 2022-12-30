"use strict"


const definiridioma = ()=>{
document.querySelector(".en").addEventListener("click", ()=> {
localStorage.setItem("idioma", "en");

})

document.querySelector(".es").addEventListener("click", ()=>{
localStorage.setItem("idioma", "es");
})

}