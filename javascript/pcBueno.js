class PcBueno {
    constructor (randomYint, randomXint) {
        this.img = new Image();
        this.img.src = "/Images/pcBueno.png";
        this.x = randomXint; 
        this.y = randomYint;
        this.w = 105;
        this.h = 60;
    }

    drawPcBueno = () => {
        if (gameOn === 0) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        }
    }
}