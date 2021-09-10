let hamburger = document.getElementById("hamburger");
let container = document.getElementById("container");
let link = document.getElementById("link");
let cta = document.getElementById("cta");

hamburger.addEventListener("click", () => {
  container.classList.toggle("mobileNavLinkContainer--active");
  cta.classList.toggle("workCard--fix");
});

link.addEventListener("click", () => {
  container.classList.remove("mobileNavLinkContainer--active");
  cta.classList.remove("workCard--fix");
});

container.addEventListener("click", () => {
  container.classList.remove("mobileNavLinkContainer--active");
  hamburger.classList.remove("opened");
  cta.classList.remove("workCard--fix");
});