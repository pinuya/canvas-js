let currentColor = "black";

document.querySelectorAll(".colorArea .color").forEach((item) => {
  item.addEventListener("click", colorClickEvent);
});

function colorClickEvent(e) {
  let color = e.target.getAttribute("data-color");
  currentColor = color;

  document.querySelectorAll(".color.active").classList.remove("active");
  e.target.classList.add("active");
}
