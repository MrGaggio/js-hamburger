//Mostrare / nascondere il menù principale

/*

-selezionare l'icona hamburger

-selezionare div hamburger


-aggiungere una classe all'hamburger icona

-quando clicco sull'icona far sparire l'hamburger

-quando clicco sul div haburger far apparire l'hambur
*/







/* Selezionare il div hamburger*/

let hamburgerDiv = document.getElementsByClassName("hamburger-menu");
console.log(document.getElementsByClassName("hamburger-menu"));

/* -selezionare l'icona hamburger */

let hamburgerIcon = document.getElementsByClassName("fas fa-bars")
console.log(document.getElementsByClassName("fas fa-bars"));

/* -aggiungere una classe all'hamburger icona */

hamburgerDiv.className = "hamburgerNew";
hamburgerDiv.className = hamburgerDiv.classList + ' hamburgerNew';
console.log(hamburgerNew);

/*quando clicco sul div haburger far apparire l'hamburger */
document.getElementsByClassName("hamburgerDiv").addEventListener("click", function () {
    document.getElementsByClassName("").innerHTML = "";
});

