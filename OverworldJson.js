export const overworldJson = {
    heroe:{
        frameX:2,
        frameY:12,
        width:16,
        height:24,
        spriteImg:"./Assets/Sprites/ness_sprites1.png",
        animationSprite:
        {
            "standDown":[[0,0]],
            "standUp":[[0,2]],
            "standRight":[[0,6]],
            "standLeft":[[0,3]],
            "movUp":[[0,2], [0,7]],
            "movDown":[[0,0],[0,1]],
            "movLeft":[[0,3], [0,4]],
            "movRight":[[0,5],[0,6]]
        }
    },
    level:[
    {
        x:-800,
        y:-800,
        width:2900,
        height:2900,
        BackGround:"./Assets/Worlds/onettday.png",
        npc:
        [
            {
                frameX:2,
                frameY:12,
                width:16,
                height:24,
                spriteImg:"./Assets/Sprites/ness_sprites1.png",
            }
        ]
    }
]}