const tabs = Array.from(document.querySelectorAll('.tab'))
const tabContents = Array.from(document.querySelectorAll('.tab-content'))

tabs.forEach(tab => {

    tab.addEventListener('click', e => {
        const target = tab.dataset.target
        const tabContent = document.querySelector('#' + target)
        
        tabs.forEach(t => {t.classList.remove('is-selected')})
        tab.classList.add('is-selected')

        tabContents.forEach(c => c.classList.remove('is-selected'))
        tabContent.classList.add('is-selected')
    })
})