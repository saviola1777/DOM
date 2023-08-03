const refs = {
   openModalBtn: document.querySelector('[data-action="open-modal"]'),
   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
   backdrop: document.querySelector('.js-backdrop')
}

refs.openModalBtn.addEventListener('click', onClickOpenModal)
refs.closeModalBtn.addEventListener('click', onCloseModal)


function onClickOpenModal() {
   document.body.addEventListener("keydown", closeOnClick)
   document.body.classList.add('show-modal')
}

function onCloseModal() {
   document.body.classList.remove('show-modal')
}

function closeOnClick(event) {

   if (event.key === 'Escape')
      document.body.classList.remove('show-modal')
      console.log(event.key);
     
      
}