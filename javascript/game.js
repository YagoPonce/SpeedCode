class Game {
  constructor() {
    this.jugador = new Jugador();
    this.pcMaloArr = [];
    this.pcBuenoArr = [];
    this.cafeArr = [];
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

  addPcBueno = () => {
    if (this.frames % 600 === 0) {
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
    if (this.frames % 1300 === 0) {
      let randomNumY = Math.random() * 380;
      let randomYint = Math.floor(randomNumY);
      let randomNumX = Math.random() * 700;
      let randomXint = Math.floor(randomNumX);
      let newCafe = new Rapidez(randomYint, randomXint);
      this.cafeArr.push(newCafe);
    } else if (this.frames % 1700 === 0) {
        this.cafeArr.shift();
    }
  };

  gameScore = () => {
    if (this.pcMaloArr.length !== 0 && this.pcMaloArr[0].x < -70) {
      codigoResuelto.innerText = Number(codigoResuelto.innerText) + Number(10);
      this.pcMaloArr.shift();
      plusSound.play();
    }
  };

  pcMaloCollider = () => {
    this.pcMaloArr.forEach((eachPcMalo) => {
      if (
        this.jugador.x < eachPcMalo.x + eachPcMalo.w &&
        this.jugador.x + this.jugador.w > eachPcMalo.x &&
        this.jugador.y < eachPcMalo.y + eachPcMalo.h &&
        this.jugador.h + this.jugador.y > eachPcMalo.y
      ) {
        lostSound.play();
        this.gameOver();
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
        codigoResuelto.innerText = Number(codigoResuelto.innerText) + Number(100);
      }
    });
  };

addCodigos = () => {
      let randomNum = Math.random() * 20;
      let codigoRandom = Math.floor(randomNum);
      ponerCodigo.innerText = addCodigo(codigoRandom)
  }



  gameOver = () => {
    gameOn = 2;
    gameScreen.style.display = "none";
    gameoverScreen.style.display = "grid";
    gameMusic.pause()
    gameoverMusic.currentTime=0;
    gameoverMusic.play();
    gameoverMusic.volume=0.7;
    gameoverMusic.loop = true;
    codigoResueltoGameover.innerText = Number(codigoResuelto.innerText);
    intentoMasAltoGameover.innerText = intentoMasAlto.innerText
  };
  

  gameLoop = () => {
    gameOn = 0;
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    this.frames = this.frames + 1;
    ponerCodigo.innerText = "...";
    // 2. Acciones y movimientos de los elementos
    this.addPcMalo();
    this.addPcBueno();
    this.addCafe();
    this.pcMaloArr.forEach((eachPcMalo) => {
      eachPcMalo.izquierda();
    });
    this.pcMaloCollider();
    this.pcBuenoCollider();
    this.gameScore();

    //3. Dibujado de los elementos
    this.jugador.drawJugador();

    this.pcMaloArr.forEach((eachPcMalo) => {
      eachPcMalo.drawPcMalo();
    });
    this.pcBuenoArr.forEach((eachPcBueno) => {
      eachPcBueno.drawPcBueno();
    });
    this.cafeArr.forEach((eachCafe) => {
        eachCafe.drawCafe();
      });

    //4. Control de la recursion
    if (Number(codigoResuelto.innerText) > 199 && Number(codigoResuelto.innerText) < 299) {
        gameOn = 1;
        gameMusic.volume=0.3;
        ponerCodigo.InnerText = this.addCodigos()
        } else if (Number(codigoResuelto.innerText) > 499 && Number(codigoResuelto.innerText) < 599) {
        gameOn = 1;
        gameMusic.volume=0.3;
        ponerCodigo.InnerText = this.addCodigos()
        } else if (Number(codigoResuelto.innerText) > 799 && Number(codigoResuelto.innerText) < 899) {
        gameOn = 1;
        gameMusic.volume=0.3;
        ponerCodigo.InnerText = this.addCodigos()
        } else if (Number(codigoResuelto.innerText) > 1099 && Number(codigoResuelto.innerText) < 1199) {
        gameOn = 1;
        gameMusic.volume=0.3;
        ponerCodigo.InnerText = this.addCodigos()
        }



    if (gameOn == 0) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
