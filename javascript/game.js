class Game {
  constructor() {
    this.jugador = new Jugador();
    this.pcMaloArr = [];
    this.pcBuenoArr = [];
    this.cafeArr = [];
    this.wifiArr = [];
    this.corazonArr = [];
    this.frames = 0;
  }

  addPcMalo = () => {
    if (this.frames % 120 === 0) {
      let randomNum = Math.random() * 350;
      let randomYint = Math.floor(randomNum);
      let newPcMalo = new PcMalo(randomYint);
      this.pcMaloArr.push(newPcMalo);
    }
  };

  addWifi = () => {
    if (gameOn === 0 && this.frames % 1600 === 0) {
      let randomNum = Math.random() * 350;
      let randomYint = Math.floor(randomNum);
      let newWifi = new Wifi(randomYint);
      this.wifiArr.push(newWifi);
    } else if (gameOn === 0 && this.frames % 1200 === 0) {
      let randomNum = Math.random() * 350;
      let randomYint = Math.floor(randomNum);
      let newWifi = new Wifi(randomYint);
      this.wifiArr.push(newWifi);
    } else if (
      gameOn === 0 &&
      codigoResuelto.innerText > 260 &&
      codigoResuelto.innerText < 320 &&
      this.frames % 500 === 0
    ) {
      let randomNum = Math.random() * 350;
      let randomYint = Math.floor(randomNum);
      let newWifi = new Wifi(randomYint);
      this.wifiArr.push(newWifi);
    }
  };

  addPcBueno = () => {
    if (this.frames % 700 === 0) {
      this.pcBuenoArr.shift();
      let randomNumY = Math.random() * 380;
      let randomYint = Math.floor(randomNumY);
      let randomNumX = Math.random() * 700;
      let randomXint = Math.floor(randomNumX);
      let newPcBueno = new PcBueno(randomYint, randomXint);
      this.pcBuenoArr.push(newPcBueno);
    }
  };

  addCafe = () => {
    if (this.frames % 600 === 0) {
      let randomNumY = Math.random() * 380;
      let randomYint = Math.floor(randomNumY);
      let randomNumX = Math.random() * 700;
      let randomXint = Math.floor(randomNumX);
      let newCafe = new Rapidez(randomYint, randomXint);
      this.cafeArr.push(newCafe);
    } else if (this.frames % 800 === 0) {
      this.cafeArr.shift();
    }
  };

  addCorazon = () => {
    if (this.frames % 1600 === 0) {
      let randomNumY = Math.random() * 380;
      let randomYint = Math.floor(randomNumY);
      let randomNumX = Math.random() * 700;
      let randomXint = Math.floor(randomNumX);
      let newCorazon = new Corazon(randomYint, randomXint);
      this.corazonArr.push(newCorazon);
    } else if (this.frames % 1900 === 0) {
      this.corazonArr.shift();
    }
  };

  gameScore = () => {
    if (this.pcMaloArr.length !== 0 && this.pcMaloArr[0].x < -70) {
      codigoResuelto.innerText = Number(codigoResuelto.innerText) + Number(5);
      this.pcMaloArr.shift();
      plusSound.play();
    }
  };

  pcMaloCollider = () => {
    this.pcMaloArr.forEach((eachPcMalo) => {
        let counter= 0;
        counter++
      if (
        this.jugador.x < eachPcMalo.x + eachPcMalo.w &&
        this.jugador.x + this.jugador.w > eachPcMalo.x &&
        this.jugador.y < eachPcMalo.y + eachPcMalo.h &&
        this.jugador.h + this.jugador.y > eachPcMalo.y
      ) {
        this.jugador.vida = this.jugador.vida - 1;
        this.pcMaloArr.splice((this.pcMaloArr.indexOf(eachPcMalo)), 1)
      }
    });
  };

  wifiCollider = () => {
    this.wifiArr.forEach((eachWifi) => {
      if (
        this.jugador.x < eachWifi.x + eachWifi.w &&
        this.jugador.x + this.jugador.w > eachWifi.x &&
        this.jugador.y < eachWifi.y + eachWifi.h &&
        this.jugador.h + this.jugador.y > eachWifi.y
      ) {
        let randomNumY = Math.random() * 380;
        let randomYint = Math.floor(randomNumY);
        let randomNumX = Math.random() * 700;
        let randomXint = Math.floor(randomNumX);
        this.jugador.x = randomXint;
        this.jugador.y = randomYint;
        wifi.play();
        this.wifiArr.shift();
      } else if (this.x < -40) {
        this.wifiArr.shift;
      }
    });
  };

  pcBuenoCollider = () => {
    this.pcBuenoArr.forEach((eachPcBueno) => {
      if (
        this.jugador.x < eachPcBueno.x + eachPcBueno.w &&
        this.jugador.x + this.jugador.w > eachPcBueno.x &&
        this.jugador.y < eachPcBueno.y + eachPcBueno.h &&
        this.jugador.h + this.jugador.y > eachPcBueno.y
      ) {
        this.pcBuenoArr.shift();
        cogerPcBueno.play();
        codigoResuelto.innerText =
          Number(codigoResuelto.innerText) + Number(50);
      }
    });
  };

  cafeCollider = () => {
    this.cafeArr.forEach((eachCafe) => {
      if (
        this.jugador.x < eachCafe.x + eachCafe.w &&
        this.jugador.x + this.jugador.w > eachCafe.x &&
        this.jugador.y < eachCafe.y + eachCafe.h &&
        this.jugador.h + this.jugador.y > eachCafe.y
      ) {
        this.cafeArr.shift();
        cogerCafe.play();
        codigoResuelto.innerText =
          Number(codigoResuelto.innerText) + Number(20);
        usarCafe.innerText = Number(usarCafe.innerText) + Number(1);
      }
    });
  };

  corazonCollider = () => {
    this.corazonArr.forEach((eachCorazon) => {
      if (
        this.jugador.x < eachCorazon.x + eachCorazon.w &&
        this.jugador.x + this.jugador.w > eachCorazon.x &&
        this.jugador.y < eachCorazon.y + eachCorazon.h &&
        this.jugador.h + this.jugador.y > eachCorazon.y
      ) {
        cogerPcBueno.play();
        codigoResuelto.innerText =
          Number(codigoResuelto.innerText) + Number(10);
        if (this.jugador.vida === 1) {
          this.jugador.vida = this.jugador.vida + 1;
          vidasimg.classList.remove("unavida");
          vidasimg.classList.add("dosvidas");
        } else if (this.jugador.vida === 2) {
          this.jugador.vida = this.jugador.vida + 1
          vidasimg.classList.remove("dosvidas");
          vidasimg.classList.add("tresvidas");
        }
        this.corazonArr.shift()
      }
    });
  };

  addCodigos = () => {
    let randomNum = Math.random() * 20;
    let codigoRandom = Math.floor(randomNum);
    ponerCodigo.innerText = addCodigo(codigoRandom);
  };

  contadorVidas = () => {
    if (this.jugador.vida === 3) {
      vidasimg.classList.remove("unavida");
      vidasimg.classList.add("tresvidas");
    } else if (this.jugador.vida === 2) {
      vidasimg.classList.remove("tresvidas");
      vidasimg.classList.add("dosvidas");
    } else if (this.jugador.vida === 1) {
      vidasimg.classList.remove("dosvidas");
      vidasimg.classList.add("unavida");
    } else if (this.jugador.vida === 0) {
      this.gameOver();
    }
  };

  gameOver = () => {
    gameOn = 2;
    clearInterval(cronometro);
    gameScreen.style.display = "none";
    gameoverScreen.style.display = "grid";
    gameMusic.pause();
    gameoverMusic.currentTime = 0;
    gameoverMusic.play();
    gameoverMusic.volume = 0.6;
    gameoverMusic.loop = true;
    codigoResueltoGameover.innerText = Number(codigoResuelto.innerText);
    intentoMasAltoGameover.innerText = intentoMasAlto.innerText;
  };

  gameLoop = () => {
    if (gameOn === 0) {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
      this.frames = this.frames + 1;
      ponerCodigo.innerText = "...";
      // 2. Acciones y movimientos de los elementos
      this.addPcMalo();
      this.addWifi();
      this.addPcBueno();
      this.addCafe();
      this.addCorazon();
      this.pcMaloArr.forEach((eachPcMalo) => {
        eachPcMalo.izquierda();
      });
      this.wifiArr.forEach((eachWifi) => {
        eachWifi.wifiMove();
      });

      this.wifiArr.forEach((eachWifi) => {
        eachWifi.wifiWallCollision();
      });
      this.pcMaloCollider();
      this.wifiCollider();

      this.pcBuenoCollider();
      this.cafeCollider();
      this.corazonCollider();

      
      this.gameScore();

      //3. Dibujado de los elementos
      this.jugador.drawJugador();

      this.pcMaloArr.forEach((eachPcMalo) => {
        eachPcMalo.drawPcMalo();
      });

      this.wifiArr.forEach((eachWifi) => {
        eachWifi.drawWifi();
      });
      this.pcBuenoArr.forEach((eachPcBueno) => {
        eachPcBueno.drawPcBueno();
      });
      this.cafeArr.forEach((eachCafe) => {
        eachCafe.drawCafe();
      });

      this.corazonArr.forEach((eachCorazon) => {
        eachCorazon.drawCorazon();
      });
      this.contadorVidas();

      //4. Control de la recursion
      if (
        Number(codigoResuelto.innerText) > 199 &&
        Number(codigoResuelto.innerText) < 249
      ) {
        gameOn = 1;
        gameMusic.volume = 0.2;
        ponerCodigo.InnerText = this.addCodigos();
      } else if (
        Number(codigoResuelto.innerText) > 449 &&
        Number(codigoResuelto.innerText) < 499
      ) {
        gameOn = 1;
        gameMusic.volume = 0.2;
        ponerCodigo.InnerText = this.addCodigos();
      } else if (
        Number(codigoResuelto.innerText) > 749 &&
        Number(codigoResuelto.innerText) < 799
      ) {
        gameOn = 1;
        gameMusic.volume = 0.2;
        ponerCodigo.InnerText = this.addCodigos();
      } else if (
        Number(codigoResuelto.innerText) > 1049 &&
        Number(codigoResuelto.innerText) < 1099
      ) {
        gameOn = 1;
        gameMusic.volume = 0.2;
        ponerCodigo.InnerText = this.addCodigos();
      } else if (
        Number(codigoResuelto.innerText) > 1349 &&
        Number(codigoResuelto.innerText) < 1399
      ) {
        gameOn = 1;
        gameMusic.volume = 0.2;
        ponerCodigo.InnerText = this.addCodigos();
      } else if (
        Number(codigoResuelto.innerText) > 1649 &&
        Number(codigoResuelto.innerText) < 1699
      ) {
        gameOn = 1;
        gameMusic.volume = 0.2;
        ponerCodigo.InnerText = this.addCodigos();
      } else if (
        Number(codigoResuelto.innerText) > 1949 &&
        Number(codigoResuelto.innerText) < 1999
      ) {
        gameOn = 1;
        gameMusic.volume = 0.2;
        ponerCodigo.InnerText = this.addCodigos();
      }

      if (gameOn == 0) {
        requestAnimationFrame(this.gameLoop);
      }
    }
  };
}
