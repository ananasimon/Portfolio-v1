let prime = document.getElementById('prime')
let download = document.getElementById('download')
let calc = document.getElementById('calculator')
let binary = document.getElementById('bg')
let drum = document.getElementById('drum')
let sys =document.getElementById('systems')

let btnPrime = document.getElementById('btn-prime')
let btnCss = document.getElementById('btn-css')
let btnCalc = document.getElementById('btn-calc')
let btnBinary = document.getElementById('btn-bg')
let btnDrum = document.getElementById('btn-drum')
let btnSys =document.getElementById('btn-sys')

calc.style.display = 'none' 
binary.style.display = 'none'
drum.style.display = 'none'
sys.style.display = 'none'

btnPrime.addEventListener('click', function() {
    prime.style.display = 'flex'
    prime.style.flexDirection ='column'
    skil.style.display = 'none'
    experience.style.display = 'none'
    education.style.display = 'none'
    hobbies.style.display = 'none'
    mainText.style.display ='none'
    download.style.display ='none'
    expCss.style.display = 'none'
    calc.style.display = 'none' 
    binary.style.display = 'none'
    drum.style.display = 'none'
    sys.style.display = 'none'
})

btnCss.addEventListener('click', function(){
    prime.style.display = 'none'
    skil.style.display = 'none'
    experience.style.display = 'none'
    education.style.display = 'none'
    hobbies.style.display = 'none'
    mainText.style.display ='none'
    download.style.display ='none'
    expCss.style.display = 'flex'
    expCss.style.flexDirection= 'column'
    calc.style.display = 'none' 
    binary.style.display = 'none'
    drum.style.display = 'none'
    sys.style.display = 'none'
})

btnCalc.addEventListener( 'click', function() {
    prime.style.display = 'none'
    skil.style.display = 'none'
    experience.style.display = 'none'
    education.style.display = 'none'
    hobbies.style.display = 'none'
    mainText.style.display ='none'
    download.style.display ='none'
    calc.style.display = 'flex'
    calc.style.flexDirection= 'column'
    expCss.style.display = 'none' 
    binary.style.display = 'none'
    drum.style.display = 'none'
    sys.style.display = 'none'
})

btnBinary.addEventListener( 'click', function(){
    prime.style.display = 'none'
    skil.style.display = 'none'
    experience.style.display = 'none'
    education.style.display = 'none'
    hobbies.style.display = 'none'
    mainText.style.display ='none'
    download.style.display ='none'
    binary.style.display = 'flex'
    binary.style.flexDirection= 'column'
    expCss.style.display = 'none' 
    calc.style.display = 'none'
    drum.style.display = 'none'
    sys.style.display = 'none'
})

btnDrum.addEventListener('click', function() {
    prime.style.display = 'none'
    skil.style.display = 'none'
    experience.style.display = 'none'
    education.style.display = 'none'
    hobbies.style.display = 'none'
    mainText.style.display ='none'
    download.style.display ='none'
    drum.style.display = 'flex'
    drum.style.flexDirection= 'column'
    expCss.style.display = 'none' 
    calc.style.display = 'none'
    binary.style.display = 'none'
    sys.style.display = 'none'
}
)

btnSys.addEventListener('click', function(){
    prime.style.display = 'none'
    skil.style.display = 'none'
    experience.style.display = 'none'
    education.style.display = 'none'
    hobbies.style.display = 'none'
    mainText.style.display ='none'
    download.style.display ='none'
    sys.style.display = 'flex'
    sys.style.flexDirection= 'column'
    expCss.style.display = 'none' 
    calc.style.display = 'none'
    binary.style.display = 'none'
    drum.style.display = 'none'
})


