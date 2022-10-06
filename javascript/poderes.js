class Rapidez {
  constructor(randomYint, randomXint) {
    this.img = new Image();
    this.img.src = "./Images/cafe.png";
    this.x = randomXint;
    this.y = randomYint;
    this.w = 65;
    this.h = 80;
  }

  drawCafe = () => {
    if (gameOn === 0) {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  };
}

class Corazon {
  constructor(randomYint, randomXint) {
    this.img = new Image();
    this.img.src = "./Images/corazon.png";
    this.x = randomXint;
    this.y = randomYint;
    this.w = 50;
    this.h = 50;
  }

  drawCorazon = () => {
    if (gameOn === 0) {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  };
}
