//Mostrare / nascondere il menù principale

/*

-selezionare div hamburger

-selezionare l'icona hamburger



-quando clicco sull'icona far sparire l'hamburger e mostrare il contenuto del menu (menu hamburger display-none)

-quando clicco sulla X chiudere il menu per far riapparire il menu hamburger
*/







/* Selezionare il div hamburger*/

let hamburgerDiv = document.getElementsByClassName("hamburger-menu");
console.log(document.getElementsByClassName("hamburger-menu"));

/* -selezionare l'icona hamburger */

let hamburgerIcon = document.getElementsByClassName("fas fa-bars")
console.log(document.getElementsByClassName("fas fa-bars"));



/*quando clicco sull'icona dell'hamburger modificare la proprieta display del div hamburger */
document.getElementsByClassName(hamburgerIcon).addEventListener("click", function () {
    document.getElementsByClassName("hamburger-menu.active").style.display = "block"
});

