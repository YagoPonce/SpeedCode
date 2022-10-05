// VARIABLES GLOBALES

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#startScreen");
const startBtn = document.querySelector("#startBtn");
const restartBtn = document.querySelector("#restart-btn");
const gameoverScreen = document.querySelector("#gameoverScreen");
const gameScreen = document.querySelector("#gameScreen");
let ponerCodigo = document.querySelector("#ponerCodigo");
let intentoMasAltoGameover = document.querySelector("#intentoMasAltoGameover");
let codigoResueltoGameover = document.querySelector("#codigoResueltoGameover");
let codes = document.querySelector("#codes");
let codigoResuelto = document.querySelector("#codigoResuelto");
let gameObj;
let gameOn = 0;
let intentoMasAlto = document.querySelector("#intentoMasAlto");
const openMusic = new Audio("/sounds/startScreenSound.wav");
const gameMusic = new Audio("/sounds/gameScreenSound.mp3");
const gameoverMusic = new Audio("/sounds/gameOverSong.wav");
const lostSound = new Audio("/sounds/lostSound.wav")
const plusSound = new Audio("/sounds/plusSound.wav")

// FUNCIONES
openMusic.play();
openMusic.loop = true;

function startGame() {
gameoverMusic.pause()
openMusic.pause();
gameMusic.currentTime=0;
gameMusic.play();
gameMusic.volume=0.7
gameMusic.loop = true;
  gameoverScreen.style.display = "none";
  startScreen.style.display = "none";
  gameScreen.style.display = "grid";
  gameObj = new Game();
  gameObj.gameLoop();
}

const replayGame = () => {
  if (Number(codigoResuelto.innerText) > Number(intentoMasAlto.innerText)) {
    intentoMasAlto.innerText = codigoResuelto.innerText;
  }
  codigoResuelto.innerText = 0;
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
  if (event.code === "Enter" && codes.value === ponerCodigo.innerText) {
    codigoResuelto.innerText = Number(codigoResuelto.innerText) + Number(100);
    gameMusic.volume=0.7;
    gameObj.gameLoop();
  }
});
