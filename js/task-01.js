const categoriesList = document.querySelector("#categories")
console.log(`Number of categories'${categoriesList.children.length}`);
const all = [...categoriesList.children].map(categories =>{
   console.log(`Categories : ${categories.firstElementChild.textContent}`);
   console.log(`Elements : ${categories.lastElementChild.children.length}`)
})
console.log(document.querySelector(".item").parentNode);
console.log(categoriesList.firstElementChild);

