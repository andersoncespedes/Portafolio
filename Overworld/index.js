import { Sprite } from "../Sprites/index.js";
export class Overworld {
  constructor(Parametro, canvas) {
    this.PosicionWorldX = Parametro.level[0].x;
    this.PosicionWorldY = Parametro.level[0].y;
    this.width = Parametro.level[0].width;
    this.height = Parametro.level[0].height;
    this.Img = Parametro.level[0].BackGround;
    this.canvas = canvas.Element;
    this.ctx = canvas.ctx;
    this.Sprites = new Sprite(Parametro.heroe);
  }
  DrawOver() {
    let Img = new Image();
    Img.src = this.Img;
    Img.onload = () => {
      this.ctx.drawImage(
        Img,
        this.PosicionWorldX,
        this.PosicionWorldY,
        this.width,
        this.height
      );
    };
  }
  Animate(){
    const a =  () => {
        
        if(this.PosicionWorldX <  -2000){
            this.PosicionWorldY += 1;
        }
        else this.PosicionWorldX -= 1;
        
        this.DrawOver();
        requestAnimationFrame(a);
    }
    requestAnimationFrame(a);
  }
  main() {
    console.log(this.Img);
    this.Animate();
  }
}
