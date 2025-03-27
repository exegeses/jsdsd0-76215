/*
    Crear un reloj digital
    formato:  hh:mm:ss      i.e.: 11:39:24
*/
const contenedor = document.querySelector('#contenedor')

function agregarCero( numero )
{
    if ( numero < 10 ){
        numero = '0'+ numero
    }
    return numero
}

function verReloj()
{
    // Creamos objeto de fecha
    const fecha = new Date()
    console.log(fecha)

    // Obtenemos el número correspondiente a las horas
    let horas = fecha.getHours()
        horas = agregarCero(horas)
    console.log('horas:', horas)

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes()
        minutos = agregarCero(minutos)
    console.log('minutos:', minutos)

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds()
        segundos = agregarCero(segundos)
    console.log('segundos:', segundos)

    // escribimos en el article concatenando
    // contenedor.textContent = horas +':'+ minutos +':'+ segundos 
    // Interpolamos en el article
    contenedor.textContent = `${horas}:${minutos}:${segundos}`
}

verReloj()
// Actualizamos el llamado a la función verReloj()
setInterval( verReloj, 1000 )