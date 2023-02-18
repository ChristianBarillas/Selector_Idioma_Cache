"use strict";
const modal = document.querySelector(".modal_over");

const definiridioma = () => {
    document.querySelector(".en").addEventListener("click", () => {
        localStorage.setItem("idioma", "en");

        cerrarmodal()

    })

    document.querySelector(".es").addEventListener("click", () => {
        localStorage.setItem("idioma", "es");

        cerrarmodal()

    })

}

const cerrarmodal = () => {


    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(() => modal.style.display = "none", 1000);


}
const idioma = localStorage.getItem("idioma");

if (idioma === null) definiridioma();
else {
    modal.style.display = "none";
}


