const lista = document.querySelectorAll("li");
let index = 0;

function show(increase) {
    index = index + increase;
    index = Math.min(Math.max(index, 0),lista.length -1);
    lista[index].scrollIntoView({ behavior: "smooth" });

}