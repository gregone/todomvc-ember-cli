import Ember from "ember";
import DS from 'ember-data';
// We use the localForage adapter instead of the default
// RESTAdapter

export default DS.LFAdapter.extend({
  namespace: 'todomvc',
  caching: 'none'
});
