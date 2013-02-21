define(['jquery', 'backbone', 'underscore', '../../../src/views/dish.js', '../../../src/models/dish.js', '../views/recipeList', '../collections/dishes'], function($, Backbone, _, DishView, DishModel, recipeList, DishCollection) {
  var Appview = Backbone.View.extend({
    $el: $('.container'),

    initialize: function() {
      //recipeCollection = new DishCollection();
      recipes = new recipeList();
    }

  });
  return Appview;
});