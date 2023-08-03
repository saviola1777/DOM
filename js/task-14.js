//Кожна подія - це об'єкт, який містить інформацію про деталі події та автоматично передається першим аргументом в обробник події. Всі події відбуваються з базового класу Event.

const button = document.querySelector(".btn");

const handleClick = (event) => {
   event.preventDefault();
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClick);


//Параметр event - це і є об'єкт події, який автоматично передається першим аргументом під час виклику колбек-функції. Ми можемо називати його як завгодно, але, як правило, його оголошують як e, evt або event.

//Деякі властивості об'єкта події:

//event.type - тип події.
//event.currentTarget - елемент, на якому виконується обробник події.

const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.currentTarget.elements.username.value); //  за допомогою  містить всю інформацію про подію в нього є свойство currentTarget це те на якому саме виконується подія і elements має значення його
  const { elements: { username, password }} = event.currentTarget;
  console.log(` Значеня email:${username.value}`, password.value);
});