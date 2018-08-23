import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('post', { path: '/view/:id' })
  this.route('about');
  this.route('contact');
  this.route('fashion', function() {
    this.route('view', { path: '/:id' });
  });
  this.route('decor', function() {
    this.route('view', { path: '/:id' });
  });
});

export default Router;
