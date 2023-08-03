const refs = {
   textEl:document.querySelector('#text'),
   inputEl: document.querySelector('#font-size-control'),
 }

 const onChangeInput =(event) =>{
refs.textEl.style.fontSize=`${event.currentTarget.value}px`
 }

 refs.inputEl.addEventListener("input" , onChangeInput)