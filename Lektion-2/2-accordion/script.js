const questions = document.querySelectorAll('.question')

questions.forEach(question => {
  question.addEventListener('click', e => {
    question.parentElement.classList.toggle('hidden')
  })
})