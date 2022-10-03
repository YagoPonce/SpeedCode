// VARIABLES GLOBALES

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#startScreen");
const startBtn = document.querySelector("#startBtn");
const gameoverScreen = document.querySelector("#gameoverScreen");
let inputCode = document.querySelector("#speedCode");
let score = document.querySelector("#score");
let codes = document.querySelector("#codes");
let codigoResuelto = document.querySelector("#codigoResuelto");
let gameObj;

// FUNCIONES
const startGame = () => {
  this.gameOn = 0
  startScreen.style.display = "none";
  canvas.style.display = "flex";
  score.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop();
};

// ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    gameObj.jugador.direction = 4;
    gameObj.jugador.arriba();

    console.log("arriba");
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
    if (event.code === "Enter" && codes.value === "casa") {
    gameOn = 0
      }
    })