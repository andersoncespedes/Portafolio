

export class MovimientoSprite
{
    constructor(){
        this.heldDirection = "top";
        this.Directions = {
            ArrowUp:1,
            ArrowDown:-1,
            ArrowRight:1,
            ArrowRight:-1
        }
        this.remanente = 0;
        this.movActivado = false;
        this.direccionActual = "";
        this.ResetMov = false;
        this.Perspectiva = "";
    }
 

}