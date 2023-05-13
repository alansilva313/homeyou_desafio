const imagens = [
    {
        img: './img/img 1.png'
    },

    {
        img: './img/img 2.png'
    },
    {
        img: './img/img 3.png'
    }
]

const imgs = document.querySelector('#imgs')
function iniciarImgs(){

    imagens.forEach(function(image) {

       imgs.innerHTML += `
       
       <img src='${image.img}' alt='img' class='tagline'>
       
       `  
    })
}

iniciarImgs()
