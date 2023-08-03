const refs = {
   formEl:document.querySelector(".login-form") ,
   // emailEl:document.querySelector('input[name="email"]') ,
}

 const handleSubmit =(event)=>{
   event.preventDefault();
   const {elements: { email, password }}  = event.currentTarget;
   // console.log(event.currentTarget.elements);
   if(email.value.trim()===''||password.value.trim()===''){
      return alert('Заповніть всі поля')
   }
   const userData ={
      emailValue:email.value,
      passwordValue:password.value,
   }
   console.log(`email : ${userData.emailValue}`, `password : ${userData.passwordValue}`);
   event.currentTarget.reset();
 }
refs.formEl.addEventListener("submit" , handleSubmit)
