let images = [
  "./assets/bell.png",
  "./assets/book.png",
  "./assets/cobweb.png",
  "./assets/cross.png",
  "./assets/flower.png",
  "./assets/hinduist.png",
  "./assets/islam.png",
  "./assets/lama.png",
  "./assets/sun.png",
  "./assets/yinyang.png",
];
let ran = false;
const rightside = document.getElementById("rightside");
const guessImageContainer = document.getElementById("guessImage");
let guessImage = images[Math.floor(Math.random() * images.length)];

// Initialize row outside the loop
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

  // Create div for each image and number
  let div = document.createElement("div");
  div.classList.add("graphElement");
  row.appendChild(div);
  if (i % 9 == 0) {
    let img = document.createElement("img");
    img.setAttribute("src", guessImage);
    img.classList.add("image");
    div.appendChild(img);
  } else {
    // Create and append image element
    let img = document.createElement("img");
    img.setAttribute("src", images[Math.floor(Math.random() * images.length)]);
    img.classList.add("image");
    div.appendChild(img);
  }

  // Create and append paragraph element for number
  let num = document.createElement("p");
  num.innerText = i;
  num.classList.add("num");
  div.appendChild(num);
}

document.getElementById("ball").addEventListener("click", onClick);

function onClick(e) {
  if (!ran && e.target.id === "ball") {
    guessImageContainer.setAttribute("src", guessImage);

    guessImageContainer.classList.add("fade-in");
    document.getElementById("rightside").classList.add("fade-out");
    document.getElementById("ball").classList.add("fade-out");

    let button = document.createElement("button");
    button.innerHTML = "Try again?";
    button.classList.add("tryAgainButton");
    document.getElementById("leftside").appendChild(button);
    button.setAttribute("onclick", "tryagain()");

    ran = true;
  }
}
function tryagain() {
  location.reload();
}
