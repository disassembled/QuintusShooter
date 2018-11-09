var Q = Quintus()
    .include("Sprites, Anim")
    .setup({ width: 800, height: 480 });

Q.Sprite.extend("Player", {
    init: function (p) {
        this._super(p, {
            sprite: "player", // maps to "player" in player.json
            sheet: "player",
            x: Q.el.width / 2,
            y: Q.el.height - 60,
            type: Q.SPRITE_FRIENDLY,
            speed: 10,
        });

        this.add("animation");
        this.play("default");
    }
});

Q.load(["spacebackground.png", "spaceship2.png", "player.json"], () => {
    Q.compileSheets("spaceship2.png", "player.json");
    Q.animations("player", { default: { frames: [0,1,2,3], rate: 1/4 } });
    var background = new Q.Sprite({ asset: "spacebackground.png", x: Q.el.width / 2, y: Q.el.height / 2, type: Q.SPRITE_NONE });
    var player = new Q.Player();
    Q.gameLoop(dt => {
        Q.clear();
        background.render(Q.ctx);
        player.update(dt);
        player.render(Q.ctx);
    });
});
