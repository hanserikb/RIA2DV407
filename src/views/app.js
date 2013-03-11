define(['jQ', 'backbone',
  'recipeListView',
  'recipeCollection',
  'addRecipeView', 'modal'], function($, Backbone, RecipeListView, RecipeCollection, AddRecipeView) {
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
        console.log('showrecipe: ' + id);
      },

      newAddRecipeView: function() {
        if (this.addRecipeView) {
          this.addRecipeView.model = null;
          this.addRecipeView.render().toggleModal();
        } else {
          this.addRecipeView = new AddRecipeView({collection: this.recipeCollection});
          this.$el.append(this.addRecipeView.render().el);
        }
      }

    });
    return Appview;
  });
