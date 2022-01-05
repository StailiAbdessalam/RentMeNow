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
let prix ;
let resultaPrix;
let carburant = document.querySelector("#choix");
let tyPrix;
function mag(a) {
  let abdo = document.querySelectorAll(".amine");
  abdo.forEach((e) => {
    e.classList.remove("amine");
  });
  a.classList.toggle("amine");

  let typee = a.alt;
  let hybride = document.getElementById("hybride");
  let electrique = document.getElementById("electrique");
  let diesel = document.getElementById("diesel");
  let essence = document.getElementById("essence");
  let au = document.getElementById("au");
  let ma = document.getElementById("manu");
  switch (typee) {
    case "1":
      tyPrix = 250 * 1.19;
      essence.innerHTML = "essence";
      hybride.innerHTML = "";
      diesel.innerHTML = "";
      electrique.innerHTML = "";
      au.innerHTML = "automatique";
      ma.innerHTML = "";
      break;
    case "2":
      tyPrix = 12;
      essence.innerHTML = "essence";
      hybride.innerHTML = "hybride";
      diesel.innerHTML = "diesel";
      electrique.innerHTML = "electrique";
      au.innerHTML = " ";
      ma.innerHTML = "manuel";

      break;
    case "3":
      tyPrix = 10;
      essence.innerHTML = "essence";
      hybride.innerHTML = "";
      diesel.innerHTML = "";
      electrique.innerHTML = "electrique";
      au.innerHTML = "";
      ma.innerHTML = "manuel";
      break;
    case "4":
      tyPrix = 900;
      essence.innerHTML = "essence";
      hybride.innerHTML = "";
      diesel.innerHTML = "diesel";
      electrique.innerHTML = "";
      au.innerHTML = "";
      ma.innerHTML = "manuel";
      break;
    case "5":
      tyPrix = 16;
      essence.innerHTML = "";
      hybride.innerHTML = "";
      diesel.innerHTML = "diesel";
      electrique.innerHTML = "";
      au.innerHTML = "";
      ma.innerHTML = "manuel";
      break;
    case "6":
      tyPrix = 14;
      essence.innerHTML = "essence";
      hybride.innerHTML = "hybride";
      diesel.innerHTML = "diesel";
      electrique.innerHTML = "";
      au.innerHTML = " ";
      ma.innerHTML = "manuel";
      break;
    case "7":
      tyPrix = 20 * 1.19;
      essence.innerHTML = "essence";
      hybride.innerHTML = "hybride";
      diesel.innerHTML = "diesel";
      electrique.innerHTML = "";
      au.innerHTML = " automatique";
      ma.innerHTML = "";
      break;
    default:
      break;
  }
}
carburant.addEventListener("change", () => {
  console.log(carburant.value);
  switch (carburant.value) {
    case "essence":
      prix = 1.14;
      break;
    case "hybride":
      prix = 1.09;
      break;
    case "diesel":
      prix = 1.21;
      break;
    case "electrique":
      prix = 1.05;
      break;
    default:
      break;
  }
});
let brek = document.getElementById("brek");
brek.addEventListener("click", () => {
    let jour = document.querySelector(".choi").value;

  resultaPrix = tyPrix * prix * jour;
  alert(resultaPrix);
 
   
    






});
