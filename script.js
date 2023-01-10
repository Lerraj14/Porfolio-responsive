const navLinks = document.querySelector(".nav-links");
const navButton = document.querySelector(".toggle-menu");
function onToggleMenu(e) {
    // console.log(e.name);
  e.name = e.name === "menu-outline"? "close-outline" : "menu-outline";
  // console.log(e.name);
    navLinks.classList.toggle("top-[-400%]");
    navLinks.classList.toggle("top-full");
}
function onToggleNavMenu() {
  console.log(navButton.name);
  navButton.name=navButton.name==='close-outline'?"menu-outline":"close-outline";
  console.log(navButton.name);
  navLinks.classList.toggle("top-[-400%]");
  navLinks.classList.toggle("top-full");
}

