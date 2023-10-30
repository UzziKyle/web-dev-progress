// Using Event Delegation
const tabby = document.querySelector('.tabby')
const tabsList = document.querySelector('.tabs')
const tabs = Array.from(tabby.querySelectorAll('.tab'))
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

tabsList.addEventListener('click', e => {
    const tab = e.target
    const target = tab.dataset.target
    const tabContent = tabby.querySelector('#' + target)

    tabs.forEach(t => t.classList.remove('is-selected'))
    tab.classList.add('is-selected')

    tabContents.forEach(tc => tc.classList.remove('is-selected'))
    tabContent.classList.add('is-selected')
})