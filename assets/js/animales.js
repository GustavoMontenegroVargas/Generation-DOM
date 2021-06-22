let Animales = ['Gato','Perro'];
let Computadoras = ['HP','DELL'];
let Compas = ['Diego','Eduardo','Astrik', 'Gustavo'];

const list = document.querySelector('#list');

let button_animales = document.querySelector('#animales');
let button_computadoras = document.querySelector('#computadoras');
let button_companeros = document.querySelector('#companeros');

button_animales.addEventListener('click',function(){

    Animales.forEach(function(animal){
        let item = document.createElement('li');/* Crea elementos li para la lista */
        item.textContent = animal;/* Se asigna el valor. */
        list.appendChild(item);/* Con esta línea le agregamos un subelemento a uno más grande del HTML */
    
    })

});

button_computadoras.addEventListener('click',function(){

    Computadoras.forEach(function(computadora){
        let item = document.createElement('li');/* Crea elementos li para la lista */
        item.textContent = computadora;/* Se asigna el valor. */
        list.appendChild(item);/* Con esta línea le agregamos un subelemento a uno más grande del HTML */
    
    })

});

button_companeros.addEventListener('click',function(){

    Compas.forEach(function(companero){
        let item = document.createElement('li');/* Crea elementos li para la lista */
        item.textContent = companero;/* Se asigna el valor. */
        list.appendChild(item);/* Con esta línea le agregamos un subelemento a uno más grande del HTML */
    
    })

});
