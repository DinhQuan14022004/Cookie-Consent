const acceptCoookies= document.querySelector(".popup__btn");
const closePopup = document.querySelector(".popup__close");
const popup= document.querySelector(".popup");

closePopup.addEventListener("click",() =>{
    popup.classList.remove("active");
})
acceptCoookies.addEventListener("click",() =>{
popup.classList.remove("active");
localStorage.setItem("acceptCoookie","true");
})
window.addEventListener("load",() =>{
    if(localStorage.getItem("acceptCoookie")){
        popup.classList.remove("active")
    }
})
