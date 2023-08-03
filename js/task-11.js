const imageEl= document.querySelector(".herro__image") // доступ до першого елементу з таким класом

imageEl.src = "../img/lion-g0ab1af36f_1280.png"  
const herroTitle = document.querySelector('.herro__title')
console.log('herroTitle: ', herroTitle);
herroTitle.textContent="I am"


console.log('imageEl: ', imageEl);

const action = document.querySelector(".js-action")
action.classList.add('action') // додає клас 
action.classList.remove('js-action') // видаляє клас
console.log('action: ', action);

//! element.querySelector(selector);

// ?Використовується, якщо необхідно знайти тільки один, найчастіше унікальний елемент.
// ?Повертає перший знайдений елемент всередині element, що відповідає CSS-селектору selector.
// ?Якщо нічого не знайдено, поверне null.

// !element.querySelectorAll(selector);

// ?Використовується, якщо необхідно знайти колекцію елементів, тобто отримати масив посилань на елементи з однаковим селектором. Наприклад, всі елементи списку з класом menu-item.

const magicBtn = document.querySelector(".button")

magicBtn.addEventListener("click",()=>{ // вішаємо слухача при кліку виклик колбек функції  
const inputEl = document.querySelector(".js-input") 
console.log(inputEl.value);
})


const linkEl = document.querySelector('.site-nav__item[href="./task-02.html"]') // шукаю силку в якого є аклас .site-nav__item і цей клас має атрибут [href="./task-02.html"]
console.log('linkEl: ', linkEl);