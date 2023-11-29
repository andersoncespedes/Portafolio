import { escena } from "./Escenes/index.js";
import { Dialogos } from "./Sprites/Dialgos.js";
import { Colision } from "./Sprites/Colisiones.js";
export const overworldJson = {
  heroe: {
    frameX: 2,
    frameY: 12,
    width: 16,
    height: 24,
    spriteImg: "./Assets/Sprites/ness_sprites1.png",
    animationSprite: {
      standDown: [[0, 0]],
      standUp: [[0, 2]],
      standRight: [[0, 6]],
      standLeft: [[0, 3]],
      movUp: [
        [0, 2],
        [0, 7],
      ],
      movDown: [
        [0, 0],
        [0, 1],
      ],
      movLeft: [
        [0, 3],
        [0, 4],
      ],
      movRight: [
        [0, 5],
        [0, 6],
      ],
    },
  },
  level: [
    {
      x: -800,
      y: -800,
      MapX:2,
      MapY:1,
      width: 2900,
      height: 2900,
      BackGround: "./Assets/Worlds/onettday.png",
      colisiones: new Colision([
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1],
        
      ]),
      npc: [
        {
          XDialog: 0,
          x: 50,
          y: 0,
          xActual: 150,
          yActual: 50,
          frameX: 16,
          frameY: 24.1,
          frame: 0,
          wait: 0,
          width: 16,
          height: 24,
          activaded: true,
          AnimationActual: "movRight",
          animationSprite: {
            movDown: [
              [0, 0],
              [0, 1],
            ],
            movRight: [
              [0, 5],
              [0, 6],
            ],
          },
          script: function (param) {
            if (this.activaded) {
              if (this.x < this.xActual) {
                this.AnimationActual = "movRight";
                this.x++;
                Dialogos.EscribirDialogo(escena.Npc1, param);
                return true;
              } else if (this.x == this.xActual && this.y < this.yActual) {
                this.AnimationActual = "movDown";
                this.y++;

                return true;
              } else {
                this.activaded = false;
                this.AnimationActual = "movDown";

                return false;
              }
            }
            return false;
          },
          spriteImg: "./Assets/Sprites/ness_sprites1.png",
        },
      ],
    },
  ],
};
