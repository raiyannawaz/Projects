const boxs = document.querySelectorAll('.box')

boxs.forEach((box, index) => {
    
})

let value = 2

function funGame() {
    let ranNum1 = randonNumber();
    let ranNum2 = randonNumber();

    if (ranNum1 != ranNum2) {
        boxs[ranNum1].innerHTML = value
        boxs[ranNum1].style.background = 'grey'

        boxs[ranNum2].innerHTML = value
        boxs[ranNum2].style.background = 'grey'
    }
}

funGame()

function randonNumber() {
    return Math.floor(Math.random() * boxs.length)
}