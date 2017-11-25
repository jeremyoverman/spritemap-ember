import Component from '@ember/component';

export default Component.extend({
    sprite: null,

    isGridActive: true,
    zoom: 10,

    isZoomedOut: Ember.computed('zoom', function () {
        return this.get('zoom') === 1;
    }),

    didReceiveAttrs () {
        let src = this.get('src');

        SpriteMap.getCanvasFromSource(src).then((canvas) => {
            let palette = this.get('palette');
            let sprite = new SpriteMap.Sprite(canvas, palette);

            this.set('sprite', sprite);
        });
    },

    actions: {
        toggleGrid () {
            this.set('isGridActive', !this.get('isGridActive'));
        },

        zoom (dir) {
            let zoom = this.get('zoom');
            if (dir === 'in') this.set('zoom', zoom + 1);
            else this.set('zoom', zoom - 1);
        }
    }
});
