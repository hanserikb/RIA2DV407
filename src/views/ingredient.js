define(['jQ', 'underscore', 'backbone', 'handlebars'], function($, _, Backbone, Handlebars) {
  return Backbone.View.extend({
    // The ingredients is always shown in a list as separate list items
    tagName: 'li',

    template: Handlebars.compile('{{name}} - {{amount}}'),

    initialize: function() {
      
    },

    events: {
      'click .delete': 'removeIngredient'
    },

    removeIngredient: function(e) {
      var recipe = this.model.get('belongsTo');
      recipe.get('ingredients').get(this.model).destroy();
      recipe.save();
    },

    // Renders the ingredient
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
});