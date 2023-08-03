const inputEl = document.querySelector("#validation-input")

function onBlur  () {
   if (inputEl.value.trim().length === Number(inputEl.dataset.mylength)) {
      inputEl.classList.add("valid")
      inputEl.classList.remove("invalid")
   }
   else {
      inputEl.classList.add("invalid")
      inputEl.classList.remove("valid")
   }
}
document.addEventListener("keydown", event => {
   console.log("Keydown: ", event);
 });
 
 document.addEventListener("keyup", event => {
   console.log("Keyup: ", event);
 });

inputEl.addEventListener("blur", onBlur)

// в інпуті е атрибут data-mylength , якщо початок через data то значення його ми можемо взяти через dataset
// Number(inputEl.dataset.mylength) приводимо до номера берем значення атрибута 
