const modal = document.getElementById('modal')
const pesquisar = document.getElementById('pesquisar')

    pesquisar.addEventListener('click', () =>{
        modal.classList.remove('hide')
    })

const close = document.querySelector('#modal .header a')

    close.addEventListener('click', () => {
        modal.classList.add('hide')
    })