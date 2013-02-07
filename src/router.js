define(['backbone', 'models/person'], function(Backbone, Person) {
  var Router = Backbone.Router.extend({
    
    routes: {
      '': 'index'
    },

    // Index page
    index: function() {
      var person = new Person();
      console.log(person);
    }

  });

  return Router;
});