import Component from '@ember/component';

export default Component.extend({
    classNames: ['sprite-editor'],
    palette: null,

    actions: {
        loadPalette: function (palette) {
            this.set('palette', palette);

        }
    }
});