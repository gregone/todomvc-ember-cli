import Ember from 'ember';

export default Ember.ArrayController.extend({
  model: 'todo',
  remaining: Ember.computed.filterBy('model', 'completed', false),
  completed: Ember.computed.filterBy('model', 'completed', true)
});
