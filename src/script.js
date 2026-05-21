

function redireccion(){
    let correo=document.getElementById("correo").value;
    let pass=document.getElementById("clave").value;
 if(correo=="mejiaaquinobrayan@gmail.com" && pass=="73329919")
   
{
window.location.href="Amira.html"
}
 else
 {
    alert("Datos Incorrectos");
 }
 
 }
 const container = document.querySelector(".container");
 const btnSignIn = document.getElementById("btn-sign-in");
 const btnSignUp = document.getElementById("btn-sign-up");
 const visible= document.getElementById("visible");



 btnSignIn.addEventListener("click",()=>{
 container.classList.remove("toggle");
 })
 btnSignUp.addEventListener("click",()=>{
 container.classList.add("toggle");
 })

 document.addEventListener("click", e =>{
   if(pass.type=== "password"){
      pass.type="text";
    }else{
      pass.type="password"
   }
})
(function registerServiceWorker() {
   if (!('serviceWorker' in navigator)) {
       return;
   }
   const disableSW = 'false' === 'true';
   const swPath = '/serviceWorkerMerged.js';
   if (disableSW) {
       navigator.serviceWorker.getRegistrations().then((registrations) => {
           if (window.location) {
               registrations.forEach((registration) => {
                   const sameScope = (window.location.origin + window.location.pathname).includes(registration.scope);
                   const sameSW = registration.active &&
                       registration.active.scriptURL.includes(swPath);
                   if (sameScope && sameSW) {
                       registration.unregister();
                   }
               });
           }
       });
   }
   else {
       navigator.serviceWorker
           .register(swPath, {
           scope: '/',
       })
           .catch(function error(err) {
           // eslint-disable-next-line no-console
           console.log('ServiceWorker registration failed: ', err);
       });
   }
})()