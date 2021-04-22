const hamburgerMenu = document.getElementById("hamburger-menu");
const navigationList = document.getElementById("nav-list");

function toggleMenu() {
    navigationList.classList.toggle("show");
}

hamburgerMenu.addEventListener("click", toggleMenu);