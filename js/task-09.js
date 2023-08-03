

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs ={
  bodyEl: document.querySelector('body'),
  colorEl: document.querySelector('.color'),
  buttonEl:document.querySelector('.change-color')
}


const changeColor =(event)=>{
  const randomColor = getRandomHexColor()
  refs.bodyEl.style.background = randomColor
  refs.colorEl.textContent=randomColor

}
refs.buttonEl.addEventListener('click' , changeColor)