import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.store = this.get('targetObject.store');
  },
  actions: {
    saveTodo: function(){
      var todoTitle = this.get('newTodo');
      console.log(todoTitle);
      this.store.createRecord('todo', {
        title: todoTitle,
        completed: false
      });
      // Todo: cleanup Input Field
    }
  }
});
