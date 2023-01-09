// GET POST PUT PATCH DELETE

/*
GET - hämtar data, okrypterat
POST - skriva data, krypterad i en body
PUT - uppdatera HELA ett objekt, skickas i en body
PATCH - uppdatera delar av ett objekt, skickas i en body
DELETE - tar bort ett objekt
*/

// const getRequest = (endpoint, callback) => {
//   const http = new XMLHttpRequest();

//   http.addEventListener('readystatechange', () => {
//     // console.log(http.readyState)
//     // console.log(http.status)
//     if(http.status === 200 && http.readyState === 4) {
//       const data = JSON.parse(http.responseText)
//       // console.log(data)

//       callback(undefined, data)
//     } else if(http.readyState === 4) {
//       // console.log('could not get the data')
//       callback('could not get the data', undefined)
//     }
//   })



//   http.open('GET', endpoint)
//   http.send()
// }


// getRequest('user.json', (err, data) => {
//   if(err) {
//     console.log(err)
//     return
//   }

//   console.log(data)

//   getRequest('todos.json', (err, data) => {
//     if(err) {
//       console.log(err)
//       return
//     }
  
//     console.log(data)
  
//   })
// })





// PROMISES

const getRequest = (endpoint) => {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();

    http.addEventListener('readystatechange', () => {
      // console.log(http.readyState)
      // console.log(http.status)
      if(http.status === 200 && http.readyState === 4) {
        const data = JSON.parse(http.responseText)
        // console.log(data)
        resolve(data)
      } else if(http.readyState === 4) {
        // console.log('could not get the data')
        reject('could not get the data')
      }
    })
  
  
  
    http.open('GET', endpoint)
    http.send()
  })
}


getRequest('user.json')
  .then(data => {
    console.log(data)
    return getRequest('todos.json')
  })
  .then(data2 => {
    console.log(data2)
  })
  .catch(err => {
    console.log(err)
  })

  let user = {
    name: 'lakjs'
  }

  fetch('user.json')
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(data => {
      document.body.innerHTML = `<h1>Hej ${data.name}</h1>`
      user = data
    })
    .catch(err => {
      console.log(err.message)
    })


    document.body.innerHTML = `<h1>Hej ${user.name}</h1>`



    fetch('todos.json')
      .then(res => res.json())
      .then(data => {

        // har tillgång till data (todos)
        


      })
      // Har INTE tillgång till todos
