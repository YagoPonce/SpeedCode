
# SpeedCode
## Accede al juego
https://yagoponce.github.io/SpeedCode/

## Descripción
SpeedCode es un juego 2d de un jugador que puede moverse horizontal y verticalmente.
Consiste en esquivar ordenadores corruptos y recoger los ordenadores buenos para poder
ir sumando puntos. Cada cierto tiempo, el jugador tendrá que copiar un codigo aleatorio en tu cuadrado de input, si acierta, recibirá más puntos, si falla, se le restarán.
Tambien puede recoger café, que se usan con la tecla ESPACIO y que da un aumento de 
velocidad. El juego dura 3 minutos, se pausa cuando hay que introducir codigo.


## MVP (DOM - CANVAS)
Se inicia en la STARTSCREEN, donde se expone la situación a resolver, se explican
los comandos para jugar y se encuantra el boton para empezar a jugar.
El juego básico consiste en esquivar ordenadores corruptos y coger los buenos.
Esto irá sumando puntos, y la dificultad irá en aumento (subiendo la velocidad
de movimiento de los ordenadores corruptos).
Cuando colisionamos con un ordenador corrupto, aparece la pantalla de GameOver,
que dice cuantos puntos se han conseguido, y almacena la partida más alta,
mostrandolo en otro marcador.
Hay un botón para empezar de nuevo el juego.

# Funcionalidades principales
startGame()
gameLoop()
gameOver()
replayGame()

## Otras funcionalidades 
marcador de puntos
marcador de puntuación más alta

# Estructura del proyecto
## main.js
- startgame()
- replayGame()
- addEventListener
  - 4 direcciones de las flechas
  - ENTER para introducir el código copiado
  - ESPACIO para activar la funcionalidad del CAFE
- activarCafe()

## game.js
- Game() {}
- gameLoop()
- gameOver()
- añadir elementos
  - addPcMalo()
  - addWifi()
  - addPcBueno()
  - addCafe()
  - addCorazon()
  - addCodigos()
- colliders:
  - pcMaloCollider
  - pcBuenoCollider
  - cafeCollider
  - wifiCollider
  -gameScore()
  contadorVidas()

## jugador.js
- Jugador() {this.img; this.img.src; this.x; this.y; this.w; 
  this.h; this.s; this.direction; this.vida}
  - drawJugador()
  - abajo()
  - arriba()
  - derecha()
  - izquierda()

## pcMalo.js
- PcMalo() {this.img; this.img.src; this.x; this.y; this.w;
    this.h; this.s}
  - drawPcMalo()
  - izquierda()
  
## pcBueno.js
- PcBueno() {this.img; this.img.src; this.x; this.y; this.w; this.h}
  - drawPcBueno()

## wifi.js
- Wifi() {this.img; this.img.src; this.x; this.y; this.w; this.h;
    this.s; this.wifiDirectionX; this.wifiDirectionY}
  - drawWifi()
  - wifiMove()
  - wifiWallCollision()

## pcBueno.js
- PcBueno() {this.img; this.img.src; this.x; this.y; this.w; this.h}
  - drawPcBueno()

## poderes.js
- Rapidez(){this.img; this.img.src; this.x; this.y; this.w; this.h}
  - drawCafe()
- Corazon(){this.img; this.img.src; this.x; this.y; this.w; this.h}
  - drawCorazon

## codigos.js
addCodigo()

# Pantallas
- Pantalla de inicio
- Pantalla de juego
- Pantalla de fin de juego


# Links
## Git
https://github.com/YagoPonce/SpeedCode

## Slides
https://docs.google.com/presentation/d/1HLJ3M4LRSKR9ja29940MI190GJn4TM-RcySypXJVTxw/edit#slide=id.g6f1ba423c3_0_5