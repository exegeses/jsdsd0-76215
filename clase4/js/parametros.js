/*
    Un parámetro completa el sentido de una función
    Si enviamos un dato a una función
    Éste dato puede ser procesado 
    para cambiar levemente lo que hace nuestra función
*/
// Ubicamos elementos dentro del DOM
const numero = document.querySelector('#numero')
const destino = document.querySelector('#destino')
const muestreo = document.querySelector('#muestreo')


// declaración
function saludar( nombrePersona )
{
    console.log('hola', nombrePersona)
}

// invocación : llamado a ejecución
saludar('Rick')
saludar('Morty')
saludar('Summer')

/* Función para convertir distancias 
   @param valor Number (Número a convertir)
   @param unidad string (unidad destino)
*/
function convertirDistancia( valor, unidad )
{
    let resultado = 0;
    if( unidad == 'mi' ){
        resultado = valor * 0.621371
    }
    else if( unidad == 'km' ){
        resultado = valor * 1.60934
    }
    console.log(resultado)
    return resultado
}
function calcular()
{
    // Capturar el número escrito en la caja de texto
    let valor = numero.value
    // capturar la opción seleccionada en el desplegable
    let unidad = destino.value
    // Llamar a la función convertir distancia con esos valores
    let resultado = convertirDistancia(valor, unidad)
    // Imprimimos en el article #muestreo
    muestreo.textContent = resultado
}


convertirDistancia( 1, 'mi' )
convertirDistancia( 1, 'km' )