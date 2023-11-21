
export class Controls {
    static AunmentarVelocidad(param){
        let veloc = false;
        document.addEventListener("keydown",ev => {
            if(ev.key == "x"){
                param.ArrowUp = 2;
            }
        })
        document.addEventListener("keyup", ev => {
            if(ev.key == "x"){
                param.ArrowUp = 1;
            }
        })
    }
}