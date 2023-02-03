controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hero.isHittingTile(CollisionDirection.Bottom)) {
        Hero.vy = -150
    }
})
let Hero: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
Hero = sprites.create(img`
    . . . . f f f f f . . . 
    . . f f e e e e e f . . 
    . f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f f 
    . f 4 d 4 d d d d f f . 
    . f f f 4 d d b b f . . 
    . . f e e 4 4 4 e f . . 
    . . 4 d d e 1 1 1 f . . 
    . . e d d e 1 1 1 f . . 
    . . f e e f 6 6 6 f . . 
    . . . f f f f f f . . . 
    . . . . f f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Hero, tiles.getTileLocation(0, 12))
scene.cameraFollowSprite(Hero)
controller.moveSprite(Hero)
Hero.ay = 250
