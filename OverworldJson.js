export const overworldJson = {
    heroe:{
        frameX:1,
        frameY:10,
        width:16,
        height:24,
        spriteImg:"./Assets/Sprites/Ness.png",
        animationSprite:
        {
            "standDown":[[0,0]],
            "movUp":[[0,3], [0,5]],
            "movDown":[[0,0],[0,1]],
            "movRight":[[0,4], [0,5]],
            "movLeft":[[1,3],[1,2]]
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