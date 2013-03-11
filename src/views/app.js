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
        'click #add-recipe': 'newAddRecipeView'
      },

      showRecipe: function(id) {
        console.log('showrecipe');
      },

      newAddRecipeView: function() {
        if (this.addRecipeView) {
          console.log('den finns!');
          this.addRecipeView.model = null;
          this.addRecipeView.render().toggleModal();
        } else {
          console.log('finns inte, skapar!');
          this.addRecipeView = new AddRecipeView({collection: this.recipeCollection});
          this.$el.append(this.addRecipeView.render().el);
        }
      }

    });
    return Appview;
  });
