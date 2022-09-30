class Jugador {
    constructor() {
        this.img = new Image();
        this.jump = 40;
        this.img.src = "../Images/Derecha1.png"
        this.x = 50; 
        this.y = 50;
        this.w = 60;
        this.h = 80;
        this.s = 10;
        this.direction = 1
        
        
        
    }
drawJugador = () => {
    if (this.direction === 1) {
        this.img.src = "../Images/Derecha2.png"
    } else if (this.direction === 2) {
        this.img.src = "../Images/Frente1.png"
    } else if (this.direction === 3) {
        this.img.src = "../Images/Izquierda1.png"
    } else if (this.direction === 4) {
        this.img.src = "../Images/Espaldas1.png"
    }
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

abajo = () => {
    if (this.y > 600) {
        this.y = 600
    } else {
        this.y = this.y + this.s
        this.direction = 2
    }

}
arriba = () => {
    if (this.y < 0) {
        this.y = 0
    } else {
        this.y = this.y - this.s
        this.direction = 4
}
}
derecha = () => {
    if (this.x > 900) {
        this.x = 900
    } else {
        this.x = this.x + this.s
        this.direction = 1
}
}
izquierda = () => {
    if (this.x < 0) {
        this.x = 0
    } else {
        this.x = this.x - this.s
        this.direction = 3
    }
}
}