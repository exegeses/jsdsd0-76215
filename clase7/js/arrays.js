const contenedor = document.querySelector('#contenedor')
//const alumnos = ['Cintya','David', 'Enzo', 'Fabrizio', 'Juan']
const alumnos = [
                    'Cintya','David', 'Enzo', 
                    'Fabrizio', 'Juan', 'Salvador'
                ]
console.log(alumnos)
contenedor.textContent = alumnos[2]

// Vamos a mostrar el nombre del día de la semana
const fecha = new Date()
let numeroDiaSemana = fecha.getDay()
console.log('número de día de la semana:', numeroDiaSemana)
/*
    Dom   ->  0
    Lun   ->  1
    Mar   ->  2
    Mié   ->  3
    Jue   ->  4
    Vie   ->  5
    Sab   ->  6
*/
/*if( numeroDiaSemana == 0 ){
    contenedor.textContent = 'Domingo'
}
else if( numeroDiaSemana == 1 ){
    contenedor.textContent = 'Lunes'
}
else if( numeroDiaSemana == 2 ){
    contenedor.textContent = 'Martes'
}
else if( numeroDiaSemana == 3 ){
    contenedor.textContent = 'Miércoles'
}
else if( numeroDiaSemana == 4 ){
    contenedor.textContent = 'Jueves'
}
else if( numeroDiaSemana == 5 ){
    contenedor.textContent = 'Viernes'
}
else{
    contenedor.textContent = 'Sábado'
}
*/
// Array con los días de la semana
const semana = [
                'Domingo', 'Lunes', 'Martes',
                'Miércoles', 'Jueves', 'Viernes',
                'Sabado'
               ]
contenedor.textContent = semana[numeroDiaSemana]               