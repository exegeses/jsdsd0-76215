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
function mostrarImagen(num)
{
    /* if ( num == 1 ){
        caja.innerHTML = '<img src="red/dice-1.png">'
    }
    else if( num == 2 ){
        caja.innerHTML = '<img src="red/dice-2.png">'
    }
    else if( num == 3 ){
        caja.innerHTML = '<img src="red/dice-3.png">'
    }
    else if( num == 4 ){
        caja.innerHTML = '<img src="red/dice-4.png">'
    }
    else if( num == 5 ){
        caja.innerHTML = '<img src="red/dice-5.png">'
    }
    else if( num == 6 ){
        caja.innerHTML = '<img src="red/dice-6.png">'
    }*/
   // caja.innerHTML = '<img src="red/dice-'+ num +'.png">'
    caja.innerHTML = `<img src="red/dice-${num}.png">`
}

function reproducirSonido()
{
    const sonido = new Audio('audio/dice.mp3')
    sonido.play()
}

boton.addEventListener(
        'click',
        function()
        {
            let numero = tirarDado()
            mostrarImagen(numero)
            reproducirSonido()
        }
)