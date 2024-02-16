function toggleMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-nav-link-container")
  const closeHamburger = document.querySelector('.close-hamburger-menu')

  hamburgerMenu.classList.toggle("hamburger-nav-link-container-open")
  closeHamburger.classList.toggle("close-hamburger-menu-open")
}