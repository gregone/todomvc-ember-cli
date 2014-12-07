import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.store = this.get('targetObject.store');
  },
  actions: {
    destroyTodo: function(){
      this.store.find('todo', this.todo.id).then(function(todo){
        todo.destroyRecord();
      });
    }
  }
});
