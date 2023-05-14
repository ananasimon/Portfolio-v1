let mainText = document.getElementById('hello')
let skil = document.getElementById('skills')
let experience = document.getElementById('experience')
let education = document.getElementById('education')
let hobbies = document.getElementById('hobbies')
let expCss = document.getElementById('css-exp')

let btnMain = document.getElementById('id-name')
let btnSkills = document.getElementById('btn-skills')
let btnExperience = document.getElementById('btn-experience')
let btnEducation = document.getElementById('btn-education')
let btnHobbies = document.getElementById('btn-hobbies')


skil.style.display = 'none'
experience.style.display = 'none'
education.style.display = 'none'
hobbies.style.display = 'none'
prime.style.display = 'none'
expCss.style.display = 'none'



btnMain.addEventListener('click', function() {
    skil.style.display = 'none'
    experience.style.display = 'none'
    mainText.style.display = 'flex'
    education.style.display = 'none'
    hobbies.style.display = 'none'
    mainText.style.flexDirection='column'
    prime.style.display = 'none'
    download.style.display ='flex'
    expCss.style.display = 'none'
    calc.style.display = 'none'
    binary.style.display = 'none'
    drum.style.display = 'none'
    sys.style.display = 'none'

})

btnSkills.addEventListener('click', function(){
    skil.style.display = 'block'
    experience.style.display = 'none'
    mainText.style.display = 'none'
    education.style.display = 'none'
    hobbies.style.display = 'none'
    prime.style.display = 'none'
    download.style.display ='flex'
    expCss.style.display = 'none'
    calc.style.display = 'none' 
    binary.style.display = 'none'
    drum.style.display = 'none'
    sys.style.display = 'none'

})

btnExperience.addEventListener('click', function(){
    skil.style.display = 'none'
    experience.style.display = 'inline-block'
    mainText.style.display = 'none'
    education.style.display = 'none'
    hobbies.style.display = 'none'
    prime.style.display = 'none'
    download.style.display ='flex'
    expCss.style.display = 'none'
    calc.style.display = 'none' 
    binary.style.display = 'none'
    drum.style.display = 'none'
    sys.style.display = 'none'

})

btnEducation.addEventListener('click', function(){
    skil.style.display = 'none'
    experience.style.display = 'none'
    mainText.style.display = 'none'
    education.style.display = 'inline-block'
    hobbies.style.display = 'none'
    prime.style.display = 'none'
    download.style.display ='flex'
    expCss.style.display = 'none'
    calc.style.display = 'none'
    binary.style.display = 'none' 
    drum.style.display = 'none'
    sys.style.display = 'none'
    
})

btnHobbies.addEventListener('click', function(){
    skil.style.display = 'none'
    experience.style.display = 'none'
    mainText.style.display = 'none'
    education.style.display = 'none'
    hobbies.style.display = 'inline-block'
    prime.style.display = 'none'
    download.style.display ='flex'
    expCss.style.display = 'none'
    calc.style.display = 'none' 
    binary.style.display = 'none'
    drum.style.display = 'none'
    sys.style.display = 'none'
})




