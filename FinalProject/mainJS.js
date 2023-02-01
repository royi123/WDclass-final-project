document.addEventListener("DOMContentLoaded", function() {
   // script 1
   const modal = document.querySelector(".modal");
   modal.showModal();
 
   // script 2
   const button = document.querySelector("#newsletterOpen");
   button.addEventListener("click", function() {
     window.open("https://news-letter-signup.onrender.com", "_blank");
     modal.close;
     setTimeout(function() {
      modal.close();
   }, 500);
   });
 
   // script 3
   const button2 = document.querySelector("#close-button")
   button2.addEventListener("click", function(){
    modal.close();
    //  modal.style.display = "none"
   })
 });


function healthCheck(){
  inputGroup1Check()
  inputGroup2Check()
  inputGroup3Check()

}