// Ubicar elementos dentro del DOM

const texto = document.querySelector('#texto')
const boton = document.querySelector('#calculador button')
const muestreo = document.querySelector('#muestreo')

boton.addEventListener(
        'click', () =>
        {
            // Obtengo el texto escrito en la caja de texto
            let contenido = texto.value
            const algo = 'constante'
            /* Escribimos en el article #muestreo
            muestreo.textContent = contenido*/
            // Concadenamos  texto a la constante algo
            //muestreo.textContent = contenido + algo + contenido
            // Interpolamos texto a la constante  backtick  ` ` 
            muestreo.textContent = `${contenido} ${algo} ${contenido}`
        }
)