const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elementUl = document.querySelector('#ingredients');
const add = ingredients.map(ingredient=>{
const liElement = document.createElement("li") 
liElement.textContent=ingredient
liElement.classList.add("item")
elementUl.append(liElement)
})  
console.log(elementUl)