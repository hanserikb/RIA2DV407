define(['jquery', 'backbone', 'underscore', '../../../src/views/dish.js', '../../../src/models/dish.js'], function($, Backbone, _, DishView, DishModel) {
  var Appview = Backbone.View.extend({
    $el: $('.container'),


    initialize: function() {
      console.log('Hello world!');
      var dish = new DishModel({
        name: 'köttbullar',
        description: "Hejsan",
        cookingTime: '20 minutes'
      });

      var dishView = new DishView({model: dish});

      $('.container').append(dishView.render().$el);

    }
  });
  return Appview;
});