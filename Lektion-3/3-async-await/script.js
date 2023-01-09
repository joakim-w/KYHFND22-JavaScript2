

const getData = async () => {
  try {
    const res = await fetch('todoss.json')
  
    if(res.status !== 200) {
      throw new Error('du det där gick inge bra va')
    }

    const data = await res.json()
  
    console.log(data)
    
  }
  catch(err) {
    console.log(err.message)
  }
}

// getData()

const fetchData = () => {
  fetch('todos.json')
  .then(response => {
    
    return response.json()
  })
  .then(data => {
    
    
    
  })
  .catch(err => console.error(err.message))
}
fetchData()


const test = async () => {
  const res = await fetch('todos.json')
  const data = await res.json()
  
  //gör nått kul med data
  data.forEach(todo => {
    document.body.innerHTML += `<p>${todo.title}</p>` 
  })

    
  }
  
test()