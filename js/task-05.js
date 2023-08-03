const refs ={
   inputEl:document.querySelector("#name-input"),
   textEl:document.querySelector("#name-output"),
}

refs.inputEl.addEventListener("input" , onInputChange) // при воді інпута викличемо функцію

function  onInputChange() {
   refs.inputEl.value.trim() === '' ? (refs.textEl.textContent="Anonymous"):
   (refs.textEl.textContent=refs.inputEl.value)
}