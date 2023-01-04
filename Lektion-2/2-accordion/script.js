const questions = document.querySelectorAll('.question')
const wrapper = document.querySelector('.wrapper')


questions.forEach(question => {
  question.addEventListener('click', e => {
    question.parentElement.classList.toggle('hidden')
  })
})


wrapper.addEventListener('click', e => {

  if(e.target == wrapper) {
    questions.forEach(question => {
      question.parentElement.classList.add('hidden')
    })
  }
})