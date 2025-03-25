const caja = document.querySelector('#caja')
const boton = document.querySelector('#boton')
/*
    Generar un número aleatorio 
    entre 1 y 6 (sin decimales)

    Insertar en el div #caja una imagen (dado)
    que corresponda con el número que acabamos de generar
*/

function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

boton.addEventListener(
        'click',
        function()
        {
            let numero = tirarDado()
            console.log(numero)
        }
)