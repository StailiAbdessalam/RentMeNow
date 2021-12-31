const nav_bar = document.querySelector(".list-nav-bar");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
function show(){
    nav_bar.style.display='flex';
    nav_bar.style.top='0';
}
function close(){
    nav_bar.style.top='-100%';
}
// cette partie en hot pour change type de nave_bare .



