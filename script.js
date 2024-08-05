//initial data
let currentColor = "black";
let canDraw = false;

let screen = document.querySelector("#tela");
let ctx = screen.getContext("2d");

//events
document.querySelectorAll(".colorArea .color").forEach((item) => {
  item.addEventListener("click", colorClickEvent);
});

screen.addEventListener("mmousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent);

//functions
function colorClickEvent(e) {
  let color = e.target.getAttribute("data-color");
  currentColor = color;

  document.querySelectorAll(".color.active").classList.remove("active");
  e.target.classList.add("active");
}

function mouseDownEvent() {
  canDraw = true;
}

function mouseMoveEvent() {}

function mouseUpEvent() {
  canDraw = false;
}
