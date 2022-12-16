let punkteAnzeige = document.querySelector(".punkte");
let score = 0;
let spielfeld = document.querySelector(".playground");
const spieler = document.querySelector(".player");
spieler.style.left = "0px";
spieler.style.bottom = "0px";
let timer = new Timer(55);
var wasser = new Audio("sound/soundhintergrund.mp3");

// Damit man auf eine andere Seite kommt
function start() {
  window.location.href = "./game.html";
}

// Kollision

function collision() {
  let steine = document.querySelectorAll(".stein");

  if (anyCollision(spieler, steine)) {
    window.location.href = "./gameover.html";
    return;
  }
}

// Anker die herunterkommen

function stein() {
  if (timer.ready()) {
    let h = document.createElement("div");
    h.classList.add("stein");
    h.style.top = "0px";
    h.style.left = "40px";
    spielfeld.appendChild(h);
  }
  if (timer.ready()) {
    let h = document.createElement("div");
    h.classList.add("stein");
    h.style.top = "0px";
    h.style.left = "210px";
    spielfeld.appendChild(h);
  }
  if (timer.ready()) {
    let h = document.createElement("div");
    h.classList.add("stein");
    h.style.top = "80px";
    h.style.left = "420px";
    spielfeld.appendChild(h);
  }

  let steine = document.querySelectorAll(".stein");
  for (let stein of steine) {
    stein.style.top = parseInt(stein.style.top) + 3 + "px";
    if (parseInt(stein.style.top) > 1200) {
      stein.parentNode.removeChild(stein);
    }
  }
}

// Punktestand
function versuch() {
  if (parseInt(spieler.style.left) > 1) {
    score = score + 1;
    punkteAnzeige.textContent = score;
  }
}

// Alle funktionen ausführen
function loop() {
  if (keyboard(39) && parseInt(spieler.style.left) < 430) {
    spieler.style.left = parseInt(spieler.style.left) + 5 + "px";
  }
  if (keyboard(37) && parseInt(spieler.style.left) > 0) {
    spieler.style.left = parseInt(spieler.style.left) - 5 + "px";
  }
  wasser.play();
  versuch();
  collision();
  stein();

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
