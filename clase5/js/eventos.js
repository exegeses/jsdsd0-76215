// Ubicar elementos dentro del DOM
const btn = document.querySelector('#btn')
const contenedor = document.querySelector('#contenedor')

// addEventListener( 'evento', acción )

btn.addEventListener(
        'click', 
        function()
        {
            contenedor.textContent = 'hiciste click'
        }
)
btn.addEventListener(
        'mouseover', 
        function()
        {
            contenedor.textContent = 'mouse sobre'
        }
)
btn.addEventListener(
        'mouseout',
        () =>
        {
            contenedor.textContent = 'reposo'
        }
)