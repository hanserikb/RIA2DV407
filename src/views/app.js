define(['jQ',
  'backbone',
  'underscore',
  'recipeView',
  'recipeModel',
  'recipeListView',
  'recipeCollection',
  'addRecipeView', 'modal'], function($, Backbone, _, RecipeView, RecipeModel, RecipeListView, RecipeCollection, AddRecipeView) {
    var Appview = Backbone.View.extend({
      el: 'body',

      initialize: function() {

        Backbone.on('recipe:show', this.showRecipe, this);

        this.recipeCollection = new RecipeCollection();
        recipes = new RecipeListView({collection: this.recipeCollection});
      },

      events: {
        'click #add-recipe': "newAddRecipeView"
      },

      showRecipe: function(id) {
        console.log('showrecipe');
      },

      newAddRecipeView: function() {
        var addRecipeview = new AddRecipeView({collection: this.recipeCollection});
        this.$el.append(addRecipeview.render().el);
      }

    });
    return Appview;
  });
