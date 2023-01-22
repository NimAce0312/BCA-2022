const menuToggler = document.querySelector('.menu-toggle');
const menuContents = document.querySelector('.menu-contents');
const galleryMenu = document.querySelector('.kebab');
const galleryCategory = document.querySelector('.category-container');

menuToggler.addEventListener("click",function(){
    menuToggler.classList.toggle('active');
    menuContents.classList.toggle('active');
});

galleryMenu.addEventListener("click",function(){
    galleryCategory.classList.toggle('open');
});