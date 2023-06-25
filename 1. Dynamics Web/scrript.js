const toggleBtn = document.querySelector('.btn-toggle')
const navCenter = document.querySelector('.nav-center')
const navRight = document.querySelector('.nav-right')

toggleBtn.addEventListener('click', ()=>{

    if(!toggleBtn.classList.contains('toggle-active')){
        toggleBtn.classList.add('toggle-active')
        navCenter.style.height = '160px';
        navRight.style.height = '50px';
    }
    else{
        toggleBtn.classList.remove('toggle-active')
        navCenter.style.height = '0px';
        navRight.style.height = '0px';
    }

})