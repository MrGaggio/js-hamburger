//Mostrare / nascondere il menù principale

/*

-selezionare div hamburger

-selezionare l'icona hamburger

-aggiungere una classe all'hamburger icona

-quando clicco sull'icona far sparire l'hamburger e mostrare il contenuto del menu (menu hamburger display-none)

-quando clicco sulla X chiudere il menu per far riapparire il menu hamburger
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
    document.getElementsByClassName("hamburger-menu.active").innerHTML = "";
});

