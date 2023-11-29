const datos = {
  wait: 0,
  text: "",
  x: 200,
  pos: 0,
};
export class Dialogos {
  constructor() {}
  static DibujarCudroDialog(ctx) {
    ctx.fillStyle = "rgba(0, 0, 0)";
    ctx.fillRect(0, 120, 400, 100);
  }
  static EscribirDialogo(param, ctx) {
    datos.wait++;
    let arr = param.dialogo[0].split("");
    this.DibujarCudroDialog(ctx);
    if (datos.wait == 5 && datos.pos < arr.length) {
      datos.wait = 0;

      datos.text += arr[datos.pos];
      datos.pos++;
    }
    ctx.font = 10;
    ctx.fillStyle = "yellow";
    ctx.fillText(datos.text, 10, 135);
  }
}
