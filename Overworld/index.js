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
    this.Sprites = new Sprite(Parametro.heroe, canvas.ctx, canvas.Element);
  }
  Cleaner(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  }
  DrawWorld(){
    let Img = new Image();
    Img.src = this.Img;
    
    Img.onload = () => {
      this.Cleaner();
      this.ctx.drawImage(
        Img,
        this.PosicionWorldX,
        this.PosicionWorldY,
        this.width,
        this.height
      );
    };
  }
  DrawOver() {
    this.DrawWorld();
    
    this.Sprites.draw();
  }
  Animate(){
    const a =  () => {
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
