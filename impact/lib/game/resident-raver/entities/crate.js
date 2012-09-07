ig.module(
    'game.resident-raver.entities.crate'
)
    .requires(
    'bootstrap.entities.base-player',
    'impact.sound',
    'bootstrap.plugins.impact.caption',
    'game.resident-raver.entities.destructible'
)
    .defines(function () {
        EntityCrate = EntityDestructible.extend({
            _wmIgnore: false,
            bloodColorOffset:3,
            animSheet:new ig.AnimationSheet('media/games/resident-raver/images/crate.png', 10, 10),
            size:{x:10, y:10},
            life:20,
            hitHardSFX: new ig.Sound( 'media/bootstrap/sounds/HitHard.*' ),
            deathSFX: new ig.Sound( 'media/bootstrap/sounds/Death.*' ),
            receiveDamage:function(value, from) {
                this.parent(value, from);
                if (this.health > 0) {
                    this.hitHardSFX.play();
                }
            }
        })
    });