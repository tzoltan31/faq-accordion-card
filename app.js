const q1El = document.querySelector('.q1')
const q2El = document.querySelector('.q2') 
const q3El = document.querySelector('.q3') 
const q4El = document.querySelector('.q4')
const q5El = document.querySelector('.q5')

const qaItem = document.querySelectorAll('.qa-item')

const a1El = document.querySelector('.a1')
const a2El = document.querySelector('.a2')
const a3El = document.querySelector('.a3')
const a4El = document.querySelector('.a4')
const a5El = document.querySelector('.a5')

const icon = document.querySelector('.icon-arrow')

let questions = [q1El, q2El, q3El, q4El, q5El]
let answers = [a1El, a2El, a3El, a4El, a5El]

answers.forEach(element => {
   element.style.display = 'none'
});     

qaItem.forEach( (element, i) => {
    element.addEventListener('click', (e) => { 
     if (answers[i].style.display == 'none') {
        answers.forEach(element => {
           element.style.display = 'none'
        })
        questions.forEach(element => {
           element.childNodes[1].childNodes[0].style.transform = ''
           element.style.fontWeight = '400'
        })

        answers[i].style.display = 'block'
        questions[i].childNodes[1].childNodes[0].style.transform = 'rotate(180deg)'
        questions[i].style.fontWeight = '700'
     }
     else {
        answers[i].style.display = 'none'
        questions[i].childNodes[1].childNodes[0].style.transform = ''
        questions[i].style.fontWeight = '400'

     }    
    })  
});