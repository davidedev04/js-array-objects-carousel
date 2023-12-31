



// serie di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },

    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },

    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },

    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },

    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

function carouselImg() {

    const imgCards = document.getElementById("img_card");

    images.forEach(element => {

        const card = document.createElement('div');
        card.classList.add('img_container');

        const img = document.createElement('img');
        img.src = element.image;
        img.classList.add('position-absolute');

        const title = document.createElement('h3');
        title.textContent = element.title;
        title.classList.add('position-relative');

        const text = document.createElement('p');
        text.textContent = element.text;
        text.classList.add('position-relative');

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(text);

        imgCards.appendChild(card);

        /* return console.log(element.image, element.title, element.text); */

    });

    const buttonNext = document.querySelector(".button_next");

    buttonNext.addEventListener("click", function () {

        if (imgItem < images.length - 1) {

            imgCards[imgItem].classList.remove("active");

            imgItem++;

            imgCards[imgItem].classList.add("active");

        }

    });

}

carouselImg();

let imgItem = 0;

// funzione bottone sotto
const buttonNext = document.querySelector(".button_next");

buttonNext.addEventListener("click", function () {

    if (imgItem < images.length - 1) {

        imgCards[imgItem].classList.remove("active");

        imgItem++;

        imgCards[imgItem].classList.add("active");

    }

});

// funzione bottone sopra

const buttonNext1 = document.querySelector(".button_next1");

buttonNext1.addEventListener("click", function () {

    if (imgItem < images.length + 1) {

        imgCards[imgItem].classList.remove("active");

        imgItem--;

        imgCards[imgItem].classList.add("active");

    }

});