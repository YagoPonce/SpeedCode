class Game {
  constructor() {
    this.jugador = new Jugador();
    this.pcMaloArr = [];
    this.pcBuenoArr = [];
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
      let randomNumX = Math.random() * 750;
      let randomXint = Math.floor(randomNumX);
      let newPcBueno = new PcBueno(randomYint, randomXint);
      this.pcBuenoArr.push(newPcBueno);
    }
  };

  gameScore = () => {
    if (this.pcMaloArr.length !== 0 && this.pcMaloArr[0].x < -0) {
      codigoResuelto.innerText = Number(codigoResuelto.innerText) + Number(10);
      this.pcMaloArr.shift();
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
    canvas.style.display = "none";
    gameoverScreen.style.display = "flex";
  };
  
  screen = () => {
    ctx.strokeStyle = "black";
    ctx.strokeRect = (10, 10, 890, 690)
    ctx.lineWidth = 100; //! esto no está haciendo nada. falta dibujar recuadro alrededor del canvas
}


  gameLoop = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    this.frames = this.frames + 1;
    ponerCodigo.innerText = "..."
    // 2. Acciones y movimientos de los elementos
    gameOn=0;
    this.addPcMalo();
    this.addPcBueno();
    this.pcMaloArr.forEach((eachPcMalo) => {
      eachPcMalo.izquierda();
    });
    this.pcMaloCollider();
    this.pcBuenoCollider();
    this.gameScore();

    //3. Dibujado de los elementos
    this.jugador.drawJugador();
    this.screen();

    this.pcMaloArr.forEach((eachPcMalo) => {
      eachPcMalo.drawPcMalo();
    });
    this.pcBuenoArr.forEach((eachPcBueno) => {
      eachPcBueno.drawPcBueno();
    });

    //4. Control de la recursion
    if (Number(codigoResuelto.innerText) > 199 && Number(codigoResuelto.innerText) < 299) {
        gameOn = 1;
        ponerCodigo.style.display = "flex";
        ponerCodigo.InnerText = this.addCodigos()
        } else if (Number(codigoResuelto.innerText) > 399 && Number(codigoResuelto.innerText) < 499) {
        gameOn = 1;
        ponerCodigo.style.display = "flex";
        ponerCodigo.InnerText = this.addCodigos()
        } else if (Number(codigoResuelto.innerText) > 699 && Number(codigoResuelto.innerText) < 799) {
        gameOn = 1;
        ponerCodigo.style.display = "flex";
        ponerCodigo.InnerText = this.addCodigos()
        }



    if (gameOn == 0) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
