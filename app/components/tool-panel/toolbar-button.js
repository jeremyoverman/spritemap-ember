import Component from '@ember/component';

export default Component.extend({
    tagName: 'button',
    classNames: ['btn', 'btn-sm'],
    classNameBindings: ['active', 'floatClass'],
    attributeBindings: ['disabled'],

    floatClass: Ember.computed('float', function () {
        let float = this.get('float');
        let name = '';

        if (float === 'right') {
            name = 'btn-float-right'
        } else if (float === 'left') {
            name = 'btn-float-left';
        }

        return name;
    }),

    hasText: Ember.computed('text', function () {
        return Boolean(this.get('text'));
    }),

    click() {
        this.onClick();
    }
});
