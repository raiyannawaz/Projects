let nav = document.getElementById('nav')

window.onscroll = () =>{
    let scroll = Math.floor(window.pageYOffset)
    let navHeight = Math.floor(nav.getBoundingClientRect().height);

    if(scroll > navHeight/2){
        nav.classList.add('nav-top')
    }
    else if(scroll > '100vh'){
        nav.classList.remove('nav-top')
    }
    else{ 
        nav.classList.remove('nav-top')    
    }
}


let btnToggle = document.querySelector('.btn-toggle')
let ul = document.querySelector('.ul')

let scrollLinks = document.querySelectorAll('.nav-links')

scrollLinks.forEach((links)=>{
    links.addEventListener('click', (e)=>{
        ul.classList.remove('show-toggle')
        btnToggle.style.background = 'white';
        btnToggle.style.color = `#4f67d1`
    })
})

btnToggle.addEventListener('click', (e)=>{
    ul.classList.toggle('show-toggle')
    if(ul.classList.contains('show-toggle')){
        btnToggle.style.background = `#4f67d1`
        btnToggle.style.color = 'white'
    }
    else{
        btnToggle.style.background = 'white';
        btnToggle.style.color = `#4f67d1`
    }
})
