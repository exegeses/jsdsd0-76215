// Ubicar elementos dentro del documento
const btnMclaren = document.querySelector('#btnMclaren')
const btnRedbull = document.querySelector('#btnRedbull')
const btnFerrari = document.querySelector('#btnFerrari')
const btnMercedes = document.querySelector('#btnMercedes')
const btnAmartin = document.querySelector('#btnAmartin')

const mclaren = document.querySelector('#mclaren')
const redbull = document.querySelector('#redbull')
const ferrari = document.querySelector('#ferrari')
const mercedes = document.querySelector('#mercedes')
const amartin = document.querySelector('#amartin')

/*
    Estado inicial: 
    que sólo se vea 1 escudería
    ocultar las demás
*/
redbull.style.display = 'none'
ferrari.style.display = 'none'
mercedes.style.display = 'none'
amartin.style.display = 'none'

// ----
btnMclaren.addEventListener(
        'click',
        () =>
        {
            mclaren.style.display = 'flex'
            redbull.style.display = 'none'
            ferrari.style.display = 'none'
            mercedes.style.display = 'none'
            amartin.style.display = 'none'            
        }
)

btnRedbull.addEventListener(
        'click',
        () => 
        {
            mclaren.style.display = 'none'
            redbull.style.display = 'flex'
            ferrari.style.display = 'none'
            mercedes.style.display = 'none'
            amartin.style.display = 'none'            
        }
)
btnFerrari.addEventListener(
        'click',
        () => 
        {
            mclaren.style.display = 'none'
            redbull.style.display = 'none'
            ferrari.style.display = 'flex'
            mercedes.style.display = 'none'
            amartin.style.display = 'none'            
        }
)
btnMercedes.addEventListener(
        'click',
        () => 
        {
            mclaren.style.display = 'none'
            redbull.style.display = 'none'
            ferrari.style.display = 'none'
            mercedes.style.display = 'flex'
            amartin.style.display = 'none'            
        }
)
btnAmartin.addEventListener(
        'click',
        () => 
        {
            mclaren.style.display = 'none'
            redbull.style.display = 'none'
            ferrari.style.display = 'none'
            mercedes.style.display = 'none'
            amartin.style.display = 'flex'            
        }
)
