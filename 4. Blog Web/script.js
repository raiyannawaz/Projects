const toggleBtn = document.querySelector('.btn-toggle')
const navUl = document.querySelector('.nav-ul')
const para = document.querySelector('.left-hero p')

toggleBtn.addEventListener('click', () =>{
    if(!toggleBtn.classList.contains('toggle-active')){
        toggleBtn.classList.add('toggle-active')
        navUl.style.height = '160px';
    }
    else{
        toggleBtn.classList.remove('toggle-active')
        navUl.style.height = '0px';
    }
})

window.addEventListener('DOMContentLoaded', ()=>{
    if(this.innerWidth <= 500){

        para.innerHTML = para.innerHTML.split(' ').slice(0, 10).join(' ')


    }
})