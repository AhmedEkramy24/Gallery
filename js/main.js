// App Vars

let imgs = Array.from(document.querySelectorAll(".row img"));
let App = document.querySelector(".app");
let layer = document.querySelector("#layer");
let layerImg = document.querySelector("#layer img");
let closeI = document.querySelector("#close");
let left = document.querySelector("#left");
let right = document.querySelector("#right");

// flags

let index;

// show layer on click img

App.addEventListener("click", function (e) {
  let src = e.target.getAttribute("src");
  index = imgs.indexOf(e.target);
  if (e.target.hasAttribute("src")) {
    layer.classList.replace("d-none", "d-flex");
    layerImg.setAttribute("src", src);
  }
});

// close layer

closeI.addEventListener("click", function (e) {
  layer.classList.replace("d-flex", "d-none");
});

layer.addEventListener("click", function (e) {
  layer.classList.replace("d-flex", "d-none");
});

document.addEventListener("keyup", function (e) {});
// slide right and left with click

right.addEventListener("click", function (e) {
  index++;
  if (index == imgs.length - 1) index = 0;
  let newsrc = imgs[index].getAttribute("src");
  layerImg.setAttribute("src", newsrc);
  e.stopPropagation();
});

left.addEventListener("click", function (e) {
  index--;
  if (index < 0) index = imgs.length - 1;
  let newsrc = imgs[index].getAttribute("src");
  layerImg.setAttribute("src", newsrc);
  e.stopPropagation();
});

// keyboard Events

document.addEventListener("keyup", function (e) {
  if (layer.classList.contains("d-flex")) {
    if (e.key == "ArrowLeft") {
      index--;
      if (index < 0) index = imgs.length - 1;
      let newsrc = imgs[index].getAttribute("src");
      layerImg.setAttribute("src", newsrc);
    }
    if (e.key == "ArrowRight") {
      index++;
      if (index == imgs.length - 1) index = 0;
      let newsrc = imgs[index].getAttribute("src");
      layerImg.setAttribute("src", newsrc);
    }
    if (e.key == "Escape" || e.key == " ") {
      layer.classList.replace("d-flex", "d-none");
    }
  }
});
