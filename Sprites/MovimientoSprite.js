export class MovimientoSprite
{
    constructor(param){
        this.heldDirection = "top";
        this.Directions = {
            ArrowUp:1,
            ArrowDown:-1,
            ArrowRight:1,
            ArrowRight:-1
        }
    }
    Caminar(param){
       
        document.addEventListener("keydown", ev => {
            if(ev.key == "ArrowUp"){
                 console.log(param.level[0].x);
                param += this.Directions[ev.key];
        }
    })
    }

}