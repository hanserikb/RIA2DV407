define(['jquery',
  'backbone',
  'underscore',
  '../../../src/views/dish.js',
  '../../../src/models/dish.js',
  '../views/recipeList',
  '../collections/dishes',
  '../views/addRecipe',
  'Bootstrap-modal'], function($, Backbone, _, DishView, DishModel, recipeList, DishCollection, addRecipeView) {
    var Appview = Backbone.View.extend({
      el: 'body',
      $el: $('body'),

      initialize: function() {
        recipeCollection = new DishCollection();
        recipes = new recipeList({collection: recipeCollection});
      },

      events: {
        'click #add-recipe': "newAddRecipeView"
      },

      newAddRecipeView: function() {
        var addRecipeview = new addRecipeView();
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
