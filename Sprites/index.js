export class Sprite {
  constructor(param, ctx, canvas) {
    this.width = param.width;
    this.ctx = ctx;
    this.canvas = canvas;
    this.height = param.height;
    this.img = param.spriteImg;
    this.frameX = param.frameX;
    this.frameY = param.frameY;
  }
  draw() {
    
    let Img = new Image();
    Img.src = this.img;
    Img.onload = () => {
      this.ctx.drawImage(
        Img,
        this.frameX,
        this.frameY,
        this.width,
        this.height,
        this.canvas.width / 2,
        this.canvas.height / 2,
        23,
        23
      );
    };

  }
}
