function hamburgerNav(input) {
  const navMenu = document.getElementById("nav-menu-mobile");
  input.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");

  window.addEventListener("click", (e) => {
    if (e.target != input && e.target != navMenu) {
      input.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
      navMenu.classList.remove("flex");
    }
  });
}

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
