// Ubicamos elementos dentro del DOM
//const caja = document.getElementById('caja')
const caja = document.querySelector('#caja')

// declaración de funciones
function pintarRojo()
{
    caja.textContent = 'Rojo'
    caja.style.backgroundColor = 'hsl(0, 80%, 60%)'
    caja.style.rotate = '20deg'
}
function pintarNaranja()
{
    caja.textContent = 'Naranja'
    caja.style.backgroundColor = 'hsl(30, 80%, 60%)'
    caja.style.rotate = '-15deg'
}
function pintarAmarillo()
{
    caja.textContent = 'Amarillo'
    caja.style.backgroundColor = 'hsl(50, 80%, 60%)'
    caja.style.rotate = '-30deg'
}