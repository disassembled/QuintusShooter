var Q = Quintus()
    .include("Sprites")
    .setup({ width: 800, height: 480 });

Q.Sprite.extend("Player", {
    init: function (p) {
        this._super(p, {
            asset: "player.png",
            x: Q.el.width / 2,
            y: Q.el.height - 60,
            type: Q.SPRITE_FRIENDLY,
            speed: 10,
        });
    }
});

Q.load(["spacebackground.png", "player.png"], function () {
    var background = new Q.Sprite({ asset: "spacebackground.png", x: Q.el.width / 2, y: Q.el.height / 2, type: Q.SPRITE_NONE });
    var player = new Q.Player();
    Q.gameLoop(dt => {
        Q.clear();
        background.render(Q.ctx);
        player.render(Q.ctx);
    });
});
