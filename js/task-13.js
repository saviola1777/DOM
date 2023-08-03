const product = {
name:"olek",
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
price:"2002",
}
const divEl = document.querySelector(".tumb-img")
const productEl= document.createElement("section")
productEl.classList.add("section-product")

const nameEl= document.createElement("h1")
nameEl.textContent=product.name
nameEl.classList.add("name")

const textEl= document.createElement("p")
textEl.textContent=product.description
textEl.classList.add("pass")


divEl.append(nameEl,textEl)

//!Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка. Значення, що повертається, - це завжди валідний HTML-код.

const article = document.querySelector(".article");
console.log(' article:  ',  article.innerHTML); // читання елемента з тегами 


const title = document.querySelector(".article .title");
title.innerHTML = 'New and <span class="accent">improved</span> title'; // зміна заголовка

const text = document.querySelector(".article .text"); 
console.log(text.innerHTML);

//!Метод insertAdjacentHTML()
//Сучасний метод для додавання рядка з HTML-тегами перед, після або всередину елемента.

const list = document.querySelector(".list"); // доступ до елемента

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join(""); // мепаємо масив створюємо розмітку три лішки в них 

list.insertAdjacentHTML("beforeend", markup); // після всіх елементів вставляємо розмітку три нових лішки
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");// перед розміткою вставляємо h2

