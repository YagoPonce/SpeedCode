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

  gameScore = () => {
    if (this.pcMaloArr.length !== 0 && this.pcMaloArr[0].x < -70) {
      codigoResuelto.innerText = Number(codigoResuelto.innerText) + Number(5);
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
        cogerPcBueno.play()
        codigoResuelto.innerText = Number(codigoResuelto.innerText) + Number(50);
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
        cogerCafe.play()
        codigoResuelto.innerText = Number(codigoResuelto.innerText) + Number(20);
        usarCafe.innerText = Number(usarCafe.innerText) + Number(1);
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
    if (this.frames > 10800) {
        this.gameOver()
    }
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
    this.cafeCollider();
 
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
    if (Number(codigoResuelto.innerText) > 249 && Number(codigoResuelto.innerText) < 299) {
        gameOn = 1;
        gameMusic.volume=0.3;
        ponerCodigo.InnerText = this.addCodigos()
        } else if (Number(codigoResuelto.innerText) > 449 && Number(codigoResuelto.innerText) < 499) {
        gameOn = 1;
        gameMusic.volume=0.3;
        ponerCodigo.InnerText = this.addCodigos()
        } else if (Number(codigoResuelto.innerText) > 749 && Number(codigoResuelto.innerText) < 799) {
        gameOn = 1;
        gameMusic.volume=0.3;
        ponerCodigo.InnerText = this.addCodigos()
        } else if (Number(codigoResuelto.innerText) > 1049 && Number(codigoResuelto.innerText) < 1099) {
        gameOn = 1;
        gameMusic.volume=0.3;
        ponerCodigo.InnerText = this.addCodigos()
        } else if (Number(codigoResuelto.innerText) > 1349 && Number(codigoResuelto.innerText) < 1399) {
            gameOn = 1;
            gameMusic.volume=0.3;
            ponerCodigo.InnerText = this.addCodigos()
        } else if (Number(codigoResuelto.innerText) > 1649 && Number(codigoResuelto.innerText) < 1699) {
            gameOn = 1;
            gameMusic.volume=0.3;
            ponerCodigo.InnerText = this.addCodigos()
            }



    if (gameOn == 0) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
