const BASE_URL = "https://jsonplaceholder.typicode.com/users/"
const users = []

const userList = document.querySelector('#user-list')

// const getUsers = () => {
//   fetch(BASE_URL)
//   .then(res => res.json())
//   .then(data => {
    
//     console.log(data)
//     data.forEach(user => {
//       users.push(user)
//     });
    
//     listUsers()
    
//   })
// }

const getUsers = async () => {
  const res = await fetch(BASE_URL)
  const data = await res.json()

  console.log(data)
  data.forEach(user => {
    users.push(user)
  })
  listUsers()
}


getUsers()
// console.log(users)

const listUsers = () => {
  userList.innerHTML = ''

  users.forEach(user => {
    
    const userElement = createUserElement(user)
    userList.appendChild(userElement)
  })
}


const createUserElement = (userData) => {
  let user = document.createElement('div')
  user.id = userData.id
  user.classList.add('user')
  user.classList.add('user-dark')

  let name = document.createElement('p')
  name.classList.add('user_name')
  name.innerText = userData.name
  
  let company = document.createElement('p')
  company.classList.add('user_company')
  company.innerText = userData.company.name

  let email = document.createElement('p')
  email.classList.add('user_email')
  email.innerText = userData.email

  user.appendChild(name)
  user.appendChild(company)
  user.appendChild(email)

  return user
}

const removeUser = e => {
  if(!e.target.classList.contains('user')){
    console.log('klickade inte på en div')
    return
  }

  fetch(BASE_URL + e.target.id, {
    method: 'DELETE'
  })
    .then(res => {
      console.log(res)
      if(res.ok) {
        e.target.remove()
        const index = users.findIndex(user => user.id == e.target.id)
        users.splice(index, 1)
        console.log(users)
      }
    })
}

userList.addEventListener('click', removeUser)