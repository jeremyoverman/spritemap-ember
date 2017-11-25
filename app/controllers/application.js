import Controller from '@ember/controller';

export default Controller.extend({
    siteName: 'SpriteMap',
    routes: Ember.computed('currentRouteName', function () {
        let currentRoute = this.get('currentRouteName');
        let routes = [
            { name: 'Home', path: 'home' },
            { name: 'Sprite Editor', path: 'sprite-editor' },
        ];

        return routes.map((route) => {
            route.active = (route.path === currentRoute);

            return route;
        });
    })
});
