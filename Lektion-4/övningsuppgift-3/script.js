const BASE_URL = "https://jsonplaceholder.typicode.com/users"
const users = []

const userList = document.querySelector('#user-list')

const getUsers = () => {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {

      data.forEach(user => {
        users.push(user)
      });

      listUsers()
      
    })
}


getUsers()
// console.log(users)

const listUsers = () => {
  users.forEach(user => {
    userList.appendChild()
  })
}


const createUserElement = () => {
  let user = document.createElement('div')
  user.classList.add('user')
  user.classList.add('user-dark')

  let name = document.createElement('p')
  name.classList.add('user_name')
  
  let company = document.createElement('p')
  company.classList.add('user_company')

  let email = document.createElement('p')
  email.classList.add('user_email')

  

}