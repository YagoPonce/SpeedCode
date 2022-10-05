class Rapidez {
    constructor (randomYint, randomXint) {
        this.img = new Image();
        this.img.src = "/Images/cafe.png";
        this.x = randomXint; 
        this.y = randomYint;
        this.w = 60;
        this.h = 85;
    }

drawCafe = () => {
    if (gameOn === 0) {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    }

}