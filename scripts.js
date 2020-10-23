function myFunction() {
    const x =  document.getElementById("nav");
    const burger = document.getElementById("burger");
    const burgerClose = document.getElementById("burger-close");
    if (x.style.display === "none") {
        burger.style.display = "none";
        burgerClose.style.display ="block";
        x.style.display = "block";
    } else {
        burger.style.display = "block";
        burgerClose.style.display ="none";
        x.style.display = "none";
    }
  }