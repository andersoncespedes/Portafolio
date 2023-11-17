export const overworldJson = {
    heroe:{
        frameX:2,
        frameY:12,
        width:16,
        height:24,
        spriteImg:"./Assets/Sprites/Ness.png",
        animationSprite:
        {
            "standDown":[[0,0]],
            "standUp":[[0,3]],
            "standRight":[[0,3]],
            "standLeft":[[0,3]],
            "movUp":[[1,0], [1,1]],
            "movDown":[[0,0],[0,1]],
            "movLeft":[[0,3], [0,4]],
            "movRight":[[1,3],[1,2]]
        }
    },
    level:[
    {
        x:-800,
        y:-800,
        width:2900,
        height:2900,
        BackGround:"./Assets/Worlds/onettday.png"
    }
]}