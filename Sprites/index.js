

export class Sprite {
  constructor(param, ctx, canvas) {
    this.param = param;
    this.width = param.width;
    this.ctx = ctx;
    this.canvas = canvas;
    this.height = param.height;
    this.img = param.spriteImg;
    this.frameX = param.frameX;
    this.frameY = param.frameY;
    this.animationSelect = "movDown";
    this.frameActual = 0;
    this.WaitAnimation = 10;
  }
 
  draw() {
    let Img = new Image();
    Img.src = this.img;
    this.animation();
    Img.onload = () => {
      this.ctx.drawImage(
        Img,
        this.frameX,
        this.frameY,
        this.width,
        this.height,
        this.canvas.width / 2,
        this.canvas.height / 2,
        20,
        22
      );
    };
  }
  animation(){
    this.frameX = 16 * this.param.animationSprite[this.animationSelect][this.frameActual][1];
    this.frameY = 23 * this.param.animationSprite[this.animationSelect][this.frameActual][0];
    if(this.WaitAnimation > 0){
      this.WaitAnimation--;
    }
    else{
      if(this.frameActual < 1){
      this.frameActual++;
      }
      else{
        this.frameActual = 0;
      }
      this.WaitAnimation = 10;
    }
    
  }
  main(){
    this.draw();
  }
}
