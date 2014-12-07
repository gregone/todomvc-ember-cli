import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos.index', {path: '/'});
  this.route('todos.active', {path: '/active'});
  this.route('todos.completed', {path: '/completed'});
});

export default Router;
