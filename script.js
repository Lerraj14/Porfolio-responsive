const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
    console.log(e.name);
  e.name = e.name === "menu-outline" ? "close" : "menu-outline";
  console.log(e.name);
    navLinks.classList.toggle("top-[-400%]");
    navLinks.classList.toggle("top-full");
}
