export class Colision{
    constructor(colisiones){
        this.colisiones = colisiones;
    }
    ComprobarColision(x, y){
        if(x == this.colisiones.x || y == this.colisiones.y){
            console.log("stop");
            return false;
        }
        return true;
    }
}