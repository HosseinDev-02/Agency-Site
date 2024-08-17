let navBtn = document.querySelector(".nav-toggle")
let menu = document.querySelector(".menu")
let cover = document.querySelector(".cover")

navBtn.addEventListener("click", function(){
    menu.classList.toggle("mobile-menu--active")
    cover.classList.toggle("cover--active")
    navBtn.classList.toggle("nav-toggle--active")
})