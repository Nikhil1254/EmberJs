/* eslint-disable prettier/prettier */
import EmberRouter from '@ember/routing/router';
import config from 'routing-tutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('not-found',{path : '/*'});
  this.route('posts', function () {
    this.route('new');
  });
  this.route('favorite-posts');
});
