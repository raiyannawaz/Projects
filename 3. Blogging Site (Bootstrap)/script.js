const likes = document.querySelectorAll('.like')
const replies = document.querySelectorAll('.repplies')

let count = 0;

likes.forEach((like)=>{
    like.addEventListener('click', ()=>{

        const singleCount = () =>{
            like.style.background = `#35aeff`;
            like.style.fontWeight = 'bold';
            like.style.color = 'white'
        }

        const doubleCount = () =>{
            like.style.background = `#bbe1fa`;
            like.style.fontWeight = 'normal';
            like.style.color = 'black'
        }

        count++;
        if(count === 1){
            singleCount()
            setTimeout(()=>{
                count = 0;
            }, 500)
        }
        else{
            doubleCount()
        }


    })
})

const reply = (replyId) =>{
    let id = document.getElementById(replyId);

    id.classList.toggle('show-reply')
    console.log(replyId)
}