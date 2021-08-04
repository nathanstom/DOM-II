// Your code goes here
window.onload = function (event) {
    console.log(`an event happened, of type ${event.type}`)
}
window.addEventListener('load', event => {
    console.log(`${event.type} happened`)
})



const mainNav = document.querySelectorAll('.nav-link')
mainNav.forEach(elem => {
    elem.addEventListener(`click`, event => {
        event.preventDefault()
        event.target.style.backgroundColor = 'yellow'
    })
    elem.addEventListener(`mouseover`, event => {
        event.target.style.color = 'green'
    })
    elem.addEventListener(`mouseleave`, event => {
        event.target.style.color = 'black'
    })
    elem.addEventListener(`focus`, event => {
        event.target.style.border = '2px solid black'
    })

})

const title = document.querySelector('h1')
title.addEventListener('click', event => {
    window.confirm("Click to continue")
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')

})

const otherTitles = document.querySelectorAll('h2')
otherTitles.forEach(elem => {
    elem.addEventListener(`dblclick`, event => {
        window.open('https://www.worldwildlife.org/', '_blank')
    })
})

const Imgs = document.querySelectorAll('img')
Imgs[0].addEventListener(`mouseenter`, event => {
    Imgs[0].style.border = '5px dotted purple'
})
window.addEventListener(`resize`, event => {
    Imgs[1].style.border = '5px dotted purple'
})
Imgs[2].addEventListener(`resize`, event => {
    Imgs[2].style.border = '5px dotted purple'
})
window.addEventListener(`keydown`, event => {
    Imgs[3].style.display = 'none'
})
window.addEventListener('scroll', event => {
    if(Imgs[0].style.display === 'none'){
        Imgs[0].style.display = 'block'
    }else{
        Imgs[0].style.display = 'none'
    }
    
})

const dest = document.querySelector('.destination')
dest.addEventListener('click', event => {
    dest.style.backgroundColor = 'green'
})
dest.children[0].addEventListener('click', event => {
    event.target.style.color = 'blue'
    event.stopPropagation()
})

// HTML WAS EDITED ONLY TO ADD A LINK TO THE NAVIGATION TO DEMONSTRATE MY LAST TASK.