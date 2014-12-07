import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'todos.index',
  model: function(params){
      return this.store.find('todo', {completed: false});
  }
});
