import { Sprite } from "../Sprites/index.js";
import { Controls } from "./Controles.js";
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
    this.npcs = this.param.level[0].npc;
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
    if (this.ResetMov == true && this.remanente > 0) {
      if (this.GetPerspectiva == "X") {
        this.PosicionWorldX += this.Directions[this.direccionActual];
        this.npcs[0].x += this.Directions[this.direccionActual];
      } else {
        this.PosicionWorldY += this.Directions[this.direccionActual];
        this.npcs[0].y += this.Directions[this.direccionActual];
      }
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
        if (ev.key.startsWith("A")) {
          this.movActivado = true;
          this.direccionActual = ev.key;
          this.SetPerspectiva = ev.key;
          this.remanente = 40;
          
        }
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
  drawNpc() {
    this.npcs.forEach((element) => {
      let Img = new Image();
      Img.src = element.spriteImg;
      let fx =
        element.frameX * element.animationSprite["movDown"][element.frame][1];
      let fy =
        element.frameY * element.animationSprite["movDown"][element.frame][0];
      element.wait++;
      element.y += 0.5;
      element.x += 0.5;

      if (element.wait == 20) {
        element.frame++;
        if (element.frame > 1) element.frame = 0;
        element.wait = 0;
      }
      Img.onload = () => {
        this.ctx.drawImage(
          Img,
          fx,
          fy,
          element.width,
          element.height,
          element.x,
          element.y,
          18,
          20
        );
      };
    });
  }
  Animate() {
    const a = () => {
      this.DrawOver();
      this.MovDesc();
      this.Sprites.acutalizarAnimacion(this.direccionActual);
      this.drawNpc();
      requestAnimationFrame(a);
    };

    requestAnimationFrame(a);
  }
  main() {
    console.log(this.Img);
    this.Animate();
    this.ActivacionMov();
  }
}
