const imgCards = document.getElementsByClassName("img_card");

let imgItem = 0;

// funzione bottone sotto
const buttonNext = document.querySelector(".button_next");

buttonNext.addEventListener("click", function () {

    if (imgItem < imgCards.length - 1) {

        imgCards[imgItem].classList.remove("active");

        imgItem++;

        imgCards[imgItem].classList.add("active");

    }

});

// funzione bottone sopra

const buttonNext1 = document.querySelector(".button_next1");

buttonNext1.addEventListener("click", function () {

    if (imgItem < imgCards.length + 1) {

        imgCards[imgItem].classList.remove("active");

        imgItem--;

        imgCards[imgItem].classList.add("active");

    }

});