// console.log(window.location.search)

//Hätar alla querys från url
// const querys = new URLSearchParams(window.location.search)
//Plockar ut id från querys
// const id = params.get('id')

//Kombination av dom över
const id = new URLSearchParams(window.location.search).get('id')

console.log(id)

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/'


const output = document.querySelector('#output');

const getPost = async () => {
  const res = await fetch(BASE_URL + id)
  const post = await res.json()

  console.log(post)


    //Lägg till ett nytt element i output
    output.appendChild(createCardElement(post))
}


getPost()

// Skapa ett card element med information från post > från databsen
const createCardElement = (post) => {
  const card = document.createElement('div')
  card.className = 'card bg-secondary p-2 mb-3 text-white'

  const title = document.createElement('h2')
  title.innerText = post.title
  const snippet = document.createElement('p')
  snippet.innerText = post.body

  card.appendChild(title)
  card.appendChild(snippet)

  return card
}