/*  DOCUMENT OBJECT MANIPULATION 

En este caso notamos a 'document' como un objeto, que refiere al HTML. Lo que hacemos es llamar sus propiedades con
'document.propiedad' para usarlos o modificarlos desde JS. Cada parte del HTML es una propiedad. */

/* 1) Manipulando los elementos por clase con la propiedad especìfica de clase*/

var parrafos =  document.getElementsByClassName("parrafos");

 /*En este caso, la clase se escribe "parrafos", sin el punto, ya que
 estás denominando que es una clase con 'getElementsByClassName'.
 También notamos que las propiedades de los objetos se pueden asignar como
 variables.*/

console.log(parrafos);

/*  Imprimirá en consola todos los elementos que tengan la clase 'parrafos' en forma de arreglo.*/

/* --------------------------------------------------------------- */

/* 2) Manipulando cada elemento del arreglo con la clase "parrafos" y cambiando su contenido. */

document.getElementsByClassName('parrafos')[0].textContent = 'Nuevo texto de parrafo por clase, arreglo con textContent y getElementsByClassName';

/* En este caso, "parrafos es la clase, entonces todo aquello denominado con ella, estarà indexado conforme su orden
de aparición" . En este caso ".textContent" funciona para cambiar el texto (Contenido), en caso de que no funcione así, se usaría
"innerHTML"*/

document.getElementsByClassName('parrafos')[1].innerHTML = 'Nuevo texto de parrafo por clase, arreglo con innerHTML y getElementsByClassName';

/* --------------------------------------------------------------- */
/* 3) Manipulando cada elemento por indentificador con la propiedad especìfica y la general, cambiando su contenido.*/

document.querySelector('#parrafo3').textContent = 'Nuevo texto de parrafo por identificador, textContent y querySelector'; 

/* Parece que 'querySelector' toma un elemento general y dentro del argumento, tiene que especificarse la notación del tipo
de elemento. En este caso, usamos '#', que viene siendo el sustituto de 'getElementById' */

document.getElementById('parrafo4').innerHTML = "Nuevo texto de parrafo por identificador, innerHTML y getElementById";

/* En este caso se tiene que la propiedad es singular 'getElementById' */

/* --------------------------------------------------------------- */
/* 4) Asignando variables de elementos manipulados por propiedades generales. */

var parrafo1 = document.querySelectorAll('.parrafos')[0];

/* En este caso usamos 'querySelectorAll para poder tomar todos los elementos con la clase 'parrafos'. Y asì
poder usar la indexación. En este caso, se asigna a una variable. Se usa ".parrafos" porque necesitamos especificar
el tipo de elemento que estamos maipulando. En este caso, clases.*/


var parrafo2 = document.querySelector('#parrafo2');
/* En este caso, se asigna a una variable un elemento manipulado de una manera general con 'querySelector' y
se señala que tipo de elemento con '#' que señala un identificador. */


/* ---------------------------------------------------------------- */
/* 5) Imprimiendo las propiedades de document. */


console.log(document);
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);
 
/* Se despliega una lista de detalles de cada propiedad de 'document', que viene siendo la pàgina de HTML.
JS se sobrepone a lo escrito por default en el HTML */
