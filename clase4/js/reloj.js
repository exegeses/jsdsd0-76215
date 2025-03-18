/*
    Crear un reloj digital
    formato:  hh:mm:ss      i.e.: 11:39:24
*/
const contenedor = document.querySelector('#contenedor')

function verReloj()
{
    // Creamos objeto de fecha
    const fecha = new Date()
    console.log(fecha)

    // Obtenemos el número correspondiente a las horas
    let horas = fecha.getHours()
    if ( horas < 10 ){
        horas = '0'+ horas
    }
    console.log('horas:', horas)

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes()
    if ( minutos < 10 ){
        minutos = '0'+ minutos
    }
    console.log('minutos:', minutos)

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds()
    if ( segundos < 10 ){
        segundos = '0'+ segundos
    }
    console.log('segundos:', segundos)

    // escribimos en el article concatenendo
    contenedor.textContent = horas +':'+ minutos +':'+ segundos 
}

verReloj()
// Actualizamos el llamado a la función verReloj()
setInterval( verReloj, 1000 )