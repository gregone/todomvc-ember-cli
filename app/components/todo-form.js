import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.store = this.get('targetObject.store');
  },
  actions: {
    saveTodo: function(){
      var todoTitle = this.get('newTodo');
      var persistableTodo = this.store.createRecord('todo', {
        title: todoTitle,
        completed: false
      });
      persistableTodo.save();
      // Todo: Figure out if there's a better way
      // to clean up the Input Field
      this.set('newTodo', '');
    }
  }
});
