// Event Delegation

// Here’s a list of famous people. Do the following:

{/* <ul>
  <li><a href="#">Benjamin Franklin</a></li>
  <li><a href="#">Thomas Edison</a></li>
  <li><a href="#">Franklin Roosevelt</a></li>
  <li><a href="#">Napoleon Bonaparte</a></li>
  <li><a href="#">Abraham Lincoln</a></li>
</ul> */}

// 1. Create an event listener that uses the event delegation pattern
// 2. Log the element if the target matches li
// 3. Try using both pointer events and closest to filter the event target


const list = document.querySelector('ul')

// using pointer events
list.addEventListener('click', e => {
    if (e.target.matches('li')) {
        console.log(e.target)
    }
})

// using event.closest
// list.addEventListener('click', e => {
//     if (e.target.closest('li')) {
//         console.log(listItem)
//     }
// })


// Removing Event Listeners
// ```element.removeEventListener('event-name', callback)```

// Do the following:

// 1. Add a click event listener.
// 2. Remove the event listener you’ve added.
// 3. Create an event listener that listens for five clicks.

function listenForFiveClicks(e) {
    const elem = e.currentTarget
    const prevCount = parseInt(elem.dataset.count) || 0
    const currCount = prevCount + 1

    elem.dataset.count = currCount
    console.log(`clicked ${currCount} times`)

    if (currCount === 5) {
        console.log('event listener is removed')
        elem.removeEventListener('click', listenForFiveClicks)
    }
}

const btn = document.querySelector('button')
btn.addEventListener('click', listenForFiveClicks)

