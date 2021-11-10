// Nell'esercizio è richiesto di mostrare il menu a tendina quando si clicca sul menu hamburger e di chiudere il menu cliccando sulla x


/* Strumenti:

- querySelector ()
- addEventListener


 */


//Selezionare elementi della DOM

const hamburgerIconElement = document.querySelector('.header-right > a') 
const hamburgerMenuElement = document.querySelector('.hamburger-menu')
const closeElement = document.querySelector(' .close')



//Al click di hamburgerElement deve comparire il menu a tendina

hamburgerIconElement.addEventListener('click', function () {
    /* console.log('cliccato'); funziona */
    hamburgerMenuElement.style.display = 'block'

})


//Al click della X deve scomparire il menu a tendina

closeElement.addEventListener('click',function () {
    hamburgerMenuElement.style.display = 'none'

    
})




















/* Selezionare il div hamburger*/

/* const hamburgerMenuElement = document.querySelector(" .hamburger-menu");
const hamburgerIcon = document.querySelector(" .fas.fa-bars");
const closeIcon = document.querySelector(" .close");
console.log(hamburgerMenuElement, hamburgerIcon); */

/* cliccare all'interno del div hamburger */
/* hamburgerIcon.addEventListener('click', function (){
    console.log("clicca"); 
    hamburgerMenuElement.style.display = 'block'
}) */
    
//quando il menu è aperto cliccare sulla x per chiuderlo

/* closeIcon.addEventListener('click', function (){
    hamburgerMenuElement.style.display = 'none'
})
 */