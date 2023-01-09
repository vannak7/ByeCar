const lista = document.querySelectorAll("li");
let index = 0;

function show(increase) {
    index = index + increase;
    index = Math.min(Math.max(index, 0),lista.length -1);
    lista[index].scrollIntoView({behavior: "smooth"});
}



const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fades = document.querySelector("#fades");

const toggleModal = () => {
    // [modal, fades].forEach((el) => el.classList.toggle("hide"));
    modal.classList.toggle("hide");
    fades.classList.toggle("hide");
};

[openModalButton, closeModalButton, fades].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

