class Wifi {
  constructor(randomYint) {
    this.img = new Image();
    this.img.src = "./Images/wifi.png";
    this.x = 10;
    this.y = randomYint;
    this.w = 40;
    this.h = 40;
    this.s = 2;
    this.wifiDirectionX = 1;
    this.wifiDirectionY = 1;
  }

  drawWifi = () => {
    if (gameOn === 0) {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  };

  wifiMove = () => {
    this.x = this.x + this.wifiDirectionX * this.s;
    this.y = this.y + this.wifiDirectionY * this.s;
  };

  wifiWallCollision = () => {
    if (this.y > canvas.height - 40) {
      this.wifiDirectionY = -1;
    } else if (this.x > canvas.width - 40) {
      this.wifiDirectionX = -1;
    } else if (this.y < +10) {
      this.wifiDirectionY = 1;
    }
  };
}
