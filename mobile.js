let hamburger = document.getElementById("hamburger");
let container = document.getElementById("container");
let link = document.getElementById("link");

hamburger.addEventListener("click", () => {
  container.classList.toggle("mobileNavLinkContainer--active");
});

link.addEventListener("click", () => {
  container.classList.remove("mobileNavLinkContainer--active");
});

container.addEventListener("click", () => {
  container.classList.remove("mobileNavLinkContainer--active");
});