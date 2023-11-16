import { MovimientoSprite } from "../Sprites/MovimientoSprite.js";
import { Sprite } from "../Sprites/index.js";
export class Overworld {
  constructor(Parametro, canvas) {
    this.param = Parametro;
    this.PosicionWorldX = this.param.level[0].x;
    this.PosicionWorldY = this.param.level[0].y;
    this.width = this.param.level[0].width;
    this.height = this.param.level[0].height;
    this.Img = this.param.level[0].BackGround;
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
  mov(){
    let Mov = new MovimientoSprite(this.PosicionWorldY, this.canvas);
    Mov.Caminar(this.param);
  }
  DrawOver() {
    this.DrawWorld();
    this.Sprites.main();
  }
  Animate(){
    const a =  () => {
        this.DrawOver();
        this.mov();
        requestAnimationFrame(a);
    }
    requestAnimationFrame(a);
  }
  main() {
    console.log(this.Img);
    this.Animate();
  }
}
