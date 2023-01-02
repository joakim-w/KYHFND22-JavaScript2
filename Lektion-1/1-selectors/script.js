

// const header = document.getElementById('main-header')
// const headings = document.getElementsByTagName('h2')
// const listItems = document.getElementsByClassName('list-item')


// console.log(headings)

//Query Selector

const header = document.querySelector('#main-header')

const ptag = document.querySelector('.list-item:nth-child(2) span')

const listItems = document.querySelectorAll('.list-item')

// console.log(listItems[0])

// listItems.forEach(item => {
//   console.log(item)
// })



// console.log(listItems[0].innerText)
// console.log(listItems[0].textContent)

// Om input från användaren används för att skapa någonting i DOM så bör INTE innerHTML användas
// console.log(listItems[0].innerHTML)

// listItems[0].innerHTML = '<p>test</p> '


//Traverserar i DOM

const list = document.querySelector('.list')
// console.log(list.childNodes)
// console.log(list.children)
// console.log(list.parentNode)
// console.log(list.previousSibling)
// console.log(list.previousElementSibling)
// console.log(list.nextSibling)
// console.log(list.nextElementSibling)

console.log(list.parentElement.parentElement)


listItems.forEach(item => {
  item.querySelector('button').addEventListener('click', (e) => {

    console.log(e.target)
    e.target.parentElement.remove()

  })
})