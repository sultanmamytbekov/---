const div = document.querySelector('.div')
const input = document.querySelector('.form-control')
const btn = document.querySelector('.btn')
const lol = document.querySelector('.lol')

function img(){
    fetch(`https://dog.ceo/api/breed/Affenpinscher/images/random`)
        .then(data => data.json())
        .then(res => {
            console.log(res)
            res.message.slice(0, 10).map(el => {
                div.innerHTML += `<div>
<img width="380px" src=${res.data.message} alt="">
</div>`
            })
        })
}

btn.addEventListener('click', () => {
    name()
    div.innerHTML = ''
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        name()
        div.innerHTML = ''
    }
})

function name() {
    fetch(`https://dog.ceo/api/breed/${input.value}/images/random`)
        .then(data => data.json())
        .then(res => {
            res.message.slice(0, 10).map(el => {
                div.innerHTML += `<div>

<img width="380px" src=${el} alt="">

</div>`
            })
        })
}


// lol.addEventListener('change',(e)=>{
//     img(e.target.value)
// })

function sum() {
    fetch(`https://dog.ceo/api/breeds/list/all`)
        .then((data) => data.json())
        .then((res) => {
            console.log(res)
            Object.keys(res.message).map(el => {
                lol.innerHTML += `<option>${el}</option>`
            })
        })
}
sum()

lol.addEventListener("change", (e) => {
   img(e.target.value)
})

