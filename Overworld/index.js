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
    this.heldDirection = "top";
    this.Directions = {
      ArrowUp: 1,
      ArrowDown: -1,
      ArrowRight: -1,
      ArrowLeft: 1,
    };
    this.remanente = 0;
    this.movActivado = false;
    this.direccionActual = "";
    this.ResetMov = true;
    this.Perspectiva = "";
  }
  set SetPerspectiva(param) {
    if (
      param.replace("Arrow", "") == "Up" ||
      param.replace("Arrow", "") == "Down"
    )
      this.Perspectiva = "Y";
    else this.Perspectiva = "X";
  }
  get GetPerspectiva() {
    return this.Perspectiva;
  }
  MovDesc(posicionY, posicionX) {
    this.ActivacionMov();
    if (this.ResetMov == true && this.remanente > 0) {
      
      if (this.GetPerspectiva == "X")
        this.PosicionWorldX += this.Directions[this.direccionActual];
      else this.PosicionWorldY += this.Directions[this.direccionActual];
      this.remanente--;
    } else {
      this.movActivado = false;
      this.heldDirection = "";
      this.Sprites.stander(this.direccionActual);
    }
  }
  ActivacionMov() {
    if (this.remanente <= 0 && this.ResetMov == true) {
      document.addEventListener("keydown", (ev) => {
        this.remanente = 40;
        this.movActivado = true;
        this.direccionActual = ev.key;
        this.SetPerspectiva = ev.key;
      });
    } else {
      document.addEventListener("keyup", (ev) => {
        this.ResetMov = true;
      });
    }
  }
  Cleaner() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  DrawWorld() {
    let Img = new Image();
    Img.src = this.Img;
    Img.onload = () => {
      this.Cleaner();
      this.ctx.drawImage(
        Img,
        this.PosicionWorldX,
        this.posicionY,
        this.width,
        this.height
      );
    };
  }
  DrawOver() {
    let o = false;
    if (this.remanente > 0) {
      o = false;
    } else {
      o = true;
    }
    this.DrawWorld();
    this.Sprites.main(o);
  }
  /**
   * @param {any} param
   */
  set posicionY(param) {
    this.PosicionWorldY = param;
  }
  get posicionY() {
    return this.PosicionWorldY;
  }
  Animate() {
    const a = () => {
      this.DrawOver();
      this.MovDesc();
      this.Sprites.acutalizarAnimacion(this.direccionActual);
      requestAnimationFrame(a);
    };

    requestAnimationFrame(a);
  }
  main() {
    console.log(this.Img);
    this.Animate();
  }
}
