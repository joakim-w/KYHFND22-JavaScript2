

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

// console.log(list.parentElement.parentElement)


// listItems.forEach(item => {
//   item.querySelector('button').addEventListener('click', (e) => {

//     console.log(e.target)
//     e.target.parentElement.remove()

//   })
// })




// EVENTS

// console.log(window)

// const btn = document.querySelector('#btn')
// const stopBtn = document.querySelector('#btn2')
// const link = document.querySelector('a')

// Detta sätt bör vi undvika då vi inte får samma kontroll som addEventListener

// btn.onclick = function() {
//   console.log('do stuff 1')
// }
// btn.onclick = function() {
//   console.log('do stuff 2')
// }




// btn.addEventListener('click', function(e) {
//   console.log('do stuff 1')
// }, { once: true })



// function eventFunction() {
//   console.log('do stuff 2')
// }
// btn.addEventListener('click', eventFunction)

// stopBtn.addEventListener('click', () => {
//   // Om vi ska ta bort en eventListener så MÅSTE add & remove se exakt likadana ut
//   // Vi måste då alltså använda en funktion som ligger utanför
//   btn.removeEventListener('click', eventFunction)
// })



// btn.addEventListener('dblclick', (e) => {
//   console.log(e)
// })

// const logTarget = (e) => {
//   console.log(e.target)
// }

// btn.addEventListener('click', logTarget)
// stopBtn.addEventListener('click', logTarget)

// header.addEventListener('mousemove', (e) => {
//   // console.log(e)
//   header.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 0)`
// })


// link.addEventListener('click', (e) => {
//   e.preventDefault()
//   // link.innerText = 'till Yahoo'
//   window.location.replace('https://se.yahoo.com/')
// })


// document.forms[0].addEventListener('submit', e => {
//   e.preventDefault()
//   console.log('skickar formulär')
// })



// const addForm = document.forms[0];
const addForm = document.querySelector('#addForm');
const titleInput = document.querySelector('#titleInput')

addForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // list.innerHTML += '<li class="list-item"><span>' + titleInput.value + '</span><button>delete3</button></li>'

  // list.innerHTML += `
  //   <li class="list-item">
  //     <span>${titleInput.value}</span>
  //     <button>delete3</button>
  //   </li>
  // `

//   list.insertAdjacentHTML('beforeend',`
//   <li class="list-item">
//     <span>${titleInput.value}</span>
//     <button>delete</button>
//   </li>
// `)


// SKAPA ELEMENT
const li = document.createElement('li')
const span = document.createElement('span')
const deleteBtn = document.createElement('button')

// LÄGG TILL EN KLASS
li.classList.add('list-item') // Lägger till en klass om den inte finns
// li.classList.remove('list-item') // tar bort en klass om den finns
// li.classList.toggle('list-item') // togglar mellan att lägga till / ta bort klassen


// LÄGG TILL INNEHÅLL I ELEMENTEN
span.innerText = titleInput.value
deleteBtn.textContent = 'Ta bort'

// BYGGA IHOP ELEMENTET
li.appendChild(span)
li.appendChild(deleteBtn)

// LÄGG TILL ELEMENTET I LISTAN
list.appendChild(li)

})

// beforebegin
// <ul>
// afterbegin

// beforeend
// </ul>
// afterend


list.addEventListener('click', e => {

  // console.log(e.target.getAttribute('data-delete'))
  // console.log(Array.from(e.target.classList).includes('delete-btn'))
  // console.log(e.target.classList[0])
  if(e.target.nodeName === 'BUTTON') {
    e.target.parentElement.remove()
  }
})

list.addEventListener('click', e => {
  if(e.target.nodeName === 'SPAN') {
    // e.target.style.fontWeight = 'bold'
    // e.target.style.fontSize = '1.1rem'
    // e.target.nextElementSibling.style.fontWeight = 'bold'
    // e.target.parentElement.style.backgroundColor = '#cecece'

    e.target.parentElement.classList.toggle('active')
  }
})