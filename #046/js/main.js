const mainContainer = document.querySelector('.main_container')
const btnStart = mainContainer.querySelector('.start_button')

function changeTextColorToRed(event) {
    if (event.currentTarget.style.color != 'red') {
        event.currentTarget.style.color = 'red'
        return
    }

    event.currentTarget.style.color = 'black'
}

btnStart.addEventListener('click', changeTextColorToRed)