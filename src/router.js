define(['backbone'], function(Backbone) {
  console.log(Backbone.Router);
  var Router = Backbone.Router.extend({
    
    routes: {
      '': 'index',
      'recipies/:id': 'showDetails'
    },

    // Index page
    index: function() {
      
    },
    showDetails: function(id) {
      console.log(id);
      Backbone.trigger('recipe:show', [id]);
    }

  });

  return Router;
});