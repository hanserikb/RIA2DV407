define(['underscore', 'backbone'], function(_, Backbone) {
  console.log(Backbone.Router);
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