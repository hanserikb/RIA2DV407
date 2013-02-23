define(['jQ', 'backbone', 'recipeModel', 'localstorage'], function($, Backbone, RecipeModel) {
  // Dish collection
  return Backbone.Collection.extend({
    // Tied to the dish model
    model: RecipeModel,
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