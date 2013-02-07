define(['backbone', 'router'], function(Backbone, Router) {
  var App = {
    // Initalizes the application
    initialize: function() {
      new Router();
      Backbone.history.start();
      console.log('Router started');
    }
  }

  return App;
})