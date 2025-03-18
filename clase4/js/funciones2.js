// Ubicamos elementos dentro del DOM
//const caja = document.getElementById('caja')
const caja = document.querySelector('#caja')

function pintar( nombreColor, codigoColor, grados )
{
    caja.textContent = nombreColor
    caja.style.backgroundColor = codigoColor
    caja.style.rotate = grados
}