const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const btn = document.querySelector('#btn');
// const div3 = document.querySelector('#div3');
// const div4 = document.querySelector('#div4');
// const btn2 = document.querySelector('#btn2');




// TARGET = Det som man klickade på
// CURRENT TARGET = Där eventListenern ligger och körs

// BUBBLING

// btn.addEventListener('click', (e) => {
//   // e.stopPropagation()
//   // console.log('btn target: ', e.target)
//   // console.log('btn currentTarget: ', e.currentTarget)
// });

// div2.addEventListener('click', (e) => {
//   // console.log('div2 target: ', e.target)
//   // console.log('div2 currentTarget: ', e.currentTarget)
//   // e.stopPropagation()
// });

// div1.addEventListener('click', (e) => {
//   // console.log('div1', e.target)
//   // console.log('div1', e.currentTarget)
//   // div1.style.display = 'none'
// }, false);

// document.body.addEventListener('click', (e) => {
//   console.log('body target: ', e.target)
//   console.log('body current target:', e.currentTarget)

//   if(e.target === btn) {
//     // console.log('du klickade på knappen')
//   }
// }, false);



// CAPTURE
// document.body.addEventListener('click', (e) => {
//   console.log('body')
// }, true);

// div1.addEventListener('click', (e) => {
//   console.log('div1')
// }, true);

// div2.addEventListener('click', (e) => {
//   // e.stopPropagation()
//   console.log('div2')
// }, { capture: true, once: true });

// btn.addEventListener('click', (e) => {console.log('btn')}, true);








// div3.addEventListener('click', (e) => {
//   console.log('div3')
// }, false);

// div4.addEventListener('click', (e) => {
//   console.log('div4')
//   // e.stopPropagation()
// });

// btn2.addEventListener('click', (e) => {
//   e.stopPropagation()
//   console.log('btn2')
// });



const test = (e) => {
  console.log(e.currentTarget)
}


btn.addEventListener('click', test) // currentTarget = button
div1.addEventListener('click', test) // CurrentTarget = div1
div2.addEventListener('click', test) // currentTarget = div2