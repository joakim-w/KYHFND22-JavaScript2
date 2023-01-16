// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/2' // Parameter
// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?userId=2' // en query
// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?userId=2&_page=2&_limit=3' // flera querys
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'


const output = document.querySelector('#output');

const getPosts = async () => {
  const res = await fetch(BASE_URL)
  const posts = await res.json()

  console.log(posts)

  // Loopar igenom Post som kommer från databasen
  posts.forEach(post => {

    //Lägg till ett nytt element i output
    output.appendChild(createCardElement(post))
  })
}


getPosts()

// Skapa ett card element med information från post > från databsen
const createCardElement = (post) => {
  const card = document.createElement('a')
  card.className = 'card bg-dark p-2 mb-3 text-white text-decoration-none'

  const title = document.createElement('h2')
  title.innerText = post.title
  const snippet = document.createElement('p')
  snippet.innerText = post.body.slice(0, 35) + '....'

  card.appendChild(title)
  card.appendChild(snippet)

  return card
}

