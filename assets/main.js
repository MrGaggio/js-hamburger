//Mostrare / nascondere il menù principale

/*

-selezionare div hamburger




-quando clicco sull'icona far sparire l'hamburger e mostrare il contenuto del menu (menu hamburger display-none)

-quando clicco sulla X chiudere il menu per far riapparire il menu hamburger
*/







/* Selezionare il div hamburger*/

const hamburgerMenuElement = document.querySelector(" .hamburger-menu");
const hamburgerIcon = document.querySelector(" .fas fa-bars");
const closeIcon = document.querySelector(" .close");
console.log(hamburgerMenuElement, hamburgerIcon);

/* cliccare all'interno del div hamburger */
hamburgerIcon.addEventListener('click', function (){
    console.log("clicca"); //errore che non riesco a risolvere ho anche provato a copiare pari pari la stringa di codice da w3shool
    hamburgerMenuElement.style.display = 'block'
})
    
//quando il menu è aperto cliccare sulla x per chiuderlo

closeIcon.addEventListener('click', function (){
    hamburgerMenuElement.style.display = 'none'
})
