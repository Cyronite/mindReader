const images = [
  "./assets/bell.png",
  "./assets/book.png",
  "./assets/cobweb.png",
  "./assets/flower.png",
  "./assets/lama.png",
  "./assets/sun.png",
  "./assets/threeway.png",
  "./assets/add.png",
  "./assets/star.png",
  "./assets/light.png",
  "./assets/investment.png",
  "./assets/digital-asset.png",
  "./assets/mobile-notch.png",
  "./assets/asset.png"
];

const clickSound = new Audio("./assets/metal-whoosh.mp3");
const rightside = document.getElementById("rightside");
const guessImageContainer = document.getElementById("guessImage");
let guessImage = images[Math.floor(Math.random() * images.length)];

let ran = false;

let row = document.createElement("div");
row.classList.add("row");
rightside.appendChild(row);

for (let i = 0; i < 99; i++) {
  if (i > 0 && i % 11 == 0) {
    row = document.createElement("div");
    row.classList.add("row");
    row.classList.add(i / 10);
    rightside.appendChild(row);
  }

  let div = document.createElement("div");
  div.classList.add("graphElement");
  row.appendChild(div);
  
  let img = document.createElement("img");
  img.setAttribute("src", i % 9 == 0 ? guessImage : images[Math.floor(Math.random() * images.length)]);
  img.classList.add("image");
  div.appendChild(img);

  let num = document.createElement("p");
  num.innerText = i;
  num.classList.add("num");
  div.appendChild(num);
}

document.getElementById("ball").addEventListener("click", onClick);

function onClick(e) {
  if (!ran && e.target.id === "ball") {
    clickSound.play();
    guessImageContainer.setAttribute("src", guessImage);
    guessImageContainer.classList.add("fade-in");
    document.getElementById("rightside").classList.add("fade-out");

    let button = document.createElement("button");
    button.innerHTML = "Try again?";
    button.classList.add("tryAgainButton");
    button.addEventListener("click", tryagain);
    document.getElementById("leftside").appendChild(button);

    ran = true;
  }
}

function tryagain() {
  location.reload();
}