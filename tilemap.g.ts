// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000106000008000000000000000000000004050000000000000000090000000000000000000000000000000106000000000000000000000000000004050000000000000000000000000000000000000000000000000000000000000000000000000106000000000000000000000000000004050000000000000000000001060000000000000000000000000000040500000000000000000000000000000000000000000000000000010202060000000000000000000000000403030500000000000000000000000007070707070707070707070707070707`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 . . 2 . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 . . . . . . . . . . . 
. . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . 2 2 . . . . . . . . . 
. . . . . 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.builtin.forestTiles10,sprites.builtin.forestTiles0,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
