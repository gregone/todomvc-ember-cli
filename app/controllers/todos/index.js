import Ember from 'ember';

export default Ember.ArrayController.extend({
  remaining: Ember.computed.filterBy('model', 'completed', false).length,
  completed: Ember.computed.filterBy('model', 'completed', true).length
});
