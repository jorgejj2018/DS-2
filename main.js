// evento menu 
const $ctnbuscar = document.querySelector('.buscar')
const $ctnRedesYmas = document.querySelector('.redesYmas')
const $ctnlogo = document.querySelector('.ctn-title')
const $logoTitleDark = document.querySelector('.ctn-textTitle h3')
const $logoTitleRed = document.querySelector('.ctn-textTitle h3 span')

const disableSeccionesHeader  = () => {
    $ctnbuscar.style.display = 'none';
    $ctnRedesYmas.style.display = 'none'

    $ctnlogo.style.margin = '-7% 2%'
    $ctnlogo.style.marginBottom = '7%'

    $logoTitleDark.style.color = '#D81F1F'
    $logoTitleRed.style.color = 'black'
}

const enableSeccionesHeader = () => {
    $ctnbuscar.style.display = 'flex';
    $ctnRedesYmas.style.display = 'flex'

    $ctnlogo.style.margin = '0% 4%'

    $logoTitleDark.style.color = 'black'
    $logoTitleRed.style.color = '#D81F1F'


} 

document.addEventListener('click', (e) =>{
    console.log(e.target)

    
    if (e.target.matches('#btn-menu')){
        if ($ctnbuscar.style.display === 'flex' || $ctnRedesYmas.style.display === 'flex') {
            disableSeccionesHeader()
        }
        else{
            enableSeccionesHeader()
        }
    }

});