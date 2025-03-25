/*
    Al pulsar el botón vamos a generar un número aleatorio
    Este número debería ser un entero entre el 1 y el 10
    Mostrar este número en el article
*/
const btn = document.querySelector('#btn')
const contenedor = document.querySelector('#contenedor')

function generarNumero()
{
    /*
    // Math.random()  Genera un número aleatorio entre el 0 ~ 1
    let numeroAleatorio = Math.random()
    console.log(numeroAleatorio)
    // Al multiplicar generamos un número aleatorio entre el 0 ~ 9
    let numeroMultiplicado = numeroAleatorio * 9
    console.log(numeroMultiplicado)
    // le sumamos 1
    let numeroSumado = numeroMultiplicado + 1
    console.log(numeroSumado)
    // quitamos decimales
    let numero = Math.trunc(numeroSumado)
    contenedor.textContent = numero
    */
    return Math.round(Math.random()*9+1)
}

btn.addEventListener(
        'click',
        () =>
        {
            numero = generarNumero()
            contenedor.textContent = numero
        }
)