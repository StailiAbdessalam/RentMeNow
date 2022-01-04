let nav_bar = document.querySelector(".list-nav-bar"),
    closeMenu = document.querySelector(".closeMenu"),
    openMenu = document.querySelector(".openMenu");

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
//cette partie 

let sendMessage = (e) => {
    let names = document.querySelector('#ha').value + document.querySelector('#ho').value,
        gmail = document.querySelector("#mail").value;
    Swal.fire(
        names,
        gmail,
        'success'
    )
    document.querySelector("#mail").value = "";
    document.querySelector('#ha').value="";
    document.querySelector('#ho').value = "";
}

function mag(a) {
    let abdo = document.querySelectorAll(".amine");
    abdo.forEach(e=>{
        e.classList.remove("amine");
    });
    a.classList.toggle("amine");

}





