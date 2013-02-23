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
        recipeCollection = new RecipeCollection();
        recipes = new RecipeListView({collection: recipeCollection});
      },

      events: {
        'click #add-recipe': "newAddRecipeView"
      },

      newAddRecipeView: function() {
        var addRecipeview = new AddRecipeView();
        this.$el.append(addRecipeview.render().el);
        $('#add-recipe-modal').modal().css({
          width: 'auto',
          'margin-left': function () {
            return -($(this).width() / 2);
          }
        });;
      }

    });
    return Appview;
  });
