document.addEventListener('click', e => {
    if (!e.target.closest('button')) { return }
    e.target.classList.add('is-clicked')
})

document.addEventListener('animationend', e => {
    if (e.target.matches('.btn-one')) {
        e.target.style.transform = 'translate(500px, 220px)'
    }

    if (e.target.matches('.btn-three')) {
        e.target.parentNode.removeChild(e.target)
    }

    e.target.style.cursor = 'not-allowed'
})

document.addEventListener('transitionend', e => e.target.style.cursor = 'not-allowed')
