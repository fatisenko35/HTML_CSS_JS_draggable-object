//öncelikle seçilen resimlerin background olarak ayarlanması işlemini gerçekleştiriyorum.

const images = document.querySelectorAll(".img");
const mydiv = document.querySelector(".mydiv");

// for (let i = 0; i < images.length; i++) {
//   images[i].addEventListener("click", (e) => {
//     console.log(e.target.src);
//     mydiv.style.backgroundImage = `url(${images[i].src})`;
//   });
// }

// input değerlerini "Your Text" görünmesi için kod bloğu aşağıdadır.

const inputtext = document.getElementById("inputtext");
const favcolor = document.getElementById("favcolor");
let mydivText = document.querySelector(".mydiv-div");

window.addEventListener("load", (event) => {
  inputtext.addEventListener("keyup", (e) => {
    mydivText.innerText = e.target.value;
  });
  favcolor.addEventListener("mouseenter", (e) => {
    mydivText.style.color = e.target.value;
  });
});

/////// Map ile mouseover tanımlama işlemi
const mapAttribute = document.querySelector("#map");
console.log(mapAttribute);
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", () => {
    console.log(images[i].src);
    mapAttribute.src = images[i].src;
  });
}

/////////////Draggable eventlerinin tanımlandığı kod bloğu aşağıdadır.

dragFonksiyon(document.querySelector(".mydiv-div"));

function dragFonksiyon(element) {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;

  document.querySelector(".mydiv-div").onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.querySelector(".mydiv-div").onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  }

  function closeDragElement(e) {
    document.onmouseup = null;
    document.onmousemove = null;
  }
};
