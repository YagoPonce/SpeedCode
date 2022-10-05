class Jugador {
    constructor() {
        this.img = new Image();
        this.img.src = "./Images/Derecha1.png"
        this.x = 50; 
        this.y = 50;
        this.w = 70;
        this.h = 80;
        this.s = 10;
        this.direction = 1
        this.vida = 3;
        
    }
drawJugador = () => {
    if (cafeActivo) {
        this.s = 20;
    } else {
        this.s = 10;
    }
    if (this.direction === 1) {
        this.img.src = "./Images/Derecha1.png"
    } else if (this.direction === 2) {
        this.img.src = "./Images/Frente1.png"
    } else if (this.direction === 3) {
        this.img.src = "./Images/Izquierda1.png"
    } else if (this.direction === 4) {
        this.img.src = "./Images/Espaldas1.png"
    }
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

abajo = () => {
    if (this.y > 400) {
        this.y = 400
    } else {
        this.y = this.y + this.s
        this.direction = 2
    }

}
arriba = () => {
    if (this.y < 5) {
        this.y = 5
    } else {
        this.y = this.y - this.s
        this.direction = 4
        }
}

derecha = () => {
    if (this.x > 720) {
        this.x = 720
    } else {
        this.x = this.x + this.s
        this.direction = 1
}
}
izquierda = () => {
    if (this.x < 5) {
        this.x = 5
    } else {
        this.x = this.x - this.s
        this.direction = 3
    }
}
}






