import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.store = this.get('targetObject.store');
  },
  toggleCompleted: function(){
    this.store.find('todo', this.todo.id).then(function(todo){
      todo.save();
    });
  }.observes('todo.completed'),
  actions: {
    destroyTodo: function(){
      this.store.find('todo', this.todo.id).then(function(todo){
        todo.destroyRecord();
      });
    }
  },

});
