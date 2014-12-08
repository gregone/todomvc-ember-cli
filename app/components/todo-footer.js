import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    this.store = this.get('targetObject.store');
  },
  completed: function(){
    var completed = this.get('completed');
    console.log(completed);
    return completed;
  }.property('@each'),
  remaining: function(){
    var remaining = this.get('remaining');
    console.log(remaining);
    return remaining;
  }.property('@each'),
  actions:{
    clearCompleted: function(todos){
      var todos = this.get('targetObject.model');
      var completedTodos = todos.filterBy('completed', true);
      completedTodos.forEach(function(todo){
        return todo.destroyRecord();
      });
    }
  }
});
