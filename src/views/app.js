define(['jquery', 'backbone', 'underscore', '../../../src/views/dish.js', '../../../src/models/dish.js', '../views/recipeList', '../collections/dishes'], function($, Backbone, _, DishView, DishModel, recipeList, DishCollection) {
  window.DishModel = DishModel;
  var Appview = Backbone.View.extend({
    $el: $('.container'),

    initialize: function() {
      //window.recipeCollection = new DishCollection();
      window.recipes = new recipeList({collection: window.recipeCollection});
    }

  });
  return Appview;
});