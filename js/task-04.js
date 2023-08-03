const refs = {
   buttonDecrement:document.querySelector('button[data-action="decrement"]') ,
   buttonIncrement:document.querySelector('button[data-action="increment"]') ,
   valueEl:document.querySelector('#value') ,
}
 const counter ={

   value:0 ,
   decrement(){
      this.value-=1
   },
   increment(){
      this.value+=1
   }
 }

refs.buttonDecrement.addEventListener('click' ,()=>{
 counter.decrement()
 refs.valueEl.textContent=counter.value
})

refs.buttonIncrement.addEventListener('click' ,()=>{
   counter.increment()
   refs.valueEl.textContent=counter.value
  })

console.log('counter: ', counter);