class PcMalo {
    constructor (randomYint) {
        this.img = new Image();
        this.img.src = "/Images/pcMalo.png";
        this.x = 900; 
        this.y = randomYint;
        this.w = 90;
        this.h = 75;
        this.s = 3;
    }

    drawPcMalo = () => {
        if (gameOn === 0) {
         ctx.drawImage(this.img, this.x, this.y, this.w, this.h) 
        }
     }

    izquierda = () => {
        this.x = this.x - this.s
    }
}