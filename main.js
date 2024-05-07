let menu = document.querySelector('.menu')

let popup = document.querySelector('.menuPopup')

let close = document.querySelector('.close')



menu.addEventListener("click", function(){
   popup.classList.add("popup--show");
})

close.addEventListener("click", function(){
   popup.classList.remove("popup--show");
})