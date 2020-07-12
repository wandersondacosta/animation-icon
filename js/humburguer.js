let div = document.querySelector(".menu-icon");
let icons = document.querySelector(".hamburguer");

div.addEventListener("click", (event) => {
  if (!icons.classList.contains("active")) {
    icons.classList.add("active");
  } else {
    icons.classList.remove("active");
  }
});
