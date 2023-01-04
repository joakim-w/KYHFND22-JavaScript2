
const form = document.querySelector('.card form');

// OM vi vill kunna ta bort en eventListener så "måste" vi skriva funktionen utanför
// const test = (e) => {
// asdfsfasfasf
// }
// form.addEventListener('submit', test)
// form.removeEventListener('submit', test)

// const buttons = document.querySelectorAll('.item button')

// buttons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     btn.parentElement.remove()
//   })
// })

document.querySelector('#output').addEventListener('click', e => {
  if(e.target.innerText === 'delete'){
    e.target.parentElement.remove()
  }
  if(e.target.innerText === 'edit'){

  }
})

const createItemElement = (inputValue) => {

  const item = document.createElement('div')
  item.classList.add('item')

  const p = document.createElement('p')
  p.innerText = inputValue

  const button = document.createElement('button')
  button.innerText = 'delete'

  // button.addEventListener('click', () => {
  //   button.parentElement.remove()
  // })


  item.appendChild(p)
  item.appendChild(button)


  // document.querySelector('#output').appendChild(item)
  return item
}



form.addEventListener('submit', e => {
  e.preventDefault();

  const input = form.querySelector('input[type=text]');
  const inputValue = input.value;

  const item = createItemElement(inputValue);
  document.querySelector('#output').appendChild(item);

  // input.value = '';
  form.reset()

})