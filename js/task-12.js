const navEl = document.querySelector('.site-nav')
console.log('navEl: ', navEl);
console.log("Доступ до першого елемента",navEl.firstElementChild);
console.log("Доступ до останього елемента",navEl.lastElementChild);
console.log("через children[1] " , navEl.children[1]);

const imageEl = document.createElement("img")
const nameEl = document.createElement("h2").textContent='Мій лев'

imageEl.src = '../img/lion-g0ab1af36f_1280.png'
imageEl.alt = 'Lion'
imageEl.width=500
imageEl.height=500
imageEl.style.display="block"
 
console.log('imageEl : ', imageEl );

const markup = document.querySelector(".tumb-img")
markup.append(nameEl , imageEl );

const colorOption = [
   {label:"red" , color:"red",},
   {label:"green" , color:"green",},
   {label:"black" , color:"black",}
]
const colorEl = document.querySelector(".js-color")
const makeColor = options =>{
   return options.map(option=>{
      const buttonEl = document.createElement("button")
      buttonEl.type='button'
      buttonEl.classList.add("color")
      buttonEl.textContent = option.label
      buttonEl.style.color=option.color
      return buttonEl

   })
}

const element = makeColor(colorOption)
colorEl.append(...element)