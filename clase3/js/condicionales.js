// Ubicar elementos dentro del DOM
const contenedor = document.querySelector('#contenedor')
//contenedor.textContent = 'manzana'

/*
    Hacer una pregunta al usuario
    - El usuario va a responder
    - Almacenar la respuesta en memoria
*/

let respuesta = prompt('¿qué seleccionado ganó la copa del mundo Qatar 2022?')

/*
    Vamos a comparar la respuesta enviada por el usuario
    - Si el usuario responde 'argentina'
        Entonces mostramos la palabra ¡correcto!
    - Si responde cualquier cosa diferente de 'argentina'
        Entonces mostramos la palabra ¡incorrecto!
*/

if( respuesta.toLowerCase() == 'argentina' ){
    // Bloque a ejecutar si la condición es true
    contenedor.textContent = '¡correcto!'
}
else{
    // Bloque a ejecutar si la condición es false
    contenedor.textContent = '¡incorrecto!'
}