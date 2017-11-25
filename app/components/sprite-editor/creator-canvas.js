import Component from '@ember/component';

export default Component.extend({
    didReceiveAttrs() {
        if (!this.get('editor')) {
            // Create the editor
            let editor = new SpriteMap.Creator(this.get('sprite'));

            this.set('editor', editor);
            this.set('canvas', editor.canvas);
        }

        // Update editor
        let editor = this.get('editor');

        editor.setGrid(this.get('isGridActive'));
        editor.zoom = this.get('zoom');
    }
});
