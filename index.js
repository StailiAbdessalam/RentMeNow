let nav_bar = document.querySelector(".list-nav-bar"),
  closeMenu = document.querySelector(".closeMenu"),
  openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  nav_bar.style.display = "flex";
  nav_bar.style.top = "0";
}
function close() {
  nav_bar.style.top = "-100%";
}
// cette partie en hot pour change type de nave_bare .
//cette partie

let sendMessage = (e) => {
  let names =
      document.querySelector("#ha").value + document.querySelector("#ho").value,
    gmail = document.querySelector("#mail").value;
  Swal.fire(names, gmail, "success");
  document.querySelector("#mail").value = "";
  document.querySelector("#ha").value = "";
  document.querySelector("#ho").value = "";
  document.querySelector("#message").value = "";
};
function mag(a) {
  let abdo = document.querySelectorAll(".amine");
  abdo.forEach((e) => {
    e.classList.remove("amine");
  });
  a.classList.toggle("amine");

  let typee = a.alt;
  let prix;
  let hybride = document.getElementById("hybride");
  let electrique = document.getElementById("electrique");
  let diesel = document.getElementById("diesel");
  let essence = document.getElementById("essence");
  switch (typee) {
    case "1":
      prix = 250;
      essence.innerHTML = "essence";
      hybride.innerHTML = "";
      diesel.innerHTML = "";
      electrique.innerHTML = "";
      break;
    case "2":
      prix = 12;
      essence.innerHTML = "essence";
      hybride.innerHTML = "hybride";
      diesel.innerHTML = "diesel";
      electrique.innerHTML = "electrique";
      break;
    case "3":
      prix = 10;
      essence.innerHTML = "essence";
      hybride.innerHTML = "";
      diesel.innerHTML = "";
      electrique.innerHTML = "electrique";
      break;
    case "4":
      prix = 900;
      essence.innerHTML = "essence";
      hybride.innerHTML = "";
      diesel.innerHTML = "diesel";
      electrique.innerHTML = "";
      break;
    case "5":
      prix = 16;
      essence.innerHTML = "";
      hybride.innerHTML = "";
      diesel.innerHTML = "diesel";
      electrique.innerHTML = "";
      break;
    case "6":
      prix = 14;
      essence.innerHTML = "essence";
      hybride.innerHTML = "hybride";
      diesel.innerHTML = "diesel";
      electrique.innerHTML = "";
      break;
    case "7":
      prix = 20;
      essence.innerHTML = "essence";
      hybride.innerHTML = "hybride";
      diesel.innerHTML = "diesel";
      electrique.innerHTML = "";
      break;
    default:
      break;
  }
}
