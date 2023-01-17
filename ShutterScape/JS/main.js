const menuToggler = document.querySelector('.menu-toggle');
const menuContents = document.querySelector('.menu-contents');

menuToggler.addEventListener("click",function(){
    menuToggler.classList.toggle('active');
    menuContents.classList.toggle('active');
});