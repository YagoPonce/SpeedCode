// VARIABLES GLOBALES

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#startScreen");
const startBtn = document.querySelector("#startBtn");
const restartBtn = document.querySelector("#restart-btn");
const gameoverScreen = document.querySelector("#gameoverScreen");
const gameScreen = document.querySelector("#gameScreen");
let correctoIncorrecto = document.querySelector("#correctoIncorrecto");
let ponerCodigo = document.querySelector("#ponerCodigo");
let intentoMasAltoGameover = document.querySelector("#intentoMasAltoGameover");
let codigoResueltoGameover = document.querySelector("#codigoResueltoGameover");
let codes = document.querySelector("#codes");
let codigoResuelto = document.querySelector("#codigoResuelto");
let vidasimg = document.querySelector("#vidasimg");
let gameObj;
let gameOn = 0;
let intentoMasAlto = document.querySelector("#intentoMasAlto");
let usarCafe = document.querySelector("#usarCafe");
let cafeActivo = false;
let tiempo = 0;
const openMusic = new Audio("./sounds/startScreenSound.wav");
const gameMusic = new Audio("./sounds/gameScreenSound.mp3");
const gameoverMusic = new Audio("./sounds/gameOverSong.wav");
const cogerCafe = new Audio("./sounds/plusSound.wav");
const plusSound = new Audio("./sounds/cafe.wav");
const cogerPcBueno = new Audio("./sounds/pcbueno.wav");
const activarCafeSound = new Audio("./sounds/usarCafe.wav");
const codigobien = new Audio("./sounds/codigobien.wav");
const wifi = new Audio("./sounds/wifi.wav");
let cuentaAtras = 0;
let cronometro;

// FUNCIONES

activarCafe = () => {
  cafeActivo = true;
  usarCafe.innerText = Number(usarCafe.innerText) - Number(1);
  setTimeout(function () {
    cafeActivo = false;
  }, 4000);
};

function startGame() {
  gameOn = 0;
  gameoverMusic.pause();
  openMusic.pause();
  gameMusic.currentTime = 0;
  gameMusic.play();
  gameMusic.volume = 0.6;
  gameMusic.loop = true;
  gameoverScreen.style.display = "none";
  startScreen.style.display = "none";
  gameScreen.style.display = "grid";
  gameObj = new Game();
  cuentaAtras = 3000000;
  cronometro = setTimeout(() => {
    gameObj.gameOver();
  }, cuentaAtras);
  gameObj.gameLoop();
}

const replayGame = () => {
  if (Number(codigoResuelto.innerText) > Number(intentoMasAlto.innerText)) {
    intentoMasAlto.innerText = codigoResuelto.innerText;
  }
  correctoIncorrecto.classList.remove("incorrecto");
  correctoIncorrecto.classList.remove("correcto");
  codigoResuelto.innerText = 0;
  usarCafe.innerText = 0;
  startGame();
};

// ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);

restartBtn.addEventListener("click", replayGame);

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    gameObj.jugador.direction = 4;
    gameObj.jugador.arriba();
  } else if (event.code === "ArrowDown") {
    gameObj.jugador.direction = 2;
    gameObj.jugador.abajo();
  } else if (event.code === "ArrowLeft") {
    gameObj.jugador.direction = 3;
    gameObj.jugador.izquierda();
  } else if (event.code === "ArrowRight") {
    gameObj.jugador.direction = 1;
    gameObj.jugador.derecha();
  }
});

window.addEventListener("keydown", (event) => {
  if (
    event.code === "Enter" &&
    codes.value === ponerCodigo.innerText &&
    gameOn == 1
  ) {
    codigoResuelto.innerText = Number(codigoResuelto.innerText) + Number(50);
    correctoIncorrecto.classList.remove("incorrecto");
    correctoIncorrecto.classList.add("correcto");
    codigobien.play();
    codes.value = "";
    gameMusic.volume = 0.6;
    gameOn = 0;
    gameObj.gameLoop();
  } else if (
    event.code === "Enter" &&
    codes.value !== ponerCodigo.innerText &&
    gameOn == 1
  ) {
    codigoResuelto.innerText = Number(codigoResuelto.innerText) - Number(100);
    correctoIncorrecto.classList.remove("correcto");
    correctoIncorrecto.classList.add("incorrecto");
    gameObj.jugador.vida -= 1;
    codes.value = "";
    gameMusic.volume = 0.6;
    gameOn = 0;
    gameObj.gameLoop();
  }
});

window.addEventListener("keydown", (event) => {
  if (
    event.code === "Space" &&
    Number(usarCafe.innerText) > Number(0) &&
    gameOn == 0
  ) {
    activarCafeSound.play();
    activarCafe();
  }
});
