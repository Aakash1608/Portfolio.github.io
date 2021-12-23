const allImages = document.querySelectorAll('img')
const allModal = document.querySelectorAll('.modal')
const section = document.querySelector('.content')
const onFlip = document.querySelector('.on-flip')
const show = document.querySelector('.show')
console.log(section)
console.log(allImages)
const closeAll = () => {
    allModal.forEach((modal) => {
        modal.style.display = 'none'
    })
    allImages.forEach((image) => {
        image.style.display = 'block'
    })
}

allImages.forEach((image) => {
    image.addEventListener('click', (e) => {
        if(e.target.id == 'javascript'){
            closeAll()
            image.style.display = 'none'
            allModal[0].style.display = 'block'
        }
        else if(e.target.id == 'express'){
            closeAll()
            image.style.display = 'none'
            allModal[1].style.display = 'block'
        }
        else if(e.target.id == 'python'){
            closeAll()
            image.style.display = 'none'
            allModal[2].style.display = 'block'
        }
        else if(e.target.id == 'node'){
            closeAll()
            image.style.display = 'none'
            allModal[3].style.display = 'block'
        }
        else if(e.target.id == 'react'){
            closeAll()
            image.style.display = 'none'
            allModal[4].style.display = 'block'
        }
        else if(e.target.id == 'django'){
            closeAll()
            image.style.display = 'none'
            allModal[5].style.display = 'block'
        }
    })
})
allModal.forEach((modal) => {
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'javascript'){
            modal.style.display = 'none'
            allImages[0].style.display = 'block'
        }
        else if(e.target.id == 'express'){
            modal.style.display = 'none'
            allImages[1].style.display = 'block'
        }
        else if(e.target.id == 'python'){
            modal.style.display = 'none'
            allImages[2].style.display = 'block'
        }
        else if(e.target.id == 'node'){
            modal.style.display = 'none'
            allImages[3].style.display = 'block'
        }
        else if(e.target.id == 'react'){
            modal.style.display = 'none'
            allImages[4].style.display = 'block'
        }
        else if(e.target.id == 'django'){
            modal.style.display = 'none'
            allImages[5].style.display = 'block'
        }
    })
})

window.addEventListener('click', (e) =>{
    if(e.target.id == allModal[0].id || e.target.id == allImages[0].id){
        return 0
    }
    else if(e.target.id == allModal[1].id || e.target.id == allImages[1].id){
        return 0
    }
    else if(e.target.id == allModal[2].id || e.target.id == allImages[2].id){
        return 0
    }
    else if(e.target.id == allModal[3].id || e.target.id == allImages[3].id){
        return 0
    }
    else if(e.target.id == allModal[4].id || e.target.id == allImages[4].id){
        return 0
    }
    else if(e.target.id == allModal[5].id || e.target.id == allImages[5].id){
        return 0
    }
    else{
        closeAll()
    }
})
function showHidden(){
    show.style.display = 'none'
    onFlip.style.display = 'block'
}
function hideHidden(){
    show.style.display = 'block'
    onFlip.style.display = 'none'
}