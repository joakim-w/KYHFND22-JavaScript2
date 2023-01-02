// Hämtar referenser till dom element som vi kommer att använda
const list = document.querySelector('.list')
const addForm = document.querySelector('#addForm');
const titleInput = document.querySelector('#titleInput')

// "lyssnar" efter när formuläret skickas iväg
addForm.addEventListener('submit', (e) => {
  // förhindrar att sidan laddas om
  e.preventDefault()

  // SKAPA ELEMENT
  const li = document.createElement('li')
  const span = document.createElement('span')
  const deleteBtn = document.createElement('button')

  // LÄGG TILL EN KLASS
  li.classList.add('list-item')

  // LÄGG TILL INNEHÅLL I ELEMENTEN
  span.innerText = titleInput.value
  deleteBtn.textContent = 'Ta bort'

  // BYGGA IHOP ELEMENTET
  li.appendChild(span)
  li.appendChild(deleteBtn)

  // LÄGG TILL ELEMENTET I LISTAN
  list.appendChild(li)

  // Tömmer input value
  titleInput.value = ''

})

list.addEventListener('click', e => {
  // Kollar så att det vi klickar på är av typen BUTTON
  if(e.target.nodeName === 'BUTTON') {
    e.target.parentElement.remove()
  }
})


list.addEventListener('click', e => {
  if(e.target.nodeName === 'SPAN') {
    // Lägg till en klass på föräldern som ändrar utseende på flera saker
    e.target.parentElement.classList.toggle('active')
  }
})