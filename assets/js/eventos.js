let nameInput = document.querySelector('#nameInput');
console.log(nameInput);

nameInput.addEventListener('keydown',function(event){
    /* console.log(nameImput.value) */
    console.log(event.target.value);/* Se ocupa para recuperar 'event'. Esto cuando està dentro de la función*/
} );

/* Otra sintáxis sería */

/* nameInput.addEventListener('keydown',function(){
    console.log(nameImput.value)
    
} ); */

/* En este caso, no hay event como parámetro */

let button = document.querySelector('#button');
button.addEventListener('click', event => {
    let nameHeader = document.querySelector('#nameH');
    nameHeader.textContent = nameInput.value;
})
