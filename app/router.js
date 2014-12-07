import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');
  this.resource('todos',{path: '/'}, function() {
    this.route('active', {path: '/active'});
    this.route('completed', {path: '/completed'});
  });
});

export default Router;
