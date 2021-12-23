const hobbies = document.querySelector('.hobbies')
const about = document.querySelector('.about')


const hobbyBtn = document.querySelector('.right-btn')
const introBtn = document.querySelector('.left-btn')

introBtn.addEventListener('click', () => {
    about.style.display = 'block'
    hobbies.style.display = 'none'
})
hobbyBtn.addEventListener('click', () => {
    hobbies.style.display = 'block'
    about.style.display = 'none'
})


