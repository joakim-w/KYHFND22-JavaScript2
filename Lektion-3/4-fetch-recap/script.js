const output = document.querySelector('#output')
const textOutput = document.querySelector('#text-output')
const btn = document.querySelector('#btn')

const getPosts = () => {
  fetch('posts.json')
    .then(ressponse => ressponse.json())
    .then(data => {

      output.innerHTML = ''

      // console.log(data)
      data.forEach(post => {
        output.innerHTML += `
        <div class="card">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `
      })

    })
}

getPosts()


const getText = async () => {
  const response = await fetch('text.txt')
  const data = await response.text()

  textOutput.innerHTML = `<h2>${data}</h2>`
}

btn.addEventListener('click', getText)