define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {
  var Appview = Backbone.View.extend({
    initialize: function() {
      alert('Hello world!');
    }
  });
  return Appview;
});