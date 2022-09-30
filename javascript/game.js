class Game {
    constructor() {
        this.jugador = new Jugador()
        this.gameOn = true;
    }














    gameLoop = () => {
        ctx.clearRect(0,0,canvas.clientWidth, canvas.height)

// 2. Acciones y movimientos de los elementos


//3. Dibujado de los elementos
this.jugador.drawJugador()


//4. Control de la recursion
if (this.gameOn === true) {
    requestAnimationFrame(this.gameLoop);
  }
    }

}