const btn = document.querySelector('.btn')
const txt = document.querySelector('.side-quest-txt')
btn.addEventListener('click', e => {   
    if (txt.getAttribute('revealed') == 'false') {
        txt.setAttribute('revealed', true)
        console.log('text was revealed')
        return
    } else {
        txt.setAttribute('revealed', false)
        console.log('text was hidden')
    }
})

// preventing default behaviors
// 1. prevent links with href
const anchors = document.querySelectorAll('a')

anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault()
        console.log(e.defaultPrevented)
    })
})

// 2. prevent checkbox
const checkbox = document.querySelector('[type="checkbox"]')

checkbox.addEventListener('click', e => {
    e.preventDefault()
})