export class Sprite{
    constructor(param, ctx, canvas){
        this.width = param.width;
        this.height = param.height;
        this.img = param.spriteImg;
    }
    draw(){
        let Img = new Image();
        Img.src = this.img;
        Img.onload = () => {
            ctx.drawImage(Img,)
        }
    }
}