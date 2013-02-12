define(['backbone'], function(Backbone, Person) {
  var Router = Backbone.Router.extend({
    
    routes: {
      '': 'index'
    },

    // Index page
    index: function() {
      
    }

  });

  return Router;
});