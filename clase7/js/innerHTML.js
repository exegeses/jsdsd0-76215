// Ubicamos elementos dentro del DOM
const btn = document.querySelector('#btn')
const muestras = document.querySelectorAll('#muestras p')

console.log(btn)
console.log(muestras)
/* listado de nodos <p>  */
const primero = muestras[0]
const segundo = muestras[1]
const tercero = muestras[2]

const contenido = '<h2>es un enunciado 2 <img src="imgs/java-script.png"></h2>'
// Escribimos en cada uno de los párrafos
primero.textContent = contenido
segundo.innerText = contenido
tercero.innerHTML = contenido