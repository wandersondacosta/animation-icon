const search = document.querySelector(".box-search");
const lupa = document.querySelector(".lupa");

search.addEventListener("click", (event) => {
  if (lupa.classList.contains("active")) {
    lupa.classList.remove("active");
  } else {
    lupa.classList.add("active");
  }
});
