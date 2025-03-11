/*
    Bueno declarar una variable en Javascript 
    utilizamos la palabra reservada 'let'
*/
let numero = 10
let precio = 75.50
let direccion = 'Lavalle 648, piso 8'
let puntaje = 0

/*
    Para declarar una constante en Javascript 
    utilizamos la palabra reservada 'const'
*/
const PI = 3.141592
const nacimiento = '11/03/1995'


// Escribimos en el documento
document.write('numero: ', numero)
document.write('<br>')
document.write('direccion: ', direccion)

document.write('<hr>')
// Sobre escribimos (cambiamos el valor almacenado) alguna variable
/*
    el igual "=" Es el operador de asignación
    Sirve para asignar un valor a una variable  
*/
numero = 20
// numero = 'cadena'
// Escribimos en el documento
document.write('numero: ', numero)

document.write('<hr>')
// Escribimos en el documento
document.write('nacimiento: ', nacimiento)
// Sobre escribimos (cambiamos el valor almacenado) alguna constante
/*
nacimiento = 'kiwi'
document.write('nacimiento: ', nacimiento)

    No se puede sobre describir el valor de una constante
*/