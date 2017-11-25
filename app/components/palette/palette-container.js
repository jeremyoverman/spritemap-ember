import Component from '@ember/component';

export default Component.extend({
    init () {
        this._super(...arguments);
        this.palette = new SpriteMap.Palette();
        this.canvas = this.palette.canvas;
    },

    didRender () {
        this.sendAction('onLoad', this.get('palette'));
    }
});
