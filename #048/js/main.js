// Event Propagation
// Three phases occur for each triggered events: Capturing, Target, and Bubbling

const boxes = document.querySelectorAll('.box')

// The capturing phase goes through window, document, followed by every elements before it reaches the event element.
boxes.forEach(box => {
    box.addEventListener(
        'click', 
        e => {
            console.log(e.eventPhase, e.currentTarget)
        },
        true  // setting the 3rd parameter, useCapture, to `true` will call the function in the capturing phase; Otherwise, event listeners will be triggered in the bubbling phase.

        // The bubbling phase comes last. It goes through every HTML element, from the target back to the window.   
    )
})


// Events that bubble has a bubbles property set to `true`
// 'click' in an example of an event that bubbles
// Examples of events that don't bubble are `focus` and `blur`


// The target phase is when JS reaches the event element and triggers all the event listeners attached to it. 
const box3 = document.querySelector('.box3')
box3.addEventListener('click', e => {
    console.log(e.eventPhase, e.currentTarget)
})
box3.addEventListener('click', e => {
    console.log(e.eventPhase, e.currentTarget)
}, true)
// The target phase disregards the useCapture flag.


// Event firing sequence is sequential. First listener attached to an element fires first.
const btn = document.querySelector('button')

btn.addEventListener('click', e => { console.log('first event' )})
btn.addEventListener('click', e => { console.log('second event' )})


// Preventing Bubbling: use stopPropagation or stopImmediatePropagation.

// stopPropagation prevents events from bubbling upward.
// stopImmediatePropagation

// Stopping propagation
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

box1.addEventListener('click', e => console.log('box 1 is clicked'))
box2.addEventListener('click', e => e.stopPropagation())

// Events from .box2 will not bubble to .box3 because stopPropagation is called in .box3