const toggleBtn = document.querySelector('.toggle-btn')
const navUl = document.querySelector('.nav-ul')
const navItem = document.querySelectorAll('.nav-item')

toggleBtn.addEventListener('click', ()=>{
    if(!toggleBtn.classList.contains('toggle-active')){
        toggleBtn.classList.add('toggle-active')
        navUl.classList.add('ul-div')
    }
    else{
        toggleBtn.classList.remove('toggle-active')
        navUl.classList.remove('ul-div')
    }
})

navItem.forEach(item =>{
    item.addEventListener('click', (e)=>{
        navUl.classList.remove('ul-div')
    })
})