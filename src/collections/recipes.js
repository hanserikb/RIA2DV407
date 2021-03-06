define(['jQ', 'backbone', 'recipeModel', 'localstorage'], function($, Backbone, RecipeModel) {
  // RecipeModel collection
  return Backbone.Collection.extend({
    // Tied to the dish model
    model: RecipeModel,
    url: '/dishes',
    localStorage: new Backbone.LocalStorage('dishes'),
    initialize: function() {
      this.on('add', this.saveRecipe, this);
      this.on('remove', this.removeRecipe, this);
      /*
      var dish0 = new RecipeModel({name: 'Köttbullar', description: 'Fina bullar', cookingTime: '20 minutes'});
      var dish1 = new RecipeModel({name: 'Köttbullar', description: 'Fina bullar', cookingTime: '20 minutes'});
      var dish2 = new RecipeModel({name: 'Köttbullar', description: 'Fina bullar', cookingTime: '20 minutes'});

      this.add([dish0, dish1, dish2]);
      */
    },

    saveRecipe: function(model) {
      model.save();
    }
  });
});