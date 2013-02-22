define(['jQ', 'backbone', '../../src/models/dish.js', 'localstorage'], function($, Backbone, Dish) {
  // Dish collection
  return Backbone.Collection.extend({
    // Tied to the dish model
    model: Dish,
    url: '/dishes',
    localStorage: new Backbone.LocalStorage('dishes'),
    initialize: function() {
      /*
      var dish0 = new Dish({name: 'Köttbullar', description: 'Fina bullar', cookingTime: '20 minutes'});
      var dish1 = new Dish({name: 'Köttbullar', description: 'Fina bullar', cookingTime: '20 minutes'});
      var dish2 = new Dish({name: 'Köttbullar', description: 'Fina bullar', cookingTime: '20 minutes'});

      this.add([dish0, dish1, dish2]);
      */
    }
  });
});