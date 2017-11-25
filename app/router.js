import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sprite-editor');
  this.route('home');
  this.route('users', { path: '/users/:userid' }, function () {
    this.route('profile');
  });
  this.route('sprites', { path: '/sprites/:spriteid'});
});

export default Router;
